import { ExternalLink, Coffee, Sun, Home, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

interface AffiliateProduct {
  name: string;
  description: string;
  link: string;
  price: string;
  category: string;
  icon: React.ReactNode;
}

export default function MorningEssentials() {
  const products: AffiliateProduct[] = [
    {
      name: "Mini Iced Coffee Maker",
      description: "Café-quality cold brew concentrate maker. Compact design perfect for small kitchens.",
      link: "https://amzn.to/426VpSx",
      price: "Perfect for iced coffee lovers",
      category: "Coffee",
      icon: <Coffee className="h-6 w-6 text-coral-500" />
    },
    {
      name: "Pink Yeti Travel Cup",
      description: "Keeps iced coffee perfectly cold for hours. Gorgeous pink color that photographs beautifully.",
      link: "https://amzn.to/46MjgcN", 
      price: "Beach morning essential",
      category: "Travel",
      icon: <Coffee className="h-6 w-6 text-coral-500" />
    },
    {
      name: "SunBum Body Lotion Sunscreen",
      description: "My daily go-to sunscreen. Luxurious lotion formula that smells like vacation and provides amazing protection.",
      link: "https://amzn.to/4gxYEsl",
      price: "Daily protection + amazing scent",
      category: "Sun Care",
      icon: <Sun className="h-6 w-6 text-coral-500" />
    },
    {
      name: "SunBum Beach Sunblock",
      description: "Stronger formula for intense beach days. Perfect for long hours in direct sun.",
      link: "https://amzn.to/46voqZz",
      price: "Heavy-duty beach protection",
      category: "Sun Care", 
      icon: <Sun className="h-6 w-6 text-coral-500" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Morning Essentials - The Exact Products I Use Daily | The Salty Vibe"
        description="Get the exact products from my perfect beach morning routine. Mini iced coffee maker, pink Yeti cup, SunBum sunscreen, and more coastal lifestyle essentials."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-coral-500" />
              <Sun className="h-8 w-8 text-seafoam-500" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              My Morning Essentials
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The exact products from my perfect beach morning routine. These aren't just pretty - they're the game-changers that made my coastal mornings sustainable and enjoyable.
            </p>
          </div>

          {/* Affiliate Disclosure */}
          <div className="mb-12">
            <AffiliateDisclosure />
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <p className="text-sm text-coral-500 font-medium mb-4">
                        {product.price}
                      </p>
                      <Button 
                        asChild 
                        className="w-full"
                        data-testid={`button-shop-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <a 
                          href={product.link}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          className="inline-flex items-center gap-2"
                        >
                          Shop Now
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Want the Full Morning Routine?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Read my complete beach morning ritual guide with step-by-step instructions, timing tips, and the story behind how this routine transformed my life.
            </p>
            <Button asChild size="lg">
              <a href="/post/my-morning-ritual-coffee-by-the-ocean" className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Read Full Morning Ritual Guide
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ⭐ These are the actual products I use and love daily ⭐
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Follow my morning routine on Instagram @thesaltyvibe
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}