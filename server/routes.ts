import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAffiliateProductSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactFormEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Affiliate Products API Routes
  app.get("/api/affiliate-products", async (req, res) => {
    try {
      const category = req.query.category as string;
      const products = category 
        ? await storage.getAffiliateProductsByCategory(category)
        : await storage.getAffiliateProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch affiliate products" });
    }
  });

  app.get("/api/affiliate-products/:id", async (req, res) => {
    try {
      const product = await storage.getAffiliateProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch affiliate product" });
    }
  });

  app.post("/api/affiliate-products/:id/click", async (req, res) => {
    try {
      await storage.incrementClickCount(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to track click" });
    }
  });

  app.post("/api/affiliate-products", async (req, res) => {
    try {
      const validatedData = insertAffiliateProductSchema.parse(req.body);
      const product = await storage.createAffiliateProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create affiliate product" });
    }
  });

  // Newsletter signup endpoint
  app.post("/api/newsletter/signup", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: "Valid email address is required" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }

      // TODO: Integrate with SendGrid for email list management
      console.log('Newsletter signup:', email);
      
      // For now, just log and return success
      // In the future, this will integrate with SendGrid to add to email list
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        email: email.trim().toLowerCase()
      });
    } catch (error) {
      console.error('Newsletter signup error:', error);
      res.status(500).json({ error: "Failed to process newsletter signup" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: "Name must be at least 2 characters" });
      }
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: "Valid email address is required" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please enter a valid email address" });
      }

      if (!subject || typeof subject !== 'string' || subject.trim().length < 5) {
        return res.status(400).json({ error: "Subject must be at least 5 characters" });
      }

      if (!message || typeof message !== 'string' || message.trim().length < 10) {
        return res.status(400).json({ error: "Message must be at least 10 characters" });
      }

      // Send email using SendGrid
      const emailSent = await sendContactFormEmail(
        name.trim(),
        email.trim(),
        subject.trim(),
        message.trim()
      );

      if (!emailSent) {
        return res.status(500).json({ error: "Failed to send message. Please try again." });
      }

      res.json({ 
        success: true, 
        message: "Thank you for reaching out. I'll get back to you soon!"
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: "There was a problem sending your message. Please try again." });
    }
  });

  const updateAffiliateProductSchema = insertAffiliateProductSchema.partial();

  app.patch("/api/affiliate-products/:id", async (req, res) => {
    try {
      const validatedData = updateAffiliateProductSchema.parse(req.body);
      const product = await storage.updateAffiliateProduct(req.params.id, validatedData);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update affiliate product" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
