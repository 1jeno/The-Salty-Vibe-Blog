import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter, { Category } from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import BlogGrid from '@/components/BlogGrid';
import PhotoCarousel from '@/components/PhotoCarousel';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { BlogPost } from '@/components/BlogCard';

export default function Home() {
  const [location] = useLocation();
  
  // Determine category from URL path
  const getCategoryFromPath = (path: string): Category => {
    if (path === '/lifestyle') return 'lifestyle';
    if (path === '/travel') return 'travel';
    if (path === '/food') return 'food';
    if (path === '/beauty') return 'beauty';
    if (path === '/home-decor') return 'home-decor';
    if (path === '/fashion') return 'fashion';
    if (path === '/wellness') return 'wellness';
    return 'all';
  };
  
  const [activeCategory, setActiveCategory] = useState<Category>(getCategoryFromPath(location));
  const [searchQuery, setSearchQuery] = useState('');
  const [, setLocation] = useLocation();

  // Update category when location changes
  useEffect(() => {
    const newCategory = getCategoryFromPath(location);
    setActiveCategory(newCategory);
  }, [location]);

  const handleExplore = () => {
    console.log('Explore posts clicked');
    // Scroll to blog section
    const blogSection = document.getElementById('blog-posts');
    blogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletter = () => {
    console.log('Newsletter signup clicked');
  };

  // TODO: remove mock functionality - replace with real data fetching
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'My Morning Ritual: Coffee by the Ocean',
      excerpt: 'There\'s something magical about starting the day with iced coffee while watching the sunrise over the ocean. Here\'s how I\'ve created the perfect morning ritual that sets the tone for a beautiful day.',
      category: 'lifestyle',
      image: '/images/morning-ritual-iced-coffee.jpg',
      publishedAt: '2024-01-20',
      readTime: 5,
      slug: 'my-morning-ritual-coffee-by-the-ocean'
    },
    {
      id: '2',
      title: 'Vacation in a Bottle: Tropical Scents That Transport You',
      excerpt: 'From Sunbum sunscreen to Bond No. 9 perfumes, here\'s my carefully curated list of products that smell like paradise and will have you feeling like you\'re perpetually on island time.',
      category: 'lifestyle',
      image: '/images/Vintage_perfume_bottle_ocean_beach_f43881cb.png',
      publishedAt: '2024-01-25',
      readTime: 6,
      slug: 'vacation-in-a-bottle-tropical-scents'
    },
    {
      id: '3',
      title: 'Weekend in Santorini: A Complete Guide',
      excerpt: 'From the blue-domed churches to the most Instagram-worthy sunset spots, here\'s everything you need for the perfect Santorini getaway.',
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop',
      publishedAt: '2024-01-18',
      readTime: 12,
      slug: 'weekend-santorini-guide'
    },
    {
      id: '11',
      title: 'L Horizon Resort: Desert Luxury That Redefines Palm Desert',
      excerpt: 'Discover why this mid-century modern masterpiece is changing the game for luxury desert travel, from infinity pools to mountain views.',
      category: 'travel',
      image: '/images/Blog Post 2025-09-24 LHorizon 2.jpg',
      publishedAt: '2024-02-10',
      readTime: 10,
      slug: 'l-horizon-palm-desert-luxury'
    },
    {
      id: '5',
      title: 'Secrets Maroma Beach Riviera Cancun: An Honest Review',
      excerpt: 'After seven years of visits, I\'m sharing my honest perspective on this AAA Five Diamond resort. From pristine beaches to recent changes under Hyatt ownership.',
      category: 'travel',
      image: '/images/Blog Post 2025-09-28 Secrets Maroma Beach Sunset.jpg',
      publishedAt: '2025-09-28',
      readTime: 8,
      slug: 'secrets-maroma-beach-riviera-cancun'
    },
    {
      id: '4',
      title: 'Rose Gold Everything: Brunch Recipe',
      excerpt: 'This pink-hued smoothie bowl is as delicious as it is photogenic. Perfect for those aesthetic brunch moments you\'ll want to share.',
      category: 'food',
      image: '/images/pitaya bowl.png',
      publishedAt: '2024-01-15',
      readTime: 4,
      slug: 'rose-gold-brunch-recipe'
    },
    {
      id: '6',
      title: 'Sunset Beach Picnic Ideas',
      excerpt: 'Create magical moments with these dreamy beach picnic setups perfect for golden hour photography and romantic evenings by the sea.',
      category: 'lifestyle',
      image: '/images/Beach Sunset Picnic.png',
      publishedAt: '2024-01-12',
      readTime: 7,
      slug: 'sunset-beach-picnic-ideas'
    },
    {
      id: '7',
      title: 'Hidden Gems: Coastal Cafes Worth the Drive',
      excerpt: 'Discover the most charming seaside cafes where the coffee is perfect and the views are even better. Your next road trip destination awaits.',
      category: 'food',
      image: '/images/Pancakes Beachside.jpg',
      publishedAt: '2024-01-10',
      readTime: 8,
      slug: 'coastal-cafes-hidden-gems'
    },
    {
      id: '8',
      title: 'Building Your Perfect Beach Capsule Wardrobe',
      excerpt: 'Effortless style meets comfort in this curated collection of coastal-inspired pieces that will take you from sunrise yoga to sunset dinners.',
      category: 'lifestyle',
      image: '/images/beach-wardrobe-white-dress.jpg',
      publishedAt: '2024-01-08',
      readTime: 6,
      slug: 'beach-capsule-wardrobe'
    },
    {
      id: '9',
      title: 'Finding Your Perfect Swimsuit for 2026',
      excerpt: 'From sustainable fabrics to flattering cuts, here\'s your complete guide to choosing the perfect swimsuit that makes you feel confident and beautiful this season.',
      category: 'lifestyle',
      image: '/images/2026_swimsuit_collection_beach_styling_324a8899.png',
      publishedAt: '2024-01-30',
      readTime: 8,
      slug: 'perfect-swimsuit-2026'
    },
    {
      id: '9',
      title: 'Perry\'s Porch: A Downtown St. Pete Gem',
      excerpt: 'I discovered this incredible spot in downtown St. Petersburg where the crispy artichokes are life-changing and the bartenders craft magic in a glass. This hidden gem is about to become your new favorite.',
      category: 'food',
      image: '/images/Perrys Porch Crispy Artichokes.jpg',
      publishedAt: '2024-02-01',
      readTime: 6,
      slug: 'perrys-porch-st-pete-gem'
    },
    {
      id: '10',
      title: 'G.M. Collin: The Clean Beauty Secret I\'ve Been Using for Years',
      excerpt: 'After years of sun exposure, I found my skin savior in G.M. Collin\'s clean beauty line. From their revolutionary collagen pellicle origins in 1957 Paris to their modern sun protection formulas, here\'s why this brand has earned my complete trust.',
      category: 'beauty',
      image: '/images/Amazon_G.M.Collin.jpeg',
      publishedAt: '2024-02-05',
      readTime: 8,
      slug: 'gm-collin-clean-beauty-secrets'
    }
  ];

  const filteredPosts = useMemo(() => {
    let filtered = mockPosts;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const handleReadMore = (slug: string) => {
    setLocation(`/post/${slug}`);
  };

  const pageDescription = activeCategory === 'all' 
    ? 'Discover coastal living, travel adventures, and delicious food reviews with a feminine touch. Join The Salty Vibe community for lifestyle inspiration, tropical scents, morning rituals, and beach vibes.'
    : `Browse ${activeCategory} posts - coastal living tips, travel guides, and lifestyle inspiration from The Salty Vibe blog.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={activeCategory === 'all' 
          ? 'The Salty Vibe - Coastal Living, Travel & Lifestyle Blog'
          : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} - The Salty Vibe Blog`
        }
        description={pageDescription}
        url={activeCategory === 'all' ? '/' : `/${activeCategory}`}
        type="website"
        tags={['coastal living', 'lifestyle blog', 'travel', 'food', 'beach vibes', 'morning rituals', 'tropical scents', 'sunbum', 'vacation']}
      />
      <Header onSearch={setSearchQuery} />
      <Hero />
      
      {/* Subtitle and CTA Section */}
      <section className="bg-[#ffe5ec] py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            Coastal living, wanderlust adventures, and delicious discoveries. 
            Join me for a life lived with intention and a touch of saltwater magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleExplore}
              data-testid="button-explore-posts"
            >
              Start Your Adventure
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-gray-800 hover:bg-gray-100"
              onClick={handleNewsletter}
              data-testid="button-newsletter"
            >
              Join Newsletter
            </Button>
          </div>
        </div>
      </section>

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="blog-posts">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Latest Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dive into tales of coastal adventures, lifestyle inspiration, and culinary discoveries 
              that celebrate the beauty of intentional living.
            </p>
          </div>
          
          <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <BlogGrid 
            posts={filteredPosts}
            onReadMore={handleReadMore}
          />
        </section>
      </main>
      
      <PhotoCarousel />
      
      <Footer />
    </div>
  );
}