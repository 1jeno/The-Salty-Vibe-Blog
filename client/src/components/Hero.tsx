import { useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/beach-shack-surfboards.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleExplore = () => {
    console.log('Explore posts clicked');
    // Scroll to blog section
    const blogSection = document.getElementById('blog-posts');
    blogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletter = () => {
    console.log('Newsletter signup clicked');
  };

  // Low-quality placeholder (base64 encoded tiny version)
  const blurPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLiTkIksyc5Yz51OjGkVzHj2GmyKiuHQrUCJSR71Uyc7HaFiVi1b/Ztt6gZdpz3hNNYIf8EGwP00o2RnLt6Dt+AxJiR+7vA3+A=";

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Optimized Hero Image */}
      <img
        src={heroImage}
        alt="Beautiful beach shack with surfboards - coastal lifestyle inspiration"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="eager"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        data-testid="hero-image"
      />
      
      {/* Blur Placeholder - shows while image loads */}
      {!imageLoaded && !imageError && (
        <img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 transition-opacity duration-500"
          aria-hidden="true"
        />
      )}
      
      {/* Loading skeleton fallback */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-blue-50 to-pink-100 animate-pulse" />
      )}
      
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