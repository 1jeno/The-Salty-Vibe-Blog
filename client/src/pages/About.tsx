import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera, MapPin } from 'lucide-react';
import beachImage from '@assets/generated_images/Combined_beach_scene_layout_6b9bbf94.png';

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
              magic in the everyday.
            </p>
            <p className="text-muted-foreground">
              Through The Salty Vibe, I share the experiences, recipes, and discoveries 
              that bring more joy and beauty into our daily lives. Because life is too 
              short for anything less than extraordinary.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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