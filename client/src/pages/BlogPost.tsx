import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost() {
  const [match, params] = useRoute('/post/:slug');
  
  // TODO: remove mock functionality - fetch real post data
  const mockPost = {
    id: '1',
    title: 'My Morning Ritual: Coffee by the Ocean',
    content: `
      <p>There's something undeniably magical about starting the day with the sound of waves and a perfectly brewed cup of coffee. For the past year, I've been perfecting my morning ritual, and I can honestly say it has transformed not just my mornings, but my entire approach to daily life.</p>
      
      <h2>The Perfect Setup</h2>
      <p>My ideal morning begins before sunrise. I slip out of bed quietly, wrap myself in my favorite oversized cardigan, and make my way to the kitchen. The ritual begins with grinding fresh coffee beans – there's something so grounding about that rich, aromatic sound filling the quiet morning air.</p>
      
      <p>While the coffee brews, I prepare my favorite mug (a handmade ceramic piece I picked up at a local artisan market), and gather my essentials: a cozy blanket, my journal, and perhaps a good book if I'm feeling particularly indulgent.</p>
      
      <h2>The Ocean View</h2>
      <p>Living near the coast has its perks, and this morning ritual wouldn't be the same without stepping outside to greet the day. Whether it's from my balcony or a short walk to the beach, that first sip of coffee while watching the sunrise paint the sky in shades of coral and gold never gets old.</p>
      
      <p>There's something about the combination of warm coffee and cool ocean breeze that feels like the perfect metaphor for life – comfort and adventure, warmth and wildness, all in one perfect moment.</p>
      
      <h2>Making It Your Own</h2>
      <p>The beauty of a morning ritual is that it's entirely personal. Maybe you don't live near the ocean (though I highly recommend it!), but you can create your own version of this peaceful start to the day. The key elements are intention, consistency, and creating a moment of beauty in your everyday routine.</p>
      
      <p>Some ideas to make it your own:</p>
      <ul>
        <li>Find your perfect view – even if it's just a window with good light</li>
        <li>Invest in a coffee or tea you truly love</li>
        <li>Create a cozy corner with soft textures and warm lighting</li>
        <li>Keep a journal nearby for morning thoughts and gratitudes</li>
        <li>Play soft music or embrace the natural sounds around you</li>
      </ul>
      
      <p>What started as a simple desire for better coffee has become the foundation of a more intentional, beautiful life. And honestly? That's worth getting up a little earlier for.</p>
    `,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1542400695-1f3c7a7a51d5?w=800&h=400&fit=crop',
    publishedAt: '2024-01-20',
    readTime: 5,
    slug: 'morning-ritual-coffee-ocean'
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleBack = () => {
    window.history.back();
    console.log('Navigate back');
  };

  const handleShare = () => {
    console.log('Share post');
    // TODO: remove mock functionality - implement real sharing
  };

  if (!match) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-6"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Button>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                {mockPost.category.charAt(0).toUpperCase() + mockPost.category.slice(1)}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(mockPost.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {mockPost.readTime} min read
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleShare}
                className="ml-auto"
                data-testid="button-share"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-post-title">
              {mockPost.title}
            </h1>
            
            <img 
              src={mockPost.image}
              alt={mockPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
              data-testid="img-post-hero"
            />
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: mockPost.content }}
            data-testid="content-post-body"
          />
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Enjoyed this post? Share it with friends who love coastal living too!
              </p>
              <Button onClick={handleShare} data-testid="button-share-bottom">
                <Share2 className="h-4 w-4 mr-2" />
                Share This Post
              </Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}