import { Button } from '@/components/ui/button';
import heroImage from '@assets/beach-shack-surfboards.jpg';

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
      
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content with Vintage Punch Label Style */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vintage Punch Label Container */}
        <div className="inline-block bg-gradient-to-b from-amber-50 to-amber-100 border-4 border-amber-800 rounded-lg shadow-2xl px-8 py-6 mb-8 relative overflow-hidden">
          {/* Decorative corner flourishes */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-800 rounded-tl-lg"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-800 rounded-tr-lg"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-800 rounded-bl-lg"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-800 rounded-br-lg"></div>
          
          {/* Aged paper texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-amber-300/30 pointer-events-none"></div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 relative z-10 tracking-wide">
            The Salty Vibe
          </h1>
          <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-4"></div>
          <p className="font-serif text-lg md:text-xl text-amber-800 relative z-10 leading-relaxed italic">
            ~ Coastal Living & Adventures ~
          </p>
        </div>
        
        <p className="font-display text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Wanderlust adventures and delicious discoveries. 
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
            className="bg-amber-100/90 backdrop-blur-sm border-amber-800 text-amber-900 hover:bg-amber-200/90"
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