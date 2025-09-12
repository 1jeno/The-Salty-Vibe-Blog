import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import type { AffiliateProduct } from '@shared/schema';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const { data: products = [], isLoading } = useQuery<AffiliateProduct[]>({
    queryKey: ['/api/affiliate-products'],
    enabled: true,
  });

  const categories = [
    { id: 'all', name: 'All Favorites', description: 'Everything I love and recommend' },
    { id: 'beauty', name: 'Beauty & Wellness', description: 'Skincare and self-care essentials' },
    { id: 'lifestyle', name: 'Coastal Living', description: 'Home, decor & lifestyle pieces' },
    { id: 'travel', name: 'Travel Essentials', description: 'Everything for your next adventure' },
    { id: 'food', name: 'Food & Kitchen', description: 'Culinary favorites and kitchen tools' }
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((product: AffiliateProduct) => product.category === activeCategory);
  }, [products, activeCategory]);

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Shop My Favorites
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Curated with love - these are the products that make my coastal lifestyle 
            beautiful, intentional, and effortlessly chic. Each item has earned its place 
            in my daily routine and captured my heart.
          </p>
          <AffiliateDisclosure variant="banner" className="max-w-2xl mx-auto" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex flex-col items-center h-auto py-3 px-4"
                data-testid={`button-category-${category.id}`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-xs opacity-80">{category.description}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Current Category Info */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
            {currentCategory?.name}
          </h2>
          <p className="text-muted-foreground">
            {currentCategory?.description}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: AffiliateProduct) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showDescription={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category yet. Check back soon for new additions!
            </p>
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-muted/30 rounded-lg">
            <h3 className="font-serif text-xl font-semibold mb-3">
              More Recommendations Coming Soon
            </h3>
            <p className="text-muted-foreground">
              I'm constantly discovering new products that align with the coastal lifestyle. 
              Follow along on the blog for the latest finds and honest reviews of everything 
              I'm loving lately.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}