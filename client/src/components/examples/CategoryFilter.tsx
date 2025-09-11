import { useState } from 'react';
import CategoryFilter, { Category } from '../CategoryFilter';

export default function CategoryFilterExample() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  return (
    <CategoryFilter 
      activeCategory={activeCategory} 
      onCategoryChange={setActiveCategory} 
    />
  );
}