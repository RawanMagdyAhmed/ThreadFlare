import { Link } from "react-router-dom";

export function CategorySection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Men's Collection" 
            image="/images/mens-category.jpg" 
            link="/shop?category=men" 
          />
          <CategoryCard 
            title="Women's Collection" 
            image="/images/womens-category.jpg" 
            link="/shop?category=women" 
          />
          <CategoryCard 
            title="Unisex Collection" 
            image="/images/unisex-category.jpg" 
            link="/shop?category=unisex" 
          />
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

function CategoryCard({ title, image, link }: CategoryCardProps) {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          onError={(e) => {
            // Fallback image if the original fails to load
            e.currentTarget.src = "/images/placeholder-category.jpg";
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
}