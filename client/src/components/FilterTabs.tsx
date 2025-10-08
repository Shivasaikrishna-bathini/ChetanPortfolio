import { Button } from "@/components/ui/button";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterTabs({ categories, activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
