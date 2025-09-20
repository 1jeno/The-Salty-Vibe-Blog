import { Heart, Instagram, Mail } from 'lucide-react';
import { SiPinterest } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast({
        title: "Welcome to The Salty Vibe!",
        description: "You've successfully subscribed to our newsletter. Get ready for coastal inspiration!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an issue subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
    // TODO: remove mock functionality - add real social media links
  };

  return (
    <footer className="bg-[#ffe5ec] border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Stay in the Loop
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest posts, coastal inspiration, and exclusive content delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              data-testid="button-newsletter-submit"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSocialClick('Instagram')}
            data-testid="button-social-instagram"
          >
            <Instagram className="h-5 w-5 text-primary" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSocialClick('Pinterest')}
            data-testid="button-social-pinterest"
          >
            <SiPinterest className="h-5 w-5 text-primary" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSocialClick('Email')}
            data-testid="button-social-email"
          >
            <Mail className="h-5 w-5 text-primary" />
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left side - Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground text-sm mb-2">
                © 2025 The Salty Vibe. Made with{' '}
                <Heart className="inline h-4 w-4 text-primary fill-current" />{' '}
                for the coastal life.
              </p>
              <p className="text-muted-foreground text-xs">
                Living the dream, one wave at a time.
              </p>
            </div>
            
            {/* Right side - Privacy Policy */}
            <div className="text-center sm:text-right">
              <Link href="/privacy-policy" data-testid="link-privacy-policy">
                <span className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}