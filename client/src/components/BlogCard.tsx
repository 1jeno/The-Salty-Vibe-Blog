import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'lifestyle' | 'travel' | 'food';
  image: string;
  publishedAt: string;
  readTime: number;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  onReadMore?: (slug: string) => void;
}

export default function BlogCard({ post, onReadMore }: BlogCardProps) {
  const handleReadMore = () => {
    onReadMore?.(post.slug);
    console.log('Read more clicked for:', post.title);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lifestyle': return 'bg-primary text-primary-foreground';
      case 'travel': return 'bg-accent text-accent-foreground';
      case 'food': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="group border-card-border flex flex-col" data-testid={`card-blog-${post.id}`}>
      <div className="relative z-0">
        <div className="overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-blog-${post.id}`}
          />
        </div>
        <div 
          className={`absolute top-4 left-4 whitespace-nowrap z-[10000] px-4 py-3 rounded-lg text-base font-semibold shadow-lg ${getCategoryColor(post.category)}`}
          data-testid={`badge-category-${post.id}`}
        >
          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </div>
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1 shrink-0" data-testid={`text-date-${post.id}`}>
            <Calendar className="h-4 w-4" />
            <span className="whitespace-nowrap">{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0" data-testid={`text-readtime-${post.id}`}>
            <Clock className="h-4 w-4" />
            <span className="whitespace-nowrap">{post.readTime} min read</span>
          </div>
        </div>
        
        <h3 className="font-serif text-xl font-semibold leading-relaxed mb-4 group-hover:text-primary transition-colors" data-testid={`text-title-${post.id}`}>
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4" data-testid={`text-excerpt-${post.id}`}>
          {post.excerpt}
        </p>
        
        <Button 
          variant="ghost" 
          className="p-0 h-auto font-medium text-primary hover:text-primary/80"
          onClick={handleReadMore}
          data-testid={`button-readmore-${post.id}`}
        >
          Read More 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}