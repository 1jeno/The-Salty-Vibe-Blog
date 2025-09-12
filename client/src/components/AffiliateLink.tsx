import { useState } from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';

interface AffiliateLinkProps {
  productId: string;
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'inline' | 'button' | 'card';
  showIcon?: boolean;
}

export default function AffiliateLink({ 
  productId, 
  href, 
  children, 
  className = '', 
  variant = 'inline',
  showIcon = true 
}: AffiliateLinkProps) {
  const [isTracking, setIsTracking] = useState(false);

  const handleClick = async () => {
    if (isTracking) return;
    
    setIsTracking(true);
    try {
      await fetch(`/api/affiliate-products/${productId}/click`, {
        method: 'POST',
        keepalive: true
      });
    } catch (error) {
      console.error('Failed to track affiliate click:', error);
    } finally {
      setIsTracking(false);
    }
  };

  const baseClasses = "transition-colors";
  
  if (variant === 'button') {
    return (
      <Button
        asChild
        variant="default"
        className={className}
        onClick={handleClick}
        data-testid={`button-affiliate-${productId}`}
      >
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">
          {showIcon && <ShoppingBag className="w-4 h-4 mr-2" />}
          {children}
          {showIcon && <ExternalLink className="w-4 h-4 ml-2" />}
        </a>
      </Button>
    );
  }

  if (variant === 'card') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={handleClick}
        className={`${baseClasses} block hover-elevate rounded-lg ${className}`}
        data-testid={`link-affiliate-card-${productId}`}
      >
        {children}
      </a>
    );
  }

  // Inline variant (default)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleClick}
      className={`${baseClasses} text-primary hover:text-primary/80 font-medium ${className}`}
      data-testid={`link-affiliate-inline-${productId}`}
    >
      {children}
      {showIcon && <ExternalLink className="w-3 h-3 ml-1 inline" />}
    </a>
  );
}