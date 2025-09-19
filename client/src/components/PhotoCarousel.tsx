// No longer using carousel functionality, just displaying photos in a grid

// Import carousel images
import lifeLens1 from '@assets/generated_images/Life through my lens 1.jpg';
import lifeLens2 from '@assets/generated_images/Life through my lens 2.jpg';
import lifeLens3 from '@assets/generated_images/Life through my lens 3.jpg';
import lifeLens4 from '@assets/generated_images/Life through my lens 4.jpg';
import lifeLens5 from '@assets/generated_images/Life through my lens 5.jpg';
import lifeLens6 from '@assets/generated_images/Life through my lens 6.jpg';

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: lifeLens1,
    alt: 'Life through my lens moment 1',
    caption: 'Capturing coastal magic'
  },
  {
    src: lifeLens2,
    alt: 'Life through my lens moment 2',
    caption: 'Salty adventures'
  },
  {
    src: lifeLens3,
    alt: 'Life through my lens moment 3',
    caption: 'Beach life moments'
  },
  {
    src: lifeLens4,
    alt: 'Life through my lens moment 4',
    caption: 'Ocean inspired living'
  },
  {
    src: lifeLens5,
    alt: 'Life through my lens moment 5',
    caption: 'Seaside serenity'
  },
  {
    src: lifeLens6,
    alt: 'Life through my lens moment 6',
    caption: 'Coastal wanderlust'
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

        {/* Photo grid - displays all photos in a single row */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-6 gap-3">
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