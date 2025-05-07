
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

const ProductsPage = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRanges: [],
    sizes: [],
    colors: [],
    sortBy: "featured"
  });

  // Apply filters to products
  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (category && product.category !== category) {
        return false;
      }
      
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

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-threadflare-background py-10">
        <Container>
          <PageTitle
            title="Our Collection"
            subtitle="Explore our range of comfortable, stylish t-shirts designed for
              everyday wear."
          />

          {/* <div className="mb-8">
            <h1 className="heading-lg mb-4">Our Collection</h1>
            <p className="text-gray-600">
              Explore our range of comfortable, stylish t-shirts designed for
              everyday wear.
            </p>
          </div> */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={category === null ? 'default' : 'outline'}
                className={category === null ? 'bg-orange-gradient' : ''}
                onClick={() => setCategory(null)}>
                All
              </Button>

              {uniqueCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? 'default' : 'outline'}
                  className={category === cat ? 'bg-orange-gradient' : ''}
                  onClick={() => setCategory(cat)}>
                  {cat}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-500">
                No products match your filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setFilters({
                    priceRanges: [],
                    sizes: [],
                    colors: [],
                    sortBy: 'featured',
                  });
                  setCategory(null);
                }}>
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

export default ProductsPage;
