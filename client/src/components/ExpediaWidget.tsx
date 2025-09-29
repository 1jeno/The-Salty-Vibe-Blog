import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function ExpediaWidget() {
  const handleExpediaClick = () => {
    window.open('https://www.jdoqocy.com/click-101551130-12639039', '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Find Your Next Stay</CardTitle>
        </div>
        <CardDescription>
          Search hotels, flights & vacation packages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleExpediaClick}
          className="w-full gap-2"
          data-testid="button-expedia-widget"
        >
          Search on Expedia
        </Button>
        <img 
          src="https://www.awltovhc.com/image-101551130-12639039" 
          width="1" 
          height="1" 
          alt="" 
          style={{ border: 0, position: 'absolute', visibility: 'hidden' }}
        />
      </CardContent>
    </Card>
  );
}
