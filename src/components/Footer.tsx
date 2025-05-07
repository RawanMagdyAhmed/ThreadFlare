
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2">
              <img
                src="/favicon.ico"
                alt="ThreadFlare Logo"
                className="w-12 h-12"
              />
              <div className="text-center">
                <span className="block font-poppins text-xl font-bold text-threadflare-orange">
                  ThreadFlare
                </span>
                <span className="block text-xs font-light text-gray-500">
                  PREMIUM APPAREL
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Your destination for premium quality t-shirts that blend style,
              comfort, and durability.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-poppins text-lg font-semibold text-threadflare-orange">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="transition hover:text-threadflare-orange">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="transition hover:text-threadflare-orange">
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="transition hover:text-threadflare-orange">
                  Women
                </Link>
              </li>
            </ul>
          </div>

          {/* Account & Help */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-threadflare-orange font-poppins text-lg font-semibold ">
              Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/wishlist"
                  className="transition hover:text-threadflare-orange">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="transition hover:text-threadflare-orange">
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-threadflare-orange">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-threadflare-orange font-poppins text-lg font-semibold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-threadflare-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@threadflare.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-threadflare-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ThreadFlare. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
