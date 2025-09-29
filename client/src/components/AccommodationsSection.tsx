import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, MapPin, Star } from 'lucide-react';

interface Accommodation {
  name: string;
  description: string;
  bookingUrl: string;
  highlights?: string[];
}

interface AccommodationsSectionProps {
  accommodations: Accommodation[];
  destination?: string;
}

export default function AccommodationsSection({ 
  accommodations, 
  destination 
}: AccommodationsSectionProps) {
  return (
    <div className="my-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <Bed className="h-6 w-6 text-primary" />
        <h2 className="font-serif text-2xl font-semibold">
          Where to Stay {destination && `in ${destination}`}
        </h2>
      </div>
      
      <div className="space-y-4">
        {accommodations.map((accommodation, index) => (
          <Card key={index} className="hover-elevate">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{accommodation.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{accommodation.description}</p>
                </div>
                <Star className="h-5 w-5 text-primary fill-primary" />
              </div>
            </CardHeader>
            <CardContent>
              {accommodation.highlights && accommodation.highlights.length > 0 && (
                <ul className="space-y-1 mb-4">
                  {accommodation.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={accommodation.bookingUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
              >
                <Button className="w-full" data-testid={`button-book-${index}`}>
                  Check Availability
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
