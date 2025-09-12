import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import morningCoffeeImage from '@assets/generated_images/Beach_morning_ritual_enhanced_scene_1d63f57b.png';

export default function BlogPost() {
  const [match, params] = useRoute('/post/:slug');
  
  // TODO: remove mock functionality - fetch real post data
  const mockPost = {
    id: '1',
    title: 'My Morning Ritual: Coffee by the Ocean',
    content: `
      <p>There's something undeniably magical about starting the day with the sound of waves and a perfectly crafted iced coffee in hand. For the past year, I've been perfecting my morning ritual by the ocean, and I can honestly say it has transformed not just my mornings, but my entire approach to daily life.</p>
      
      <h2>The Perfect Beach Setup</h2>
      <p>My ideal morning begins before the world awakens. I slip out of bed quietly, wrap myself in my favorite linen cover-up, and gather my morning essentials. There's something so intentional about preparing an iced coffee with care – watching the rich brew swirl with creamy foam, feeling the condensation form on the glass as the morning air meets the cool drink.</p>
      
      <p>I pack my woven beach bag with the essentials: my softest cream blanket (the one that photographs beautifully against the sand), my leather-bound journal with pages already filled with gratitudes and dreams, that perfect ceramic travel mug I picked up at a coastal market in Big Sur, and of course, my favorite sunblock. I'm completely obsessed with SunBum 30 spray – it goes on so smoothly, smells like a vacation, and gives me that perfect protection without feeling heavy or greasy on my skin.</p>
      
      <h2>Where Ocean Meets Intention</h2>
      <p>There's nothing quite like settling onto the sand, beach blanket spread perfectly, iced coffee in hand, watching the sunrise paint the sky in shades of coral and gold. The ocean stretches endlessly before me, waves gently lapping at the shore, creating the most perfect soundtrack for reflection.</p>
      
      <p>This is where the magic happens – that first sip of perfectly cold coffee while the ocean breeze plays with my hair and the warmth of the rising sun kisses my skin. It's a moment of pure presence, where comfort meets adventure, and everything feels aligned.</p>
      
      <h2>The Ritual Elements That Matter</h2>
      <p>What makes this morning practice so transformative isn't just the stunning backdrop (though it certainly helps!). It's the intention behind each element. The careful preparation of my drink, the mindful selection of my spot on the beach, the gentle practice of gratitude as I watch the world wake up.</p>
      
      <p>Some mornings I write, letting thoughts flow onto paper like the waves onto shore. Other mornings I simply breathe, allowing the ocean's rhythm to sync with my own. There's no right or wrong way – only what feels authentic in that moment.</p>
      
      <h2>Creating Your Own Coastal Morning</h2>
      <p>You don't need to live steps from the ocean to capture this feeling (though I highly recommend it if you can!). The essence of this ritual is about creating intentional moments of beauty and peace. Here's how to bring that coastal morning energy into your own life:</p>
      
      <ul>
        <li>Perfect your cold brew game – invest in quality coffee and take time to craft something special</li>
        <li>Find your sacred space – a balcony, garden, or even a cozy corner by a window</li>
        <li>Create atmosphere with textures – soft blankets, beautiful mugs, fresh flowers</li>
        <li>Embrace the ritual – make the preparation as mindful as the experience itself</li>
        <li>Add journaling or meditation – let this time be about connecting with yourself</li>
        <li>Capture the beauty – not just for social media, but to remember these precious moments</li>
      </ul>
      
      <h2>Why It Works</h2>
      <p>This morning ritual has become my anchor – a daily reminder that life is meant to be savored, not rushed through. It's a practice in slowing down, in finding beauty in simplicity, in honoring both the adventure and comfort that make life full.</p>
      
      <p>What started as a simple desire for better coffee has evolved into something so much more meaningful. It's become a daily celebration of coastal living, intentional choices, and the kind of beautiful moments that make ordinary mornings feel extraordinary.</p>
      
      <p>Trust me, once you experience the magic of starting your day with this kind of intention, you'll never want to rush through another morning again.</p>
    `,
    category: 'lifestyle',
    image: morningCoffeeImage,
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