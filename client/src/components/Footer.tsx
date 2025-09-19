import { Heart, Instagram, BookmarkPlus, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // TODO: remove mock functionality - integrate with real newsletter service
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
            <Button type="submit" data-testid="button-newsletter-submit">
              Subscribe
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
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSocialClick('BookmarkPlus')}
            data-testid="button-social-pinterest"
          >
            <BookmarkPlus className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSocialClick('Email')}
            data-testid="button-social-email"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-border pt-8">
          <p className="text-muted-foreground text-sm mb-2">
            © 2025 The Salty Vibe. Made with{' '}
            <Heart className="inline h-4 w-4 text-primary fill-current" />{' '}
            for the coastal life.
          </p>
          <p className="text-muted-foreground text-xs">
            Living the dream, one wave at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}