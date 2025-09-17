// No longer using carousel functionality, just displaying photos in a grid

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

        {/* Photo grid - displays all photos in a static grid layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="relative group bg-card border border-card-border shadow-lg overflow-hidden hover-elevate"
                data-testid={`photo-grid-item-${index}`}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    data-testid={`photo-grid-image-${index}`}
                  />
                </div>
                {/* Caption overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="font-serif text-sm font-medium" data-testid={`photo-grid-caption-${index}`}>
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}