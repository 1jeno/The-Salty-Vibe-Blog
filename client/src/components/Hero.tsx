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
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          The Salty Vibe
        </h1>
      </div>
    </section>
  );
}