import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCategory: string;
  allPosts: RelatedPost[];
  maxPosts?: number;
}

export default function RelatedPosts({ 
  currentPostId, 
  currentCategory, 
  allPosts, 
  maxPosts = 3 
}: RelatedPostsProps) {
  // Filter out current post and prioritize same category
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      // Prioritize same category posts
      if (a.category === currentCategory && b.category !== currentCategory) return -1;
      if (b.category === currentCategory && a.category !== currentCategory) return 1;
      return 0;
    })
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
        You Might Also Love
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/post/${post.slug}`}
            data-testid={`link-related-post-${post.slug}`}
          >
            <Card className="hover-elevate transition-all h-full">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime} min
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}