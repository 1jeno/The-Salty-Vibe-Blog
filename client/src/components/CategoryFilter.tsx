import { Button } from '@/components/ui/button';

export type Category = 'all' | 'lifestyle' | 'travel' | 'food';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { key: Category; label: string; emoji: string }[] = [
    { key: 'all', label: 'All Posts', emoji: '✨' },
    { key: 'lifestyle', label: 'Lifestyle', emoji: '🌸' },
    { key: 'travel', label: 'Travel', emoji: '🌊' },
    { key: 'food', label: 'Food', emoji: '🥂' },
  ];

  const handleCategoryClick = (category: Category) => {
    onCategoryChange(category);
    console.log('Category selected:', category);
  };

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
    </div>
  );
}