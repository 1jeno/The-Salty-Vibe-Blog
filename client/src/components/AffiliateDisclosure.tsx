import { Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AffiliateDisclosureProps {
  variant?: 'inline' | 'banner' | 'minimal';
  className?: string;
}

export default function AffiliateDisclosure({ 
  variant = 'banner', 
  className = '' 
}: AffiliateDisclosureProps) {
  const disclosureText = "This post contains affiliate links. When you purchase through these links, I may earn a small commission at no additional cost to you. I only recommend products I truly love and use myself!";
  
  if (variant === 'minimal') {
    return (
      <p className={`text-xs text-muted-foreground ${className}`} data-testid="text-affiliate-disclosure">
        Contains affiliate links
      </p>
    );
  }

  if (variant === 'inline') {
    return (
      <p className={`text-sm text-muted-foreground italic ${className}`} data-testid="text-affiliate-disclosure">
        <Info className="w-4 h-4 inline mr-1" />
        {disclosureText}
      </p>
    );
  }

  // Banner variant (default)
  return (
    <Alert className={`border-primary/20 bg-primary/5 ${className}`} data-testid="alert-affiliate-disclosure">
      <Info className="h-4 w-4" />
      <AlertDescription className="text-sm">
        {disclosureText}
      </AlertDescription>
    </Alert>
  );
}