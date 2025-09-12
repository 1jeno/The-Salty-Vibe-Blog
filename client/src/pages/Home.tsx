import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter, { Category } from '@/components/CategoryFilter';
import BlogGrid from '@/components/BlogGrid';
import Footer from '@/components/Footer';
import { BlogPost } from '@/components/BlogCard';
import morningCoffeeImage from '@assets/generated_images/Morning_coffee_beach_ritual_7f2b3103.png';
import tropicalVacationImage from '@assets/generated_images/Tropical_coconut_vacation_paradise_05e5cd58.png';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [, setLocation] = useLocation();

  // TODO: remove mock functionality - replace with real data fetching
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'My Morning Ritual: Coffee by the Ocean',
      excerpt: 'There\'s something magical about starting the day with iced coffee while watching the sunrise over the ocean. Here\'s how I\'ve created the perfect morning ritual that sets the tone for a beautiful day.',
      category: 'lifestyle',
      image: morningCoffeeImage,
      publishedAt: '2024-01-20',
      readTime: 5,
      slug: 'my-morning-ritual-coffee-by-the-ocean'
    },
    {
      id: '2',
      title: 'Vacation in a Bottle: Tropical Scents That Transport You',
      excerpt: 'From Sunbum sunscreen to Bond No. 9 perfumes, here\'s my carefully curated list of products that smell like paradise and will have you feeling like you\'re perpetually on island time.',
      category: 'lifestyle',
      image: tropicalVacationImage,
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
      id: '4',
      title: 'Rose Gold Everything: Brunch Recipe',
      excerpt: 'This pink-hued smoothie bowl is as delicious as it is photogenic. Perfect for those aesthetic brunch moments you\'ll want to share.',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
      publishedAt: '2024-01-15',
      readTime: 4,
      slug: 'rose-gold-brunch-recipe'
    },
    {
      id: '5',
      title: 'Sunset Beach Picnic Ideas',
      excerpt: 'Create magical moments with these dreamy beach picnic setups perfect for golden hour photography and romantic evenings by the sea.',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
      publishedAt: '2024-01-12',
      readTime: 7,
      slug: 'sunset-beach-picnic-ideas'
    },
    {
      id: '6',
      title: 'Hidden Gems: Coastal Cafes Worth the Drive',
      excerpt: 'Discover the most charming seaside cafes where the coffee is perfect and the views are even better. Your next road trip destination awaits.',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      publishedAt: '2024-01-10',
      readTime: 8,
      slug: 'coastal-cafes-hidden-gems'
    },
    {
      id: '7',
      title: 'Building Your Perfect Beach Capsule Wardrobe',
      excerpt: 'Effortless style meets comfort in this curated collection of coastal-inspired pieces that will take you from sunrise yoga to sunset dinners.',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      publishedAt: '2024-01-08',
      readTime: 6,
      slug: 'beach-capsule-wardrobe'
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

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      <Hero />
      
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
      
      <Footer />
    </div>
  );
}