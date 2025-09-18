import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import SEOHead from "@/components/SEOHead";
import RelatedPosts from "@/components/RelatedPosts";
import morningCoffeeImage from "@assets/generated_images/morning-ritual-iced-coffee.jpg";
import tropicalVacationImage from "@assets/generated_images/Vintage_perfume_bottle_ocean_beach_f43881cb.png";
import beachWardrobeImage from "@assets/generated_images/beach-wardrobe-white-dress.jpg";
import swimsuit2026Image from "@assets/generated_images/2026_swimsuit_collection_beach_styling_324a8899.png";
import type { AffiliateProduct } from "@shared/schema";

export default function BlogPost() {
  const [match, params] = useRoute("/post/:slug");

  // Fetch related affiliate products
  const { data: affiliateProducts = [] } = useQuery<AffiliateProduct[]>({
    queryKey: ["/api/affiliate-products", "lifestyle"],
    queryFn: () =>
      fetch("/api/affiliate-products?category=lifestyle").then((res) =>
        res.json(),
      ),
    enabled: true,
  });

  // TODO: remove mock functionality - fetch real post data
  const mockPosts = {
    "my-morning-ritual-coffee-by-the-ocean": {
      id: "1",
      title: "My Morning Ritual: Coffee by the Ocean",
      slug: "my-morning-ritual-coffee-by-the-ocean",
      seoTitle: "My Morning Ritual: Coffee by the Ocean - Coastal Living Tips",
      seoDescription:
        "Discover the perfect morning ritual with iced coffee by the ocean. Learn how to create intentional coastal mornings with SunBum sunscreen, beach essentials, and mindful practices for a beautiful start to your day.",
      tags: [
        "morning ritual",
        "coastal living",
        "coffee",
        "beach lifestyle",
        "mindfulness",
        "sunbum sunscreen",
        "ocean vibes",
      ],
      category: "lifestyle",
      image: morningCoffeeImage,
      publishedAt: "2024-01-20T08:00:00-08:00",
      modifiedAt: "2024-01-20T08:00:00-08:00",
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
    `,
    },
    "vacation-in-a-bottle-tropical-scents": {
      id: "2",
      title: "Vacation in a Bottle: Tropical Scents That Transport You",
      slug: "vacation-in-a-bottle-tropical-scents",
      seoTitle:
        "Vacation in a Bottle: 13 Tropical Scents That Transport You to Paradise",
      seoDescription:
        "Discover 13 tropical scented products that smell like vacation - from Sunbum sunscreen and Tom Ford perfumes to Kopari mists and Bath & Body Works. Find your signature beach scent and bring paradise home.",
      tags: [
        "tropical scents",
        "vacation perfume",
        "beach fragrance",
        "coconut products",
        "sunbum",
        "tom ford",
        "bath and body works",
        "kopari",
        "bond no 9",
        "tropical beauty",
      ],
      category: "lifestyle",
      image: tropicalVacationImage,
      publishedAt: "2024-01-25T10:00:00-08:00",
      modifiedAt: "2024-01-25T10:00:00-08:00",
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
    `,
    },
    "beach-capsule-wardrobe": {
      id: "3",
      title: "Building Your Perfect Beach Capsule Wardrobe",
      slug: "beach-capsule-wardrobe",
      seoTitle: "Building Your Perfect Beach Capsule Wardrobe - Coastal Style Guide",
      seoDescription:
        "Effortless style meets comfort in this curated collection of coastal-inspired pieces that will take you from sunrise yoga to sunset dinners. Discover the essential pieces for your perfect beach capsule wardrobe.",
      tags: [
        "beach style",
        "capsule wardrobe",
        "coastal fashion",
        "beach outfit",
        "summer style",
        "vacation wardrobe",
        "beach essentials",
      ],
      category: "lifestyle",
      image: beachWardrobeImage,
      publishedAt: "2024-01-08T09:00:00-08:00",
      modifiedAt: "2024-01-08T09:00:00-08:00",
      readTime: 6,
      content: `
      <p>There's an art to packing light while still feeling effortlessly chic, especially when your destination involves sand, saltwater, and endless golden hour photo opportunities. Over the years, I've perfected the balance between comfort and style that defines true coastal living.</p>
      
      <h2>The Foundation: Versatile Basics</h2>
      <p>The secret to a successful beach capsule wardrobe lies in choosing pieces that can seamlessly transition from beach to brunch, from sunrise yoga to sunset cocktails. Think of these as your coastal building blocks – each piece should work with multiple other items in your collection.</p>
      
      <p>Start with a flowing white dress – it's the ultimate coastal staple. Choose one in lightweight, breathable fabric like linen or cotton that feels as good as it looks. The beauty of a white dress is its versatility: throw it over your swimsuit for lunch, cinch it with a woven belt for evening, or layer it with denim for exploring coastal towns.</p>
      
      <h2>Essential Pieces for Every Beach Day</h2>
      <p>Your beach bag should always include a few key pieces that make you feel confident and comfortable. High-waisted bikini bottoms paired with different tops give you multiple looks from just a few pieces. Add a lightweight kimono or beach cover-up that doubles as a cute top when knotted at the waist.</p>
      
      <p>Don't forget about sun protection that looks as good as it protects. A wide-brimmed hat becomes both a practical necessity and a style statement. I'm obsessed with SunBum sunscreen – it feels luxurious, smells like vacation, and gives me the confidence to spend all day in the sun without worry.</p>
      
      <h2>Transition Pieces for Day to Night</h2>
      <p>The magic happens in those in-between moments – when day melts into evening and you want to look effortlessly put-together. A denim jacket or lightweight blazer can instantly elevate any beach look. Pair it with your white dress and sandals for dinner, or throw it over your bikini and shorts for that perfect "I just threw this on" vibe.</p>
      
      <p>Accessories are where you can really have fun. A few key pieces like a statement necklace, woven beach bag, and versatile sandals that work from beach to restaurant will take you everywhere you need to go.</p>
      
      <h2>The Art of Mixing and Matching</h2>
      <p>True capsule wardrobe success comes from pieces that love each other – everything should work together harmoniously. Stick to a cohesive color palette of whites, creams, soft blues, and natural tones that reflect the coastal environment around you.</p>
      
      <p>Think about creating at least 10 different outfits from just 7-8 key pieces. Your white dress can be worn alone, over swimwear, or layered with denim. Your high-waisted bottoms work with crop tops, flowy tanks, or tied shirts. The goal is maximum style with minimal packing stress.</p>
      
      <h2>Beach Day Essentials</h2>
      <p>Beyond clothing, your beach capsule needs a few key accessories that make every day feel special. A quality beach towel that photographs beautifully, a water bottle that keeps drinks cold all day, and that perfect pair of sunglasses that make you feel like a coastal goddess.</p>
      
      <p>Don't forget the little luxuries that make beach life feel intentional – a good book, a bluetooth speaker for sunset playlist moments, and always, always a camera to capture those magical golden hour memories.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Invest in pieces you truly love rather than filling your closet with fast fashion that won't last past one beach season. A well-made white dress, quality denim, and comfortable sandals will serve you for years of coastal adventures.</p>
      
      <p>When every piece in your wardrobe makes you feel confident and comfortable, getting dressed becomes a joy rather than a chore. That's the true magic of a perfect beach capsule wardrobe – it frees you to focus on what really matters: soaking up every moment of that salty, sun-kissed life.</p>
      
      <h2>Shop the Look</h2>
      <p>Ready to build your perfect beach capsule? Here are the exact pieces I recommend for creating that effortlessly chic coastal style:</p>
    `,
    },
    "perfect-swimsuit-2026": {
      id: "4",
      title: "Finding Your Perfect Swimsuit for 2026",
      slug: "perfect-swimsuit-2026",
      seoTitle: "Finding Your Perfect Swimsuit for 2026 - Complete Style Guide",
      seoDescription:
        "Discover how to choose the perfect swimsuit for 2026 with expert tips on fit, style, and confidence. From sustainable options to flattering cuts, find your ideal beach look.",
      tags: [
        "swimsuit",
        "beach style",
        "body confidence",
        "summer fashion",
        "swimwear",
        "beach fashion",
        "style guide",
      ],
      category: "lifestyle",
      image: swimsuit2026Image,
      publishedAt: "2024-01-30T11:00:00-08:00",
      modifiedAt: "2024-01-30T11:00:00-08:00",
      readTime: 8,
      content: `
      <p>Finding the perfect swimsuit shouldn't feel like searching for a needle in a haystack, but let's be honest – it often does. With 2026 bringing exciting new trends, sustainable options, and inclusive sizing, this might just be the year you fall in love with swimsuit shopping again.</p>
      
      <h2>Know Your Body and Love It</h2>
      <p>The most important thing I've learned after years of swimsuit shopping? There's no such thing as a "perfect" body for swimwear – there's only the perfect swimsuit for YOUR body. Whether you're curvy, athletic, petite, or tall, the key is understanding what makes you feel confident and comfortable.</p>
      
      <p>Take time to really look at yourself in the mirror and identify what you love about your body. Maybe it's your strong shoulders from all that morning yoga, your curves that deserve to be celebrated, or your long legs that look amazing in a high-cut bottom. Start there, and choose swimwear that highlights these features.</p>
      
      <h2>2026 Trends That Actually Matter</h2>
      <p>This year's swimwear trends are all about choice and personal expression. High-waisted bottoms continue to dominate for their flattering fit and vintage appeal. One-shoulder tops are having a major moment, offering asymmetrical elegance that photographs beautifully. And can we talk about the cut-out details? From subtle side cutouts to artistic back designs, these details add interest without being overwhelming.</p>
      
      <p>The color palette for 2026 is absolutely dreamy – sage greens that remind you of sea glass, soft corals that complement every skin tone, and classic creams that feel eternally chic. Don't forget about prints! Abstract florals and organic shapes are everywhere, bringing an artistic touch to your beach look.</p>
      
      <h2>Fit is Everything</h2>
      <p>I cannot stress this enough: the right fit can make a $30 swimsuit look like a million dollars, while the wrong fit can make even designer pieces look unflattering. Your swimsuit should feel secure without digging in, supportive without being restrictive, and comfortable enough that you forget you're wearing it.</p>
      
      <p>For tops, make sure you can move your arms freely – no gaping, pulling, or spillage. The band should sit snugly against your ribcage, and straps shouldn't dig into your shoulders. For bottoms, they should sit comfortably at your natural waist or wherever feels most flattering, without creating unwanted lines or gaps.</p>
      
      <h2>Sustainable Swimwear is the Future</h2>
      <p>One of the most exciting developments in swimwear is the focus on sustainability. Brands are creating gorgeous suits from recycled ocean plastic, regenerated nylon, and other eco-friendly materials. These aren't just good for the planet – they're often more durable and offer better color retention than traditional materials.</p>
      
      <p>Investing in a high-quality, sustainable swimsuit means you'll have a piece that lasts for years, making it both an environmental and financial win. Plus, knowing your swimsuit is helping clean up our oceans adds an extra layer of good vibes to your beach days.</p>
      
      <h2>Mix and Match Magic</h2>
      <p>Gone are the days when you had to buy matching sets! Mixing and matching different tops and bottoms lets you create multiple looks and find the perfect fit for each part of your body. Maybe you love a bandeau top but need more coverage on the bottom, or perhaps you prefer a sporty top with a cheeky bottom.</p>
      
      <p>Start with one solid color in a shade you love, then add complementary pieces. A sage green top pairs beautifully with cream bottoms, while a coral set can be mixed with soft pink or peach tones. The key is staying within the same color family for a cohesive look.</p>
      
      <h2>Confidence is Your Best Accessory</h2>
      <p>Here's what I wish someone had told me years ago: confidence isn't about having the "perfect" body – it's about feeling comfortable in your own skin. When you find a swimsuit that makes you feel amazing, you'll carry yourself differently. You'll walk taller, smile brighter, and enjoy your beach days more fully.</p>
      
      <p>Don't let comparison steal your joy. That girl on Instagram with the "perfect" beach body? She probably has insecurities too. Focus on how your swimsuit makes YOU feel, not how you think you look compared to others.</p>
      
      <h2>The Final Test</h2>
      <p>Before you commit to any swimsuit, do the movement test. Raise your arms, bend over, walk around, and imagine all the activities you'll do at the beach. A good swimsuit should move with you, stay in place, and make you feel secure during all your beach adventures.</p>
      
      <p>Remember, you'll be wearing this suit for long beach days, pool parties, and vacation photos that you'll treasure for years. Choose something that makes you smile every time you put it on.</p>
      
      <h2>Your 2026 Swimsuit Checklist</h2>
      <p>Ready to find your perfect match? Here's what to look for: sustainable materials, flattering fit for YOUR body type, colors that make your skin glow, quality construction that will last, and most importantly – that instant feeling of "yes, this is me!" when you try it on.</p>
      
      <p>Trust me, when you find the right swimsuit, you'll know. It's not just about how it looks – it's about how it makes you feel. And that feeling? That's worth every minute of the search.</p>
    `,
    },
  };

  const mockPost =
    mockPosts[
      (params?.slug as keyof typeof mockPosts) ??
        "my-morning-ritual-coffee-by-the-ocean"
    ] ?? mockPosts["my-morning-ritual-coffee-by-the-ocean"];

  // Related posts data for internal linking
  const allPosts = Object.values(mockPosts).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt:
      post.seoDescription ||
      `Discover ${post.title.toLowerCase()} tips and inspiration from The Salty Vibe blog.`,
    category: post.category,
    readTime: post.readTime,
    image: post.image,
  }));

  const handleBack = () => {
    window.history.back();
    console.log("Navigate back");
  };

  const handleShare = () => {
    console.log("Share post");
    // TODO: remove mock functionality - implement real sharing
  };

  if (!match) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={mockPost.seoTitle || mockPost.title}
        description={
          mockPost.seoDescription ||
          `Read about ${mockPost.title} - ${mockPost.category} tips and inspiration from The Salty Vibe.`
        }
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
                {mockPost.category.charAt(0).toUpperCase() +
                  mockPost.category.slice(1)}
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

            <h1
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              data-testid="text-post-title"
            >
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
                Enjoyed this post? Share it with friends who love coastal living
                too!
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
