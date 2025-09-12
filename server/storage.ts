import { type User, type InsertUser, type AffiliateProduct, type InsertAffiliateProduct } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Affiliate Products
  getAffiliateProducts(): Promise<AffiliateProduct[]>;
  getAffiliateProductsByCategory(category: string): Promise<AffiliateProduct[]>;
  getAffiliateProduct(id: string): Promise<AffiliateProduct | undefined>;
  createAffiliateProduct(product: InsertAffiliateProduct): Promise<AffiliateProduct>;
  updateAffiliateProduct(id: string, product: Partial<AffiliateProduct>): Promise<AffiliateProduct | undefined>;
  incrementClickCount(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private affiliateProducts: Map<string, AffiliateProduct>;

  constructor() {
    this.users = new Map();
    this.affiliateProducts = new Map();
    this.initializeSampleAffiliateProducts();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Affiliate Products Methods
  async getAffiliateProducts(): Promise<AffiliateProduct[]> {
    return Array.from(this.affiliateProducts.values()).filter(p => p.isActive);
  }

  async getAffiliateProductsByCategory(category: string): Promise<AffiliateProduct[]> {
    return Array.from(this.affiliateProducts.values()).filter(
      p => p.isActive && p.category === category
    );
  }

  async getAffiliateProduct(id: string): Promise<AffiliateProduct | undefined> {
    return this.affiliateProducts.get(id);
  }

  async createAffiliateProduct(insertProduct: InsertAffiliateProduct): Promise<AffiliateProduct> {
    const id = randomUUID();
    const product: AffiliateProduct = {
      ...insertProduct,
      id,
      isActive: insertProduct.isActive ?? true,
      clickCount: "0",
      createdAt: new Date(),
    };
    this.affiliateProducts.set(id, product);
    return product;
  }

  async updateAffiliateProduct(id: string, updates: Partial<AffiliateProduct>): Promise<AffiliateProduct | undefined> {
    const product = this.affiliateProducts.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { ...product, ...updates };
    this.affiliateProducts.set(id, updatedProduct);
    return updatedProduct;
  }

  async incrementClickCount(id: string): Promise<void> {
    const product = this.affiliateProducts.get(id);
    if (product) {
      const currentCount = parseInt(product.clickCount || "0");
      product.clickCount = (currentCount + 1).toString();
      this.affiliateProducts.set(id, product);
    }
  }

  private initializeSampleAffiliateProducts(): void {
    const sampleProducts = [
      {
        id: "sunbum-spf30" as string,
        name: "SunBum Original SPF 30 Sunscreen Spray",
        description: "The perfect sunscreen for beach days! Goes on smoothly, smells amazing, and provides excellent protection without feeling heavy or greasy.",
        category: "beauty",
        price: "16.99",
        imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
        affiliateUrl: "#", // Would be replaced with real affiliate link
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "ceramic-travel-mug",
        name: "Handmade Ceramic Travel Mug",
        description: "Beautiful artisan-crafted ceramic travel mug perfect for your morning coffee ritual. Each piece is unique and gorgeous for photos!",
        category: "lifestyle",
        price: "28.00",
        imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
        affiliateUrl: "#", // Would be replaced with real affiliate link
        retailer: "Etsy",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "woven-beach-bag",
        name: "Natural Woven Beach Tote Bag",
        description: "The perfect white woven bag for all your beach essentials. Spacious, durable, and absolutely Instagram-worthy for your coastal adventures.",
        category: "lifestyle",
        price: "45.00",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        affiliateUrl: "#", // Would be replaced with real affiliate link
        retailer: "Target",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "cream-blanket",
        name: "Soft Cream Beach Blanket",
        description: "The dreamiest cream-colored blanket that's perfect for beach picnics and morning rituals. So soft and photographs beautifully against the sand!",
        category: "lifestyle", 
        price: "32.99",
        imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop",
        affiliateUrl: "#", // Would be replaced with real affiliate link
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      }
    ];

    sampleProducts.forEach(product => {
      this.affiliateProducts.set(product.id, product as AffiliateProduct);
    });
  }
}

export const storage = new MemStorage();
