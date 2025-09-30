import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Serve static images from attached_assets/generated_images at /images/ path
app.use('/images', express.static(path.resolve(import.meta.dirname, '..', 'attached_assets', 'generated_images')));

(async () => {
  const server = await registerRoutes(app);

  // XML Sitemap - must be before static serving to avoid catch-all
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = req.get('host')?.includes('thesaltyvibe.com') 
      ? 'https://thesaltyvibe.com'
      : `https://${req.get('host')}`;

    const blogPosts = [
      { slug: "my-morning-ritual-coffee-by-the-ocean", lastmod: "2024-01-20" },
      { slug: "vacation-in-a-bottle-tropical-scents", lastmod: "2024-01-25" },
      { slug: "beach-capsule-wardrobe", lastmod: "2024-01-28" },
      { slug: "perfect-swimsuit-2026", lastmod: "2024-02-01" },
      { slug: "weekend-santorini-guide", lastmod: "2024-02-05" },
      { slug: "rose-gold-brunch-recipe", lastmod: "2024-02-08" },
      { slug: "coastal-cafes-hidden-gems", lastmod: "2024-02-12" },
      { slug: "sunset-beach-picnic-ideas", lastmod: "2024-02-15" },
      { slug: "perrys-porch-st-pete-gem", lastmod: "2024-03-15" },
      { slug: "gm-collin-clean-beauty-secrets", lastmod: "2024-09-15" },
      { slug: "l-horizon-palm-desert-luxury", lastmod: "2024-02-10" },
      { slug: "secrets-maroma-beach-riviera-cancun", lastmod: "2025-09-28" },
    ];

    const staticPages = [
      { url: "", priority: "1.0", changefreq: "daily" },
      { url: "about", priority: "0.8", changefreq: "monthly" },
      { url: "contact", priority: "0.7", changefreq: "monthly" },
      { url: "travel-resources", priority: "0.8", changefreq: "weekly" },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/post/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
