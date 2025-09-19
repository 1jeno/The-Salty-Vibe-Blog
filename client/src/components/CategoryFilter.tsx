import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';

export type Category = 'all' | 'lifestyle' | 'travel' | 'food' | 'beauty' | 'home-decor' | 'fashion' | 'wellness';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const [, setLocation] = useLocation();
  
  const categories: { key: Category; label: string; emoji: string }[] = [
    { key: 'all', label: 'All Posts', emoji: '✨' },
    { key: 'travel', label: 'Travel', emoji: '🌊' },
    { key: 'food', label: 'Food', emoji: '🥂' },
  ];

  const lifestyleSubcategories: { key: Category; label: string; emoji: string }[] = [
    { key: 'beauty', label: 'Beauty', emoji: '💄' },
    { key: 'home-decor', label: 'Home Decor', emoji: '🏠' },
    { key: 'fashion', label: 'Fashion', emoji: '👗' },
    { key: 'wellness', label: 'Wellness', emoji: '🧘‍♀️' },
  ];

  const handleCategoryClick = (category: Category) => {
    if (category === 'wellness') {
      // Navigate to the wellness/quotes page
      setLocation('/wellness');
    } else {
      onCategoryChange(category);
    }
    console.log('Category selected:', category);
  };

  const isLifestyleActive = activeCategory === 'lifestyle' || 
    lifestyleSubcategories.some(sub => sub.key === activeCategory);

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.key}
          variant="ghost"
          onClick={() => handleCategoryClick(category.key)}
          className={`flex items-center gap-2 text-[#b09e99] font-bold backdrop-blur-sm border ${
            activeCategory === category.key 
              ? 'bg-[#bee9e8]/80 border-[#bee9e8]/60 ring-1 ring-[#bee9e8]/50' 
              : 'bg-[#bee9e8]/60 border-[#bee9e8]/40'
          }`}
          data-testid={`button-category-${category.key}`}
        >
          {category.label}
        </Button>
      ))}
      
      {/* Lifestyle Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={`flex items-center gap-2 text-[#b09e99] font-bold backdrop-blur-sm border ${
              isLifestyleActive
                ? 'bg-[#bee9e8]/80 border-[#bee9e8]/60 ring-1 ring-[#bee9e8]/50' 
                : 'bg-[#bee9e8]/60 border-[#bee9e8]/40'
            }`}
            data-testid="button-category-lifestyle"
          >
            🌸 Lifestyle
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border-[#bee9e8]/60">
          {lifestyleSubcategories.map((subcategory) => (
            <DropdownMenuItem
              key={subcategory.key}
              onClick={() => handleCategoryClick(subcategory.key)}
              className={`flex items-center gap-2 text-[#b09e99] font-medium cursor-pointer ${
                activeCategory === subcategory.key 
                  ? 'bg-[#bee9e8]/40' 
                  : 'hover:bg-[#bee9e8]/20'
              }`}
              data-testid={`button-category-${subcategory.key}`}
            >
              {subcategory.emoji} {subcategory.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}