import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AffiliateLink from './AffiliateLink';
import type { AffiliateProduct } from '@shared/schema';

interface ProductCardProps {
  product: AffiliateProduct;
  showDescription?: boolean;
  compact?: boolean;
}

export default function ProductCard({ 
  product, 
  showDescription = true, 
  compact = false 
}: ProductCardProps) {
  const formatPrice = (price: string | null) => {
    if (!price) return '';
    return `$${parseFloat(price).toFixed(2)}`;
  };

  const getCategoryColor = (category: string) => {
    return 'bg-pink-500/60 text-white backdrop-blur-sm';
  };

  if (compact) {
    return (
      <AffiliateLink
        productId={product.id}
        href={product.affiliateUrl}
        variant="card"
        className="group"
      >
        <Card className="border-card-border">
          <CardContent className="p-4">
            <div className="flex gap-3">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  data-testid={`img-product-${product.id}`}
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm group-hover:text-pink-500 transition-colors truncate" data-testid={`text-product-name-${product.id}`}>
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className={`text-xs ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </Badge>
                  {product.price && (
                    <span className="text-sm font-semibold text-primary" data-testid={`text-price-${product.id}`}>
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  from {product.retailer}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AffiliateLink>
    );
  }

  return (
    <Card className="group border-card-border flex flex-col" data-testid={`card-product-${product.id}`}>
      <AffiliateLink
        productId={product.id}
        href={product.affiliateUrl}
        variant="card"
        className="flex-1"
      >
        {product.imageUrl && (
          <div className="relative overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              data-testid={`img-product-${product.id}`}
            />
            <Badge className={`absolute top-3 left-3 text-xs ${getCategoryColor(product.category)}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
          </div>
        )}
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-lg font-semibold group-hover:text-pink-500 transition-colors" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            {product.price && (
              <span className="text-lg font-bold text-primary flex-shrink-0" data-testid={`text-price-${product.id}`}>
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          {showDescription && product.description && (
            <p className="text-muted-foreground text-sm mb-3 flex-1" data-testid={`text-description-${product.id}`}>
              {product.description}
            </p>
          )}
          
          <div className="text-xs text-muted-foreground">
            Available at {product.retailer}
          </div>
        </CardContent>
      </AffiliateLink>
    </Card>
  );
}