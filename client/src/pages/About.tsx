import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, MapPin } from 'lucide-react';
import beachImage from '@assets/generated_images/About Me Salty Vibe White Bikini.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            About The Salty Vibe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A space where coastal dreams meet everyday magic, and where life's simple pleasures 
            are celebrated with intention and joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={beachImage}
              alt="About me - coastal lifestyle"
              className="w-full h-96 object-cover shadow-md"
              data-testid="img-about-author"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Hey there, I'm Jennifer
            </h2>
            <p className="text-muted-foreground mb-4">
              Welcome to my little corner of the internet! I'm a coastal living enthusiast, 
              wanderlust-driven traveler, and foodie with an eye for the aesthetic moments 
              that make life beautiful.
            </p>
            <p className="text-muted-foreground mb-4">
              Based between the California coast and wherever my passport takes me, 
              I believe in living with intention, savoring simple pleasures, and finding 
              magic in the everyday. With over 8 years of experience exploring coastal 
              destinations worldwide and a passion for sustainable travel, I've tested 
              hundreds of products, stayed at dozens of resorts, and discovered countless 
              hidden gems I'm excited to share with you.
            </p>
            <p className="text-muted-foreground mb-4">
              My expertise lies in curating authentic coastal experiences—from finding 
              the perfect beachside accommodations to discovering local beauty brands 
              that actually work in humid, salty climates. Every recommendation you'll 
              find here comes from personal experience, extensive research, and genuine 
              love for what I do.
            </p>
            <p className="text-muted-foreground">
              Through The Salty Vibe, I share honest reviews, tried-and-true travel tips, 
              and the lifestyle discoveries that bring more joy and beauty into our daily 
              lives. Because life is too short for anything less than extraordinary—and 
              you deserve recommendations you can trust.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold mb-6 text-center">
            What I Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Lifestyle</h3>
                <p className="text-sm text-muted-foreground">
                  Curating moments of beauty and intention in everyday coastal living
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Travel</h3>
                <p className="text-sm text-muted-foreground">
                  Discovering hidden gems and creating unforgettable adventures around the world
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Camera className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Food</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing recipes and restaurant finds that celebrate flavor and presentation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              My Expertise & Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Travel & Accommodations</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>8+ years exploring coastal destinations across 4 continents</li>
                  <li>Stayed at 50+ luxury resorts and boutique hotels</li>
                  <li>Extensive experience with TripAdvisor and Expedia booking platforms</li>
                  <li>Specialized in adult-only, all-inclusive resort experiences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Beauty & Lifestyle Products</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Tested 100+ beauty and lifestyle products for coastal climates</li>
                  <li>Partnered with Amazon Associates for curated product recommendations</li>
                  <li>Focus on clean beauty, sustainable brands, and proven effectiveness</li>
                  <li>Honest reviews based on real-world testing and long-term use</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-2">Why Trust My Recommendations?</h3>
              <p className="text-sm text-muted-foreground">
                Every product and destination I feature has been personally tested and evaluated. 
                I only recommend what I genuinely love and would suggest to my closest friends. 
                As an Amazon Associate and affiliate partner with TripAdvisor and Expedia, I may 
                earn commissions on purchases—but my recommendations are always based on authentic 
                experience, never influenced by compensation.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Let's Connect!
          </h3>
          <p className="text-muted-foreground mb-4">
            I'd love to hear from you! Share your own coastal adventures, 
            ask questions, or just say hello.
          </p>
          <p className="text-sm text-muted-foreground">
            Follow along on social media for daily inspiration and behind-the-scenes moments.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}