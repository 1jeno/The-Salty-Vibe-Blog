import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { MapPin, Compass, Plane } from 'lucide-react';

export default function TravelResources() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Travel Resources - The Salty Vibe"
        description="Coming soon: Your ultimate guide to travel planning resources, booking tools, packing essentials, and insider tips for coastal adventures."
        url="/travel-resources"
        type="website"
        tags={['travel resources', 'travel planning', 'vacation guides', 'beach travel', 'packing lists', 'travel tools']}
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center gap-4">
            <MapPin className="h-12 w-12 text-primary animate-bounce" />
            <Compass className="h-12 w-12 text-primary animate-bounce" style={{ animationDelay: '0.1s' }} />
            <Plane className="h-12 w-12 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Travel Resources
          </h1>
          
          <p className="text-xl text-muted-foreground mb-4">
            Coming Soon
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            We're curating the ultimate collection of travel planning tools, packing guides, 
            booking resources, and insider tips to make your coastal adventures unforgettable.
          </p>
          
          <div className="bg-card border border-border rounded-md p-6 max-w-md mx-auto">
            <h2 className="font-serif text-xl font-semibold mb-3">What to Expect:</h2>
            <ul className="text-left text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Essential packing lists for beach destinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Hotel & flight booking tools and tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Travel planning guides and itineraries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Favorite travel apps and resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Budget-friendly travel hacks</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
