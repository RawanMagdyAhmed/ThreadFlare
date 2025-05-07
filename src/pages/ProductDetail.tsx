
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Heart, CheckCircle } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import NewsletterSignup from "@/components/NewsletterSignup";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatPrice } from "@/lib/utils";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-threadflare-background py-20">
          <Container>
            <div className="text-center">
              <h1 className="heading-lg mb-4">Product Not Found</h1>
              <p className="mb-6 text-gray-600">
                Sorry, we couldn't find the product you're looking for.
              </p>
              <Link to="/products">
                <Button className="bg-orange-gradient">
                  Return to Products
                </Button>
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !product) return;
    
    // Format the product to match the CartItem structure expected by CartContext
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      size: selectedSize,
      color: product.availableColors[0]
    }, quantity);
    
    // Show toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleToggleWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-threadflare-background py-10">
        <Container>
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="inline-flex items-center text-gray-500 hover:text-threadflare-orange">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/products" className="text-gray-500 hover:text-threadflare-orange">
                      Products
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-threadflare-orange">
                      {product.category}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-700">{product.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="font-poppins text-3xl font-semibold">{product.name}</h1>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full ${
                      isInWishlist(product.id) ? "bg-red-50 text-red-500" : ""
                    }`}
                    onClick={handleToggleWishlist}
                  >
                    <Heart
                      className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </Button>
                </div>
                <span className="mt-2 block text-2xl font-medium text-threadflare-orange">
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className="my-6">
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="mb-3 font-medium">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={`h-10 w-10 rounded-md p-0 ${
                        selectedSize === size ? "bg-orange-gradient" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                {selectedSize === null && (
                  <p className="mt-2 text-xs text-red-500">Please select a size</p>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="mb-3 font-medium">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors.map((color) => (
                    <div
                      key={color}
                      className="h-8 w-8 cursor-pointer rounded-full border-2 border-white ring-2 ring-gray-200 transition hover:ring-threadflare-orange"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="mb-3 font-medium">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="rounded-l-md rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex h-10 w-16 items-center justify-center border-y border-input bg-background">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    className="rounded-l-none rounded-r-md"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button 
                className="mt-4 bg-orange-gradient hover:shadow-lg hover:shadow-orange-200/40" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Container>
      </main>
      
      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-md bg-green-50 p-4 shadow-md border border-green-200">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <p className="text-sm font-medium text-green-800">
            Product added to cart successfully!
          </p>
        </div>
      )}
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default ProductDetail;
