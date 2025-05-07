
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const isMobile = useMobile();
  const location = useLocation();

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistItemCount = wishlist.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="ThreadFlare Logo" className="w-20 h-20" />
            <div className="text-center">
              <span className="block font-poppins text-xl font-bold text-threadflare-orange md:text-2xl">
                ThreadFlare
              </span>
              <span className="block text-xs font-light text-gray-500">PREMIUM APPAREL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex">
            <Link
              to="/"
              className={`font-medium transition ${
                isActive('/') ? 'text-threadflare-orange' : 'text-gray-700 hover:text-threadflare-orange'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium transition ${
                isActive('/products') ? 'text-threadflare-orange' : 'text-gray-700 hover:text-threadflare-orange'
              }`}
            >
              Shop All
            </Link>
            <Link
              to="/men"
              className={`font-medium transition ${
                isActive('/men') ? 'text-threadflare-orange' : 'text-gray-700 hover:text-threadflare-orange'
              }`}
            >
              Men
            </Link>
            <Link
              to="/women"
              className={`font-medium transition ${
                isActive('/women') ? 'text-threadflare-orange' : 'text-gray-700 hover:text-threadflare-orange'
              }`}
            >
              Women
            </Link>
            <Link
              to="/about"
              className={`font-medium transition ${
                isActive('/about') ? 'text-threadflare-orange' : 'text-gray-700 hover:text-threadflare-orange'
              }`}
            >
              About
            </Link>
          </div>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-gray-700" />
              {wishlistItemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-threadflare-orange text-xs font-medium text-white">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-threadflare-orange text-xs font-medium text-white">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="ml-2 rounded-md p-1 text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition ${
                  isActive('/') ? 'text-threadflare-orange' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`font-medium transition ${
                  isActive('/products') ? 'text-threadflare-orange' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                to="/men"
                className={`font-medium transition ${
                  isActive('/men') ? 'text-threadflare-orange' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/women"
                className={`font-medium transition ${
                  isActive('/women') ? 'text-threadflare-orange' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/about"
                className={`font-medium transition ${
                  isActive('/about') ? 'text-threadflare-orange' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
