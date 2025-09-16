import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import carousel images
import morningCoffeeImage from '@assets/generated_images/Morning_coffee_beach_ritual_7f2b3103.png';
import tropicalVacationImage from '@assets/generated_images/Vintage_perfume_bottle_ocean_beach_f43881cb.png';
import beachSceneImage from '@assets/generated_images/Beach_scene_woman_bikini_de8a06d6.png';
import blondeBeachImage from '@assets/generated_images/Blonde_woman_beach_cowboy_hat_74b92e73.png';
import tropicalCoconutImage from '@assets/generated_images/Tropical_coconut_vacation_paradise_05e5cd58.png';
import combinedBeachImage from '@assets/generated_images/Combined_beach_scene_layout_6b9bbf94.png';

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: morningCoffeeImage,
    alt: 'Morning coffee beach ritual',
    caption: 'Morning rituals by the ocean'
  },
  {
    src: tropicalVacationImage,
    alt: 'Tropical vacation scents',
    caption: 'Vacation vibes in a bottle'
  },
  {
    src: beachSceneImage,
    alt: 'Beach lifestyle scene',
    caption: 'Coastal living at its finest'
  },
  {
    src: blondeBeachImage,
    alt: 'Beach style with cowboy hat',
    caption: 'Effortless beach style'
  },
  {
    src: tropicalCoconutImage,
    alt: 'Tropical coconut paradise',
    caption: 'Paradise found'
  },
  {
    src: combinedBeachImage,
    alt: 'Combined beach lifestyle',
    caption: 'Living the salty life'
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Life Through My Lens
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capturing the moments that make coastal living so magical - from morning rituals to sunset adventures.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden bg-card border border-card-border shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              data-testid="carousel-container"
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                  data-testid={`carousel-slide-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    data-testid={`carousel-image-${index}`}
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white p-4">
                    <p className="font-serif text-lg font-medium" data-testid={`carousel-caption-${index}`}>
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/30 text-foreground hover:bg-white/100"
              onClick={goToPrevious}
              data-testid="carousel-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/30 text-foreground hover:bg-white/100"
              onClick={goToNext}
              data-testid="carousel-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 border transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-primary border-primary'
                    : 'bg-transparent border-muted-foreground hover:border-primary'
                }`}
                onClick={() => goToSlide(index)}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-4">
            <button
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              data-testid="carousel-autoplay-toggle"
            >
              {isAutoPlaying ? 'Pause slideshow' : 'Resume slideshow'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}