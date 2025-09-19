import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { beachQuotes } from '@/data/quotes';
import beachScene1 from '@assets/generated_images/Combined_beach_scene_layout_6b9bbf94.png';
import beachScene2 from '@assets/generated_images/Nostalgic_luxury_beach_scene_7b618afe.png';
import beachScene3 from '@assets/generated_images/Refined_blonde_beach_scene_97b3bad9.png';
import beachScene4 from '@assets/generated_images/Beach Wardorbe_Summer_White_Flowy_dress.jpg';
import beachScene5 from '@assets/generated_images/Morning Ritual_beach_drinking_iced_coffee.jpg';
import beachScene6 from '@assets/generated_images/Tropical_coconut_vacation_paradise_05e5cd58.png';
import beachScene7 from '@assets/generated_images/beach-wardrobe-white-dress.jpg';
import beachScene8 from '@assets/generated_images/morning-ritual-iced-coffee.jpg';

const quoteImages = [
  beachScene1, beachScene2, beachScene3, beachScene4, 
  beachScene5, beachScene6, beachScene7, beachScene8
];

export default function Quotes() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salty Vibes & Ocean Wisdom - The Salty Vibe"
        description="Discover the healing power of the ocean through inspiring beach quotes. Let these words restore your well-being and wash your cares away with coastal wisdom."
        url="/quotes"
        type="website"
        tags={['beach quotes', 'healing ocean quotes', 'coastal wellness', 'ocean therapy', 'beach inspiration']}
      />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Salty Vibes & Ocean Wisdom
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There is something truly magical about being near the ocean. The rhythmic sound of waves, the endless horizon, and the salty breeze work together to restore our physical, mental, and emotional well-being. Here are some inspirational beach quotes to enhance your sense of peace and inspire your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {beachQuotes.map((quote, index) => (
            <div 
              key={quote.id}
              className={`polaroid-card max-w-sm w-full ${
                index % 3 === 0 ? 'transform rotate-1' : 
                index % 3 === 1 ? 'transform -rotate-1' : 
                'transform rotate-2'
              }`}
              data-testid={`card-quote-${quote.id}`}
            >
              <div className="bg-white p-3 pb-6 rounded-md shadow-lg hover-elevate transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={quoteImages[index % quoteImages.length]}
                    alt={`Beach scene for quote by ${quote.author}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-testid={`img-quote-background-${quote.id}`}
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Quote text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <blockquote className="text-sm md:text-base font-medium mb-2 text-shadow-lg leading-relaxed">
                      "{quote.text}"
                    </blockquote>
                    <cite className="text-xs opacity-90 not-italic font-semibold">
                      — {quote.author}
                    </cite>
                  </div>
                </div>
                
                {/* Polaroid caption area */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-[#b09e99] font-medium">
                    Coastal Inspiration #{quote.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}