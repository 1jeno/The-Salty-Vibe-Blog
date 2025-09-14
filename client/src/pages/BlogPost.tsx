import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2 } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import SEOHead from '@/components/SEOHead';
import RelatedPosts from '@/components/RelatedPosts';
import morningCoffeeImage from '@assets/generated_images/Morning_coffee_beach_ritual_7f2b3103.png';
import tropicalVacationImage from '@assets/generated_images/Vintage_perfume_bottle_ocean_beach_f43881cb.png';
import type { AffiliateProduct } from '@shared/schema';

export default function BlogPost() {
  const [match, params] = useRoute('/post/:slug');
  
  // Fetch related affiliate products
  const { data: affiliateProducts = [] } = useQuery<AffiliateProduct[]>({
    queryKey: ['/api/affiliate-products', 'lifestyle'],
    queryFn: () => fetch('/api/affiliate-products?category=lifestyle').then(res => res.json()),
    enabled: true,
  });
  
  // TODO: remove mock functionality - fetch real post data
  const mockPosts = {
    'my-morning-ritual-coffee-by-the-ocean': {
      id: '1',
      title: 'My Morning Ritual: Coffee by the Ocean',
      slug: 'my-morning-ritual-coffee-by-the-ocean',
      seoTitle: 'My Morning Ritual: Coffee by the Ocean - Coastal Living Tips',
      seoDescription: 'Discover the perfect morning ritual with iced coffee by the ocean. Learn how to create intentional coastal mornings with SunBum sunscreen, beach essentials, and mindful practices for a beautiful start to your day.',
      tags: ['morning ritual', 'coastal living', 'coffee', 'beach lifestyle', 'mindfulness', 'sunbum sunscreen', 'ocean vibes'],
      category: 'lifestyle',
      image: morningCoffeeImage,
      publishedAt: '2024-01-20T08:00:00-08:00',
      modifiedAt: '2024-01-20T08:00:00-08:00',
      readTime: 5,
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
      
      <h2>Shop the Look</h2>
      <p>Want to recreate this perfect morning ritual? Here are the exact products I mention in this post that help make these beautiful beach mornings possible:</p>
    `
    },
    'vacation-in-a-bottle-tropical-scents': {
      id: '2',
      title: 'Vacation in a Bottle: Tropical Scents That Transport You',
      slug: 'vacation-in-a-bottle-tropical-scents',
      seoTitle: 'Vacation in a Bottle: 13 Tropical Scents That Transport You to Paradise',
      seoDescription: 'Discover 13 tropical scented products that smell like vacation - from Sunbum sunscreen and Tom Ford perfumes to Kopari mists and Bath & Body Works. Find your signature beach scent and bring paradise home.',
      tags: ['tropical scents', 'vacation perfume', 'beach fragrance', 'coconut products', 'sunbum', 'tom ford', 'bath and body works', 'kopari', 'bond no 9', 'tropical beauty'],
      category: 'lifestyle',
      image: tropicalVacationImage,
      publishedAt: '2024-01-25T10:00:00-08:00',
      modifiedAt: '2024-01-25T10:00:00-08:00',
      readTime: 6,
      content: `
      <p>There's something magical about certain scents that can instantly transport you to your happy place. You know that feeling – one whiff and suddenly you're back on that perfect beach vacation, feeling the warm sand between your toes and the ocean breeze in your hair.</p>
      
      <p>I've been on a mission to capture that vacation feeling in everyday life, and let me tell you, I've discovered some absolute gems along the way. These aren't just any tropical scents – these are the ones that truly smell like paradise in a bottle.</p>
      
      <h2>The Ultimate Vacation Scent Collection</h2>
      <p>Here's my carefully curated list of products that will have you feeling like you're perpetually on island time, even when you're stuck in Monday morning meetings:</p>
      
      <h3>For Beach Days (Real or Imagined)</h3>
      <p><strong>Sunbum Sunblock</strong> – Okay, this one you already know I'm obsessed with! But seriously, even the scent of this sunscreen makes me happy. It's that perfect coconut-y, tropical fragrance that screams "beach day" the moment you open the bottle.</p>
      
      <h3>Aromatherapy That Transports</h3>
      <p><strong>Beach House Collection from Carter + Jane</strong> – I'm absolutely dying to try their Beach House Roll-on Aroma and Beach House Aroma + Body products. The reviews say they're like carrying a beach vacation in your purse, and honestly, who doesn't need that kind of instant mood boost?</p>
      
      <h3>Clean House, Beach Vibes</h3>
      <p><strong>The Good Home</strong> – This brand is genius! They've created all-natural cleaning products that smell like paradise instead of harsh chemicals. Their "Beach Days" and "CLEANACOLADA" scents promise to make even the most mundane household tasks feel like you're tidying up your beach house. Talk about making chores bearable!</p>
      
      <h3>International Treasures</h3>
      <p><strong>NIVEA Sunshine Love Shower Gel</strong> – Here's the thing that makes this extra special (and extra frustrating) – it's only available in the UK! But from what I've heard, this shower gel is pure liquid sunshine. Sometimes the best vacation scents are the ones you have to hunt for, right?</p>
      
      <h3>Luxury Escape</h3>
      <p><strong>Jones Beach from Bond No. 9</strong> – This is the holy grail, the ultimate splurge for vacation scent lovers. Bond No. 9 is known for capturing the essence of New York locations, and apparently, they've bottled the perfect Long Island beach day. It's definitely an investment piece, but sometimes you need that one signature scent that makes you feel like you're living your best coastal life.</p>
      
      <h3>Body Care That Transports</h3>
      <p><strong>Dr. Squatch's Coconut Castaway Body Wash</strong> – Because why should your shower routine be boring when it could smell like a tropical getaway? This body wash promises to turn your daily routine into a mini vacation ritual.</p>
      
      <p><strong>Maui Supreme Plumeria</strong> – Plumeria is such an underrated tropical scent! It's floral but not overwhelming, exotic but familiar. This one's on my must-try list for sure.</p>
      
      <p><strong>Monoi Tiki Tahiti - Tiare - Body Oil (My Fav)</strong> – Okay, this one I have actually tried and I'm completely obsessed! There's something so luxurious about body oil, and the tiare flower scent is absolutely divine. It makes my skin feel amazing and smell like I just stepped off a plane from Tahiti.</p>
      
      <h3>Tried and True Classics</h3>
      <p><strong>Bath and Body Works - At the Beach collection</strong> – You know Bath & Body Works knows how to capture vacation vibes! Their At the Beach collection is consistently amazing – always reliable for that perfect balance of coconut, sun, and sea.</p>
      
      <p><strong>"VACATION" by Vacation® Eau de Toilette</strong> – How perfect is this brand name? They literally bottled the concept of vacation! I'm so curious about this one – it has to live up to its name, right?</p>
      
      <h3>Mist Must-Haves</h3>
      <p><strong>Balinese Coconut Perfume Oil Body Mist</strong> – Coconut perfume oil sounds absolutely dreamy. There's something about mists that feels so effortless and beachy – perfect for that "I just rolled out of bed looking this good" vibe.</p>
      
      <p><strong>Kopari Scents of Paradise Hair & Body Mist Kit</strong> – Kopari knows coconut! A whole kit means multiple scents to layer and play with. Plus, anything that works for both hair and body is automatically a travel essential.</p>
      
      <h3>The Ultimate Splurge</h3>
      <p><strong>Tom Ford Eau de Soleil Blanc Eau de Parfume</strong> – Tom Ford does luxury like no one else, and this sounds like pure sunshine in a bottle. It's definitely an investment, but sometimes you need that one show-stopping fragrance that makes you feel absolutely unstoppable.</p>
      
      <h2>The Power of Scent Memory</h2>
      <p>What I love about this collection is how diverse it is – from everyday essentials like sunscreen to luxury parfums, there's a vacation scent for every moment and every budget. Whether you're getting ready in the morning, cleaning your space, or stepping out for the evening, you can carry that beach energy with you.</p>
      
      <p>I'll be honest – I haven't tried every single one of these yet (though they're definitely on my wishlist!). But that's the beauty of scent hunting, isn't it? The anticipation, the discovery, the moment when you find that perfect fragrance that becomes your signature vacation vibe.</p>
      
      <p>Have you tried any of these? I'd love to know which ones transport you most! There's something so personal about scent – what smells like paradise to me might be completely different from your idea of vacation bliss, and I think that's beautiful.</p>
    `
    }
  };
  
  const mockPost = mockPosts[(params?.slug as keyof typeof mockPosts) ?? 'my-morning-ritual-coffee-by-the-ocean'] ?? mockPosts['my-morning-ritual-coffee-by-the-ocean'];
  
  // Related posts data for internal linking
  const allPosts = Object.values(mockPosts).map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.seoDescription || `Discover ${post.title.toLowerCase()} tips and inspiration from The Salty Vibe blog.`,
    category: post.category,
    readTime: post.readTime,
    image: post.image
  }));


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
      <SEOHead
        title={mockPost.seoTitle || mockPost.title}
        description={mockPost.seoDescription || `Read about ${mockPost.title} - ${mockPost.category} tips and inspiration from The Salty Vibe.`}
        url={`/post/${mockPost.slug}`}
        image={mockPost.image}
        type="article"
        publishedTime={mockPost.publishedAt}
        modifiedTime={mockPost.modifiedAt}
        author="The Salty Vibe"
        tags={mockPost.tags || []}
        category={mockPost.category}
        readTime={mockPost.readTime}
      />
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
          
          {/* Affiliate Products Section */}
          {affiliateProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">
                Shop the Look
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                These are the exact products mentioned in this post:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {affiliateProducts.slice(0, 4).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    compact={true}
                  />
                ))}
              </div>
              <AffiliateDisclosure variant="inline" className="text-center" />
            </div>
          )}

          {/* Related Posts for Internal Linking */}
          <RelatedPosts 
            currentPostId={mockPost.id}
            currentCategory={mockPost.category}
            allPosts={allPosts}
            maxPosts={2}
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