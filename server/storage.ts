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
        id: "mini-iced-coffee-maker" as string,
        name: "Mini Iced Coffee Maker",
        description: "Café-quality cold brew concentrate maker. Compact design perfect for small kitchens and beach morning routines.",
        category: "food",
        price: "24.99",
        imageUrl: "/images/Amazon _iced_coffee_min.jpg",
        affiliateUrl: "https://amzn.to/426VpSx",
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "pink-yeti-travel-cup",
        name: "Pink Yeti Travel Cup",
        description: "Keeps iced coffee perfectly cold for hours. Gorgeous pink color that photographs beautifully for Instagram.",
        category: "travel",
        price: "39.99",
        imageUrl: "/images/Amazon Yeti Travel Cup.jpg",
        affiliateUrl: "https://amzn.to/46MjgcN",
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "sunbum-body-lotion",
        name: "SunBum Body Lotion Sunscreen",
        description: "Daily go-to sunscreen with luxurious lotion formula. Smells like vacation and provides amazing protection for everyday use.",
        category: "beauty",
        price: "16.99",
        imageUrl: "/images/Amazon Sun Bum Sun Block Review .jpeg",
        affiliateUrl: "https://amzn.to/4gxYEsl",
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "sunbum-beach-sunblock",
        name: "SunBum Beach Sunblock",
        description: "Stronger formula for intense beach days. Perfect for long hours in direct sun and water activities.",
        category: "beauty",
        price: "18.99",
        imageUrl: "/images/Amazon_Sun Bum_ Beach_Sunblock.jpeg",
        affiliateUrl: "https://amzn.to/46voqZz",
        retailer: "Amazon",
        isActive: true,
        clickCount: "0",
        createdAt: new Date(),
      },
      {
        id: "juliette-has-a-gun-lust-for-sun",
        name: "Juliette Has A Gun - Lust for Sun",
        description: "Tropical paradise in a bottle. This luxurious fragrance captures the essence of sun-soaked vacation days with notes that transport you to your perfect beach getaway.",
        category: "beauty",
        price: "96.00",
        imageUrl: "/images/Amzaon_Perfume_Beachy.jpeg",
        affiliateUrl: "https://amzn.to/427B7bC",
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
