import BlogCard, { BlogPost } from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  onReadMore?: (slug: string) => void;
}

export default function BlogGrid({ posts, onReadMore }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12" data-testid="text-no-posts">
        <p className="text-muted-foreground text-lg">No posts found. Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-blog-posts">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          onReadMore={onReadMore}
        />
      ))}
    </div>
  );
}