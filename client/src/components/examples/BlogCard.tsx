import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  const mockPost = {
    id: '1',
    title: 'My Morning Ritual: Coffee by the Ocean',
    excerpt: 'There\'s something magical about starting the day with a warm cup of coffee while watching the sunrise over the ocean. Here\'s how I\'ve created the perfect morning ritual that sets the tone for a beautiful day.',
    category: 'lifestyle' as const,
    image: 'https://images.unsplash.com/photo-1542400695-1f3c7a7a51d5?w=400&h=300&fit=crop',
    publishedAt: '2024-01-15',
    readTime: 5,
    slug: 'morning-ritual-coffee-ocean'
  };

  const handleReadMore = (slug: string) => {
    console.log('Navigate to:', slug);
  };

  return (
    <div className="max-w-sm">
      <BlogCard post={mockPost} onReadMore={handleReadMore} />
    </div>
  );
}