import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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

  // Scroll to top when blog post loads or changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

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
    "weekend-santorini-guide": {
      id: "5",
      title: "Weekend in Santorini: A Complete Guide",
      slug: "weekend-santorini-guide",
      seoTitle: "Weekend in Santorini: A Complete Travel Guide - The Salty Vibe",
      seoDescription:
        "Plan the perfect weekend in Santorini with our complete guide. Discover the best sunset spots, blue-domed churches, restaurants, and Instagram-worthy locations for your Greek island getaway.",
      tags: [
        "santorini",
        "greece travel",
        "greek islands",
        "weekend getaway",
        "sunset spots",
        "travel guide",
        "mediterranean",
        "vacation planning",
      ],
      category: "travel",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
      publishedAt: "2024-01-18T10:00:00-08:00",
      modifiedAt: "2024-01-18T10:00:00-08:00",
      readTime: 12,
      content: `
      <p>Santorini has been on my bucket list forever, and when I finally made it to this stunning Greek island, it exceeded every expectation. From the iconic blue-domed churches to the most breathtaking sunsets I've ever witnessed, this place is pure magic.</p>
      
      <h2>Getting There and Around</h2>
      <p>Flying into Santorini is the easiest option, with direct flights from Athens taking just 45 minutes. The island is small enough to explore in a weekend, but every moment feels precious. I recommend renting a car or ATV to have the freedom to chase those perfect sunset spots and hidden gems.</p>
      
      <h2>Where to Stay</h2>
      <p>Oia is absolutely stunning but can be crowded and expensive. I found that staying in Fira gave me the perfect balance of beautiful views, great restaurants, and easy access to everything. The caldera views from most hotels are simply incredible – waking up to that endless blue every morning felt surreal.</p>
      
      <h2>Must-See Spots</h2>
      <p><strong>The Blue Domes of Oia</strong> – Yes, they're touristy, but they're iconic for a reason. The famous three bells of Fira and the blue dome churches are even more beautiful in person than in all those Instagram photos.</p>
      
      <p><strong>Red Beach</strong> – This dramatic beach with its red volcanic sand and towering cliffs is unlike anywhere else I've been. Perfect for afternoon relaxation and incredible photos.</p>
      
      <p><strong>Akrotiri Lighthouse</strong> – For a quieter sunset experience away from the Oia crowds, this spot offers equally stunning views with a more intimate atmosphere.</p>
      
      <h2>The Perfect Sunset Experience</h2>
      <p>Everyone talks about Oia sunsets, and they truly are spectacular. But here's my insider tip: arrive at least 2 hours early to secure a good spot, or better yet, book a sunset dinner at one of the cliff-side restaurants. The combination of incredible food, local wine, and that golden hour light reflecting off the white buildings is absolutely magical.</p>
      
      <h2>Food You Can't Miss</h2>
      <p>Greek island cuisine is incredible, and Santorini has its own unique specialties. The local wines are fantastic – especially the Assyrtiko white wine that pairs perfectly with fresh seafood. Don't miss the famous Santorini tomatoes (they're tiny but packed with flavor) and fresh fava beans.</p>
      
      <p>For the most Instagram-worthy dining experience, book a table at a caldera-view restaurant in Oia or Fira. The prices are higher, but dining while watching the sunset over the Aegean Sea is an experience you'll never forget.</p>
      
      <h2>Photography Tips</h2>
      <p>Golden hour in Santorini is absolutely unreal. The white buildings seem to glow, and the contrast against that brilliant blue sea is photographer's heaven. Early morning is also magical and much less crowded – perfect for capturing those dreamy, empty street shots.</p>
      
      <p>Don't forget to explore beyond the main tourist areas. Some of my favorite photos came from wandering the narrow streets and discovering hidden churches, charming doorways, and unexpected viewpoints.</p>
      
      <h2>What to Pack</h2>
      <p>Comfortable walking shoes are essential – those cobblestone streets and cliffside paths can be tricky in sandals. A sun hat and plenty of sunscreen are must-haves (the Mediterranean sun is intense!), and don't forget a light jacket for evening – it can get breezy on those cliff terraces.</p>
      
      <h2>Making the Most of a Weekend</h2>
      <p>With just two days, prioritize the experiences that made Santorini famous: watch at least one sunset in Oia, explore the charming streets of Fira, relax on a unique volcanic beach, and indulge in incredible Greek cuisine with caldera views.</p>
      
      <p>My biggest advice? Don't over-plan. Some of my most magical moments happened when I simply wandered, discovered hidden viewpoints, and let myself get lost in the beauty of this incredible island.</p>
      
      <p>Santorini truly is as dreamy as everyone says. It's the kind of place that makes you believe in magic and leaves you planning your return visit before you've even left.</p>
    `,
    },
    "rose-gold-brunch-recipe": {
      id: "6",
      title: "Rose Gold Everything: Brunch Recipe",
      slug: "rose-gold-brunch-recipe",
      seoTitle: "Rose Gold Smoothie Bowl Recipe - Instagram-Worthy Brunch - The Salty Vibe",
      seoDescription:
        "Create the perfect pink smoothie bowl that's as delicious as it is photogenic. This rose gold brunch recipe features dragon fruit, strawberries, and coconut for the ultimate aesthetic breakfast.",
      tags: [
        "smoothie bowl",
        "brunch recipe",
        "pink smoothie",
        "dragon fruit",
        "healthy breakfast",
        "instagram food",
        "rose gold",
        "aesthetic food",
      ],
      category: "food",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop",
      publishedAt: "2024-01-15T09:00:00-08:00",
      modifiedAt: "2024-01-15T09:00:00-08:00",
      readTime: 4,
      content: `
      <p>I've been obsessed with creating the most Instagram-worthy brunch lately, and this rose gold smoothie bowl has become my signature creation. It's that perfect combination of healthy, delicious, and absolutely gorgeous – the kind of breakfast that makes you feel like you're living your best life.</p>
      
      <h2>The Magic Behind the Pink</h2>
      <p>The secret to that gorgeous rose gold color is dragon fruit (also called pitaya). This amazing fruit not only gives you that dreamy pink hue but also adds subtle sweetness and incredible nutrition. Combined with frozen strawberries and a touch of coconut, it creates the most beautiful base you've ever seen.</p>
      
      <h2>Rose Gold Smoothie Bowl Recipe</h2>
      
      <h3>For the Base:</h3>
      <ul>
        <li>1 cup frozen dragon fruit (pitaya)</li>
        <li>1/2 cup frozen strawberries</li>
        <li>1/2 frozen banana</li>
        <li>1/3 cup coconut milk (full-fat for creaminess)</li>
        <li>1 tbsp honey or maple syrup</li>
        <li>1 tsp vanilla extract</li>
      </ul>
      
      <h3>For the Toppings:</h3>
      <ul>
        <li>Fresh strawberries, sliced</li>
        <li>Coconut flakes</li>
        <li>Granola (I love a vanilla almond variety)</li>
        <li>Chia seeds</li>
        <li>Edible flowers (optional but so pretty!)</li>
        <li>A drizzle of almond butter</li>
      </ul>
      
      <h2>The Perfect Method</h2>
      <p>The key to a perfect smoothie bowl is getting the consistency just right – thick enough to hold toppings but smooth enough to blend easily. Start with your frozen fruits in a high-speed blender, add just a splash of coconut milk, and blend until creamy. You want it thicker than a regular smoothie.</p>
      
      <p>If it's too thick, add coconut milk one tablespoon at a time. If it's too thin, add more frozen fruit. The perfect consistency should hold its shape when you pour it into your bowl.</p>
      
      <h2>Styling Your Bowl</h2>
      <p>Here's where the magic happens! Pour your smoothie into a beautiful bowl (white bowls make the pink color pop), then arrange your toppings with intention. I like to create sections – strawberries on one side, granola on another, with coconut flakes and chia seeds scattered throughout.</p>
      
      <p>The key to Instagram-worthy food photography? Natural light and beautiful props. I love shooting my smoothie bowls near a window with some fresh flowers or a linen napkin in the background.</p>
      
      <h2>Variations to Try</h2>
      <p><strong>Tropical Rose Gold:</strong> Add some mango and top with toasted coconut and macadamia nuts for a tropical twist.</p>
      
      <p><strong>Berry Bliss:</strong> Mix in some blueberries for deeper color and top with mixed berries and a drizzle of cashew butter.</p>
      
      <p><strong>Chocolate Rose Gold:</strong> Add a tablespoon of cacao powder and top with dark chocolate chips and hazelnuts for a more indulgent version.</p>
      
      <h2>Why This Recipe Works</h2>
      <p>Beyond being absolutely gorgeous, this smoothie bowl is packed with nutrients. Dragon fruit is full of antioxidants, vitamin C, and fiber. The coconut adds healthy fats that keep you satisfied, and the toppings provide protein and additional fiber.</p>
      
      <p>Plus, it's naturally sweet without being overpowering – perfect for those mornings when you want something that feels indulgent but is actually nourishing your body.</p>
      
      <h2>Make It Your Own</h2>
      <p>The beauty of smoothie bowls is that they're so customizable. Don't have dragon fruit? Try frozen raspberries for a similar color. Prefer oat milk? Go for it! The base recipe is just a starting point for your own creative expression.</p>
      
      <p>I've made this recipe probably fifty times now, and it never gets old. There's something so satisfying about starting your day with something this beautiful and nourishing. It sets the tone for an intentional, joyful day ahead.</p>
      
      <p>Trust me, once you master this rose gold smoothie bowl, you'll want to make it every weekend. It's become my signature brunch dish, and I love sharing it with friends who always ask for the recipe!</p>
    `,
    },
    "coastal-cafes-hidden-gems": {
      id: "7",
      title: "Hidden Gems: Coastal Cafes Worth the Drive",
      slug: "coastal-cafes-hidden-gems",
      seoTitle: "Hidden Coastal Cafes Worth the Drive - Best Seaside Coffee Spots",
      seoDescription:
        "Discover charming hidden coastal cafes with perfect coffee and stunning ocean views. From clifftop terraces to beachside hideaways, find your next coastal coffee adventure.",
      tags: [
        "coastal cafes",
        "coffee shops",
        "ocean views",
        "road trip",
        "cafe hopping",
        "seaside dining",
        "hidden gems",
        "coastal travel",
      ],
      category: "food",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      publishedAt: "2024-01-10T08:00:00-08:00",
      modifiedAt: "2024-01-10T08:00:00-08:00",
      readTime: 8,
      content: `
      <p>There's something magical about sipping perfectly brewed coffee while listening to waves crash against the shore. Over the years, I've discovered some incredible coastal cafes that are worth every mile of the drive – places where the coffee is exceptional and the views are even better.</p>
      
      <h2>What Makes a Coastal Cafe Special</h2>
      <p>It's not just about location (though ocean views certainly don't hurt!). The best coastal cafes have that perfect combination of quality coffee, welcoming atmosphere, and that indefinable seaside charm that makes you want to linger for hours.</p>
      
      <p>These are the places where locals gather before dawn to watch sunrises, where the baristas know everyone's order, and where you can sit for hours with a book and feel completely at peace.</p>
      
      <h2>Northern California Treasures</h2>
      
      <h3>The Clifftop Retreat - Half Moon Bay</h3>
      <p>Perched on the cliffs overlooking Pillar Point Harbor, this little gem serves some of the best single-origin coffee I've ever tasted. The outdoor deck is perfect for fog-watching mornings, and their homemade pastries pair beautifully with the salty sea air.</p>
      
      <p>What makes it special: The owner sources beans directly from small farms and roasts them on-site. Plus, you might spot whales during migration season!</p>
      
      <h3>Seaside Sanctuary - Carmel-by-the-Sea</h3>
      <p>Tucked away on a quiet side street, this fairytale cottage cafe feels like stepping into a storybook. The garden patio is surrounded by cypress trees, and you can hear the ocean even though it's a block away.</p>
      
      <p>Their lavender honey lattes are incredible, and the locally-made scones are perfect for sharing. It's the kind of place that makes you understand why artists have always flocked to Carmel.</p>
      
      <h2>Southern California Gems</h2>
      
      <h3>Beachside Bliss - Laguna Beach</h3>
      <p>This tiny spot is literally built into the cliff, with tables that overlook the most beautiful cove. You have to walk down a steep path to reach it, but the journey is part of the charm. The sound of waves is the only background music you need.</p>
      
      <p>Their cold brew is perfection on hot summer days, and the breakfast burritos are legendary among locals. Fair warning: parking is tricky, but it's worth the walk.</p>
      
      <h3>Sunset Point Cafe - Malibu</h3>
      <p>While technically not hidden (everyone knows about it), this spot earns its place because of the incredible sunset views and consistently excellent coffee. The deck stretches right over the beach, and dolphins often play in the waves below.</p>
      
      <p>Come for afternoon coffee and stay for the sunset – it's become my favorite way to end a beach day.</p>
      
      <h2>Pacific Northwest Discoveries</h2>
      
      <h3>Lighthouse Lookout - Oregon Coast</h3>
      <p>This converted lighthouse keeper's station serves the most incredible coffee with panoramic ocean views. On clear days, you can see whales breaching in the distance. The rustic interior feels like a warm hug, perfect for those moody coastal mornings.</p>
      
      <p>Their house blend is smooth and rich, and the homemade cinnamon rolls are the size of dinner plates. It's become my mandatory stop on any Oregon coast road trip.</p>
      
      <h2>East Coast Coastal Treasures</h2>
      
      <h3>Harbor View Hideaway - Cape Cod</h3>
      <p>This weathered shingle building has been serving coffee to fishermen and tourists alike for over 30 years. The mismatched furniture and faded nautical decor create the most authentic coastal atmosphere.</p>
      
      <p>Their coffee cake is legendary (seriously, people drive hours for it), and watching the sunrise over the harbor while sipping their dark roast is pure perfection.</p>
      
      <h2>Planning Your Coastal Cafe Road Trip</h2>
      <p>The best coastal cafes often have limited hours and can be weather-dependent, so call ahead! I've learned to build flexibility into my plans – some of my best discoveries have happened when original plans fell through.</p>
      
      <p>Bring a book, wear layers (coastal weather can be unpredictable), and don't rush. These places are meant for lingering, for watching the light change over the water, for having conversations with strangers who become friends.</p>
      
      <h2>What to Order</h2>
      <p>I always try the house blend first – it tells you everything about a cafe's priorities. But don't miss regional specialties: maple lattes in New England, lavender drinks in California wine country, or anything with local honey.</p>
      
      <p>And please, always pair your coffee with something local. These cafes often feature local bakers, local honey, local everything. It's part of what makes each one special.</p>
      
      <h2>The Real Magic</h2>
      <p>What I love most about coastal cafes isn't just the views (though they're incredible). It's the sense of discovery, the feeling that you've found something special. It's the way conversations flow easier when you're surrounded by the sound of waves.</p>
      
      <p>These places remind us to slow down, to savor both the coffee and the moment. In our rushed world, that's a pretty precious gift.</p>
      
      <p>So grab your car keys, fill up the gas tank, and start exploring. The perfect coastal cafe is out there waiting for you, and trust me – the drive will be worth every mile.</p>
    `,
    },
    "sunset-beach-picnic-ideas": {
      id: "8",
      title: "Sunset Beach Picnic Ideas",
      slug: "sunset-beach-picnic-ideas",
      seoTitle: "Sunset Beach Picnic Ideas - Perfect Golden Hour Setups",
      seoDescription:
        "Create magical moments with these dreamy beach picnic setups perfect for golden hour photography and romantic evenings by the sea. Discover the best foods, styling tips, and essential items for your perfect sunset beach picnic.",
      tags: [
        "beach picnic",
        "sunset picnic",
        "golden hour",
        "beach date",
        "romantic picnic",
        "beach food",
        "picnic styling",
        "coastal dining",
      ],
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop",
      publishedAt: "2024-01-12T16:00:00-08:00",
      modifiedAt: "2024-01-12T16:00:00-08:00",
      readTime: 7,
      content: `
      <p>There's something absolutely magical about watching the sun dip toward the horizon while enjoying a beautifully curated beach picnic. The golden light, the sound of waves, the salty breeze – it's the perfect recipe for creating those dreamy, Instagram-worthy moments that you'll treasure forever.</p>
      
      <h2>Timing is Everything</h2>
      <p>The secret to the perfect sunset beach picnic is all about timing. I always arrive at least 2 hours before sunset to set up and enjoy the experience without rushing. This gives you time to find the perfect spot, arrange everything beautifully, and settle in to watch the light change over the water.</p>
      
      <p>Golden hour typically begins about an hour before sunset, and that's when the magic really happens. The light becomes soft and warm, creating that dreamy, romantic atmosphere that makes everything look like it belongs in a fairytale.</p>
      
      <h2>Essential Picnic Setup</h2>
      <p>Your beach picnic setup is the foundation for creating those picture-perfect moments. Start with a large, beautiful blanket – I love neutral tones like cream, sand, or soft blush that photograph gorgeously against the beach backdrop.</p>
      
      <p>Layer different textures with throw pillows, woven baskets, and maybe a vintage-style cooler. The key is creating a cozy, lived-in feeling that looks effortlessly elegant. Think coastal grandmother meets bohemian chic!</p>
      
      <h2>Food That Travels Well</h2>
      <p>Beach picnic food needs to be delicious, Instagram-worthy, and practical. Here are my go-to options that never disappoint:</p>
      
      <h3>Elegant Finger Foods</h3>
      <ul>
        <li>Charcuterie board with local cheeses, fruits, and artisanal crackers</li>
        <li>Fresh bruschetta on sourdough (pack the toppings separately)</li>
        <li>Gourmet sandwiches cut into triangles and wrapped in parchment</li>
        <li>Fresh fruit like strawberries, grapes, and figs</li>
        <li>Chocolate-covered strawberries for that romantic touch</li>
      </ul>
      
      <h3>Refreshing Beverages</h3>
      <p>Sparkling water with fresh fruit, rosé in proper glasses (check local laws about alcohol on beaches), or my favorite – iced herbal tea in beautiful mason jars with fresh mint and lemon.</p>
      
      <h2>Photography Magic</h2>
      <p>The lighting during golden hour is absolutely unmatched for photography. Position your picnic so the sun is behind or to the side of your setup for that gorgeous, dreamy backlight. The key is working with the natural light rather than fighting it.</p>
      
      <p>Take photos throughout the experience – the setup process, candid moments of enjoying the food, and of course, that perfect sunset shot with silhouettes against the colorful sky. Don't forget to put the camera down sometimes and just enjoy the moment!</p>
      
      <h2>Comfort and Style</h2>
      <p>Dressing for a sunset beach picnic is all about being comfortable while looking effortlessly chic. Flowy fabrics work beautifully in beach breezes, and layers are essential as temperatures can drop once the sun sets.</p>
      
      <p>A soft cardigan or light kimono, comfortable sandals that won't get ruined by sand, and maybe a cute sun hat for earlier in the day. Neutral colors and natural fabrics photograph beautifully and complement the beach setting.</p>
      
      <h2>Creating Ambiance</h2>
      <p>As the sun starts to set, you can add some magical touches to extend the experience. Battery-powered string lights create the most romantic atmosphere, and pillar candles in glass lanterns are perfect for when the breeze picks up.</p>
      
      <p>A carefully curated playlist playing softly from a small bluetooth speaker sets the perfect mood – think acoustic covers, indie folk, and songs that make you feel like you're living in a movie.</p>
      
      <h2>Weather Considerations</h2>
      <p>Always check the weather and have a backup plan! Coastal weather can change quickly, so pack a light blanket for warmth and maybe a small pop-up canopy for unexpected wind. The key is being prepared without overpacking.</p>
      
      <p>If it's particularly windy, secure everything with small weights or clips. Nothing ruins the magic like chasing napkins down the beach!</p>
      
      <h2>Leave No Trace</h2>
      <p>Part of creating a perfect beach picnic experience is respecting the beautiful environment that makes it possible. Pack everything out, including small scraps, and leave your spot even more beautiful than you found it.</p>
      
      <p>I always bring an extra bag for any litter I might find nearby. It's a small way to give back to the places that give us so much joy.</p>
      
      <h2>Making Memories</h2>
      <p>The most important ingredient in any sunset beach picnic isn't the perfect food or setup – it's being present in the moment. Put away the phones occasionally, savor the conversation, listen to the waves, and watch the sky change colors.</p>
      
      <p>These are the moments that become cherished memories. The laughter, the quiet contentment, the way the light catches someone's face just right. That's the real magic of a sunset beach picnic.</p>
      
      <h2>Seasonal Variations</h2>
      <p>Each season brings its own charm to beach picnics. Summer offers warm evenings and later sunsets, perfect for leisurely dinners on the sand. Fall brings gorgeous colors and cooler, crisper air that's perfect for cozy setups with warm beverages.</p>
      
      <p>Even winter beach picnics can be magical – think hot chocolate in thermoses, warm blankets, and dramatic sunsets over winter waves. It's all about embracing the season and dressing appropriately.</p>
      
      <p>Whether it's a romantic date, time with best friends, or a solo moment of self-care, a sunset beach picnic offers the perfect opportunity to slow down and create something beautiful. Trust me, once you experience the magic of dining as the sun paints the sky in shades of coral and gold, you'll be planning your next beach picnic before you even pack up the first one.</p>
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
              <Badge className="bg-pink-500/60 text-white backdrop-blur-sm border-transparent">
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
