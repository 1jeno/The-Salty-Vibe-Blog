import { Quote } from 'lucide-react';
import { Link } from 'wouter';
import { beachQuotes, BeachQuote } from '@/data/quotes';
import { useEffect, useState } from 'react';
import coastalSignImage from '@assets/generated_images/Rustic_weathered_coastal_wooden_sign_21922d09.png';

export default function QuoteRibbon() {
  const [currentQuote, setCurrentQuote] = useState<BeachQuote>(beachQuotes[0]);

  useEffect(() => {
    // Get a random quote on component mount
    const randomIndex = Math.floor(Math.random() * beachQuotes.length);
    setCurrentQuote(beachQuotes[randomIndex]);
  }, []);

  return (
    <section className="w-full bg-[#bee9e8]/60 backdrop-blur-sm py-6 px-4" data-testid="section-quote-ribbon">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <Quote className="h-5 w-5 text-[#b09e99]/70 flex-shrink-0" />
          <blockquote className="text-[#b09e99] font-semibold text-lg md:text-xl italic">
            "{currentQuote.text}"
          </blockquote>
          <Quote className="h-5 w-5 text-[#b09e99]/70 flex-shrink-0 rotate-180" />
        </div>
        <cite className="text-[#b09e99]/80 text-sm mt-2 block not-italic font-medium">
          — {currentQuote.author}
        </cite>
        <Link 
          href="/quotes" 
          className="inline-block mt-4 hover-elevate transition-all duration-300"
          data-testid="link-quotes"
        >
          <img 
            src={coastalSignImage} 
            alt="View More Coastal Inspirations"
            className="max-w-xs mx-auto h-auto rounded-lg shadow-sm"
          />
        </Link>
      </div>
    </section>
  );
}