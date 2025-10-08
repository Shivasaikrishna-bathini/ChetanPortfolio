import { FilterTabs } from "../FilterTabs";
import { useState } from "react";

export default function FilterTabsExample() {
  const [active, setActive] = useState("All");
  
  return (
    <div className="p-4">
      <FilterTabs
        categories={["All", "AI/ML", "Computer Vision", "Web Dev"]}
        activeCategory={active}
        onCategoryChange={setActive}
      />
    </div>
  );
}
