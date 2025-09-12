import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAffiliateProductSchema } from "@shared/schema";
import { z } from "zod";

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
