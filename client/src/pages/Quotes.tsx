import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { beachQuotes } from '@/data/quotes';
import beachScene1 from '@assets/generated_images/surfer_walking_along_a_deserted_beach_-2.png';
import beachScene2 from '@assets/generated_images/sitting_surfboard_near_the_beach_shore-2.png';
import beachScene3 from '@assets/generated_images/surfers_feet_walking_on_the_beach_shoreline-2.png';
import beachScene4 from '@assets/generated_images/Beach Wardorbe_Summer_White_Flowy_dress.jpg';
import beachScene5 from '@assets/generated_images/Morning Ritual_beach_drinking_iced_coffee.jpg';
import beachScene6 from '@assets/generated_images/woman_sitting_on_the_tailgate-2.png';
import beachScene7 from '@assets/generated_images/Salty Beach Days124.jpg';
import beachScene8 from '@assets/generated_images/salt_water_heals_everthing.png';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
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
              <div className="bg-white p-4 rounded-md shadow-lg hover-elevate transition-all duration-300">
                {/* Square image */}
                <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={quoteImages[index % quoteImages.length]}
                    alt={`Beach scene for quote by ${quote.author}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-testid={`img-quote-background-${quote.id}`}
                  />
                </div>
                
                {/* Quote text below image */}
                <div className="text-center">
                  <blockquote className="text-sm md:text-base font-medium mb-3 leading-relaxed text-gray-700">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-xs not-italic font-semibold text-gray-600">
                    — {quote.author}
                  </cite>
                </div>
                
                {/* Polaroid caption area */}
                <div className="mt-4 text-center border-t pt-3">
                  <p className="text-base text-[#b09e99] font-medium">
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