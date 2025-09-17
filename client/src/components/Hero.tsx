import { Button } from '@/components/ui/button';
import heroImage from '@assets/Summer Vacation 8.jpg';

export default function Hero() {
  const handleExplore = () => {
    console.log('Explore posts clicked');
    // Scroll to blog section
    const blogSection = document.getElementById('blog-posts');
    blogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletter = () => {
    console.log('Newsletter signup clicked');
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          The Salty Vibe
        </h1>
        <p className="font-display text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Coastal living, wanderlust adventures, and delicious discoveries. 
          Join me for a life lived with intention and a touch of saltwater magic.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary/90 backdrop-blur-sm hover:bg-primary border-primary-border text-primary-foreground"
            onClick={handleExplore}
            data-testid="button-explore-posts"
          >
            Start Your Adventure
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={handleNewsletter}
            data-testid="button-newsletter"
          >
            Join Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
}