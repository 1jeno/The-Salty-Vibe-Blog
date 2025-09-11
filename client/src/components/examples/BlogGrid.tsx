import BlogGrid from '../BlogGrid';

export default function BlogGridExample() {
  // TODO: remove mock functionality
  const mockPosts = [
    {
      id: '1',
      title: 'Sunset Beach Picnic Ideas',
      excerpt: 'Create magical moments with these dreamy beach picnic setups perfect for golden hour photography and romantic evenings by the sea.',
      category: 'lifestyle' as const,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
      publishedAt: '2024-01-20',
      readTime: 7,
      slug: 'sunset-beach-picnic-ideas'
    },
    {
      id: '2',
      title: 'Weekend in Santorini: A Complete Guide',
      excerpt: 'From the blue-domed churches to the most Instagram-worthy sunset spots, here\'s everything you need for the perfect Santorini getaway.',
      category: 'travel' as const,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop',
      publishedAt: '2024-01-18',
      readTime: 12,
      slug: 'weekend-santorini-guide'
    },
    {
      id: '3',
      title: 'Rose Gold Everything: Brunch Recipe',
      excerpt: 'This pink-hued smoothie bowl is as delicious as it is photogenic. Perfect for those aesthetic brunch moments you\'ll want to share.',
      category: 'food' as const,
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
      publishedAt: '2024-01-15',
      readTime: 4,
      slug: 'rose-gold-brunch-recipe'
    }
  ];

  const handleReadMore = (slug: string) => {
    console.log('Navigate to post:', slug);
  };

  return <BlogGrid posts={mockPosts} onReadMore={handleReadMore} />;
}