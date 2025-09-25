import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselImage {
  src: string;
  alt: string;
}

interface BlogImageCarouselProps {
  images: CarouselImage[];
  title?: string;
}

export default function BlogImageCarousel({ images, title }: BlogImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Main image display */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain transition-opacity duration-500"
          data-testid={`carousel-image-${currentIndex}`}
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm"
              onClick={goToPrevious}
              data-testid="carousel-prev-button"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm"
              onClick={goToNext}
              data-testid="carousel-next-button"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}
        
        {/* Title overlay */}
        {title && (
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              {title}
            </h1>
          </div>
        )}
      </div>
      
      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              onClick={() => goToSlide(index)}
              data-testid={`carousel-dot-${index}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </section>
  );
}