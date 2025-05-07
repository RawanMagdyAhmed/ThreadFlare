
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // If image fails to load, use placeholder
            e.currentTarget.src = "/images/placeholder-product.jpg";
          }}
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute right-3 top-3 rounded-full bg-white p-1.5 shadow-md transition-all hover:bg-gray-100"
        >
          <Heart
            className={`h-5 w-5 ${
              isInWishlist(id) ? "fill-threadflare-orange text-threadflare-orange" : "text-gray-600"
            }`}
          />
        </button>
        {product.isNew && (
          <span className="absolute left-0 top-3 bg-threadflare-orange px-2 py-1 text-xs font-medium text-white">
            NEW
          </span>
        )}
      </div>
      <div className="mt-3 p-2">
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-sm font-medium text-gray-900 transition-colors group-hover:text-threadflare-orange">
            {name}
          </h3>
          <p className="text-gray-700 mt-1">{formatPrice(product.price)}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
