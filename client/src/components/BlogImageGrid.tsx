interface GridImage {
  src: string;
  alt: string;
}

interface BlogImageGridProps {
  images: GridImage[];
  title?: string;
}

export default function BlogImageGrid({ images, title }: BlogImageGridProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {title && (
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-card border border-card-border shadow-lg overflow-hidden hover-elevate"
            data-testid={`grid-image-${index}`}
          >
            <div className="aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}