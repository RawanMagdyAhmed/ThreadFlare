
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type FilterOptions = {
  priceRanges: string[];
  sizes: string[];
  colors: string[];
  sortBy: string;
};

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel = ({ filters, onFilterChange }: FilterPanelProps) => {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const handlePriceRangeChange = (range: string) => {
    const updatedPriceRanges = localFilters.priceRanges.includes(range)
      ? localFilters.priceRanges.filter(r => r !== range)
      : [...localFilters.priceRanges, range];
    
    const newFilters = {
      ...localFilters,
      priceRanges: updatedPriceRanges
    };
    setLocalFilters(newFilters);
  };

  const handleSizeChange = (size: string) => {
    const updatedSizes = localFilters.sizes.includes(size)
      ? localFilters.sizes.filter(s => s !== size)
      : [...localFilters.sizes, size];
    
    const newFilters = {
      ...localFilters,
      sizes: updatedSizes
    };
    setLocalFilters(newFilters);
  };

  const handleColorChange = (color: string) => {
    const updatedColors = localFilters.colors.includes(color)
      ? localFilters.colors.filter(c => c !== color)
      : [...localFilters.colors, color];
    
    const newFilters = {
      ...localFilters, 
      colors: updatedColors
    };
    setLocalFilters(newFilters);
  };

  const handleSortChange = (value: string) => {
    const newFilters = {
      ...localFilters,
      sortBy: value
    };
    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  const colorMap: Record<string, string> = {
    "#000000": "Black",
    "#FFFFFF": "White", 
    "#C0C0C0": "Silver",
    "#F5F5DC": "Beige",
    "#FFC0CB": "Pink",
    "#A52A2A": "Brown",
    "#808080": "Gray",
    "#2E2E2E": "Dark Gray"
  };

  const priceRanges = [
    { id: "under25", label: "Under EGP 25", value: "under25" },
    { id: "25to35", label: "EGP 25 - EGP 35", value: "25to35" },
    { id: "over35", label: "Over EGP 35", value: "over35" }
  ];

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const availableColors = ["#000000", "#FFFFFF", "#C0C0C0", "#808080", "#FFC0CB", "#A52A2A"];

  return (
    <div className="mb-8 rounded-lg border bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <h3 className="mb-2 font-medium">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={range.id} 
                  checked={localFilters.priceRanges.includes(range.value)}
                  onCheckedChange={() => handlePriceRangeChange(range.value)}
                />
                <label 
                  htmlFor={range.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 font-medium">Size</h3>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <Button
                key={size}
                variant={localFilters.sizes.includes(size) ? "default" : "outline"}
                className={`h-8 w-8 p-0 ${localFilters.sizes.includes(size) ? "bg-orange-gradient" : ""}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 font-medium">Color</h3>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <button 
                key={color}
                className={`h-6 w-6 rounded-full border ${localFilters.colors.includes(color) ? 'ring-2 ring-orange-500 ring-offset-2' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                title={colorMap[color] || color}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 font-medium">Sort By</h3>
          <Select value={localFilters.sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button 
          className="bg-orange-gradient"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
