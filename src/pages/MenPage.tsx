
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ProductCard from "@/components/ProductCard";
import FilterPanel, { FilterOptions } from "@/components/FilterPanel";
import { Container } from "@/components/ui/container";
import { PageTitle } from "@/components/ui/page-title";

const MenPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRanges: [],
    sizes: [],
    colors: [],
    sortBy: "featured"
  });

  // Filter products for men's category only, then apply additional filters
  const menProducts = products
    .filter((product) => product.category === "Men")
    .filter((product) => {
      // Price range filter
      if (filters.priceRanges.length > 0) {
        const inPriceRange = filters.priceRanges.some(range => {
          if (range === 'under25' && product.price < 25) return true;
          if (range === '25to35' && product.price >= 25 && product.price <= 35) return true;
          if (range === 'over35' && product.price > 35) return true;
          return false;
        });
        
        if (!inPriceRange) return false;
      }
      
      // Size filter
      if (filters.sizes.length > 0) {
        const hasSelectedSize = filters.sizes.some(size => 
          product.availableSizes.includes(size)
        );
        if (!hasSelectedSize) return false;
      }
      
      // Color filter
      if (filters.colors.length > 0) {
        const hasSelectedColor = filters.colors.some(color => 
          product.availableColors.includes(color)
        );
        if (!hasSelectedColor) return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort products
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return a.isNew ? -1 : b.isNew ? 1 : 0;
        case 'featured':
        default:
          return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
      }
    });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-threadflare-background py-10">
        <Container>
          <PageTitle 
            title="Men's Collection" 
            subtitle="Explore our range of comfortable, stylish t-shirts designed for men."
          />

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <FilterPanel 
              filters={filters}
              onFilterChange={setFilters}
            />
          )}

          {menProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {menProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-500">No products match your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setFilters({
                    priceRanges: [],
                    sizes: [],
                    colors: [],
                    sortBy: "featured"
                  });
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </Container>
      </main>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default MenPage;
