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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover-elevate"
            data-testid={`grid-image-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}