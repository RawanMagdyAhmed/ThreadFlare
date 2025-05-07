
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const FeaturedProducts = () => {
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular styles, crafted with premium materials for exceptional comfort and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/products/${product.id}`} className="block">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-threadflare-orange font-medium">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-threadflare-orange text-white font-medium rounded-md hover:bg-threadflare-orange/90 transition"
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
