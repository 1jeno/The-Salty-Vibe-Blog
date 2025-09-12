import { sql } from "drizzle-orm";
import { pgTable, text, varchar, decimal, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const affiliateProducts = pgTable("affiliate_products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(), // lifestyle, travel, food, beauty, etc.
  price: decimal("price", { precision: 10, scale: 2 }),
  imageUrl: text("image_url"),
  affiliateUrl: text("affiliate_url").notNull(),
  retailer: text("retailer").notNull(), // Amazon, Target, etc.
  isActive: boolean("is_active").default(true),
  clickCount: varchar("click_count").default("0"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAffiliateProductSchema = createInsertSchema(affiliateProducts).omit({
  id: true,
  clickCount: true,
  createdAt: true,
});

export type InsertAffiliateProduct = z.infer<typeof insertAffiliateProductSchema>;
export type AffiliateProduct = typeof affiliateProducts.$inferSelect;
