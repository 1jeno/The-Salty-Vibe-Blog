import { Button } from '@/components/ui/button';

export type Category = 'all' | 'lifestyle' | 'travel' | 'food' | 'beauty' | 'home-decor' | 'fashion' | 'wellness';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Posts' },
    { key: 'lifestyle', label: 'Lifestyle' },
    { key: 'travel', label: 'Travel' },
    { key: 'food', label: 'Food' },
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
          className={`text-[#b09e99] font-bold backdrop-blur-sm border-2 transition-all duration-200 ${
            activeCategory === category.key 
              ? 'bg-[#bee9e8]/80 border-pink-500 ring-1 ring-pink-500/30 shadow-sm' 
              : 'bg-[#bee9e8]/60 border-pink-400/60 hover:border-pink-500/80'
          }`}
          data-testid={`button-category-${category.key}`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}