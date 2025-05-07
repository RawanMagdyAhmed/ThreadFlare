
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (product) => {
    // Add to cart with default size and color
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.imageUrl || product.image,
      size: product.availableSizes ? product.availableSizes[0] : "M", // Default to first size or M
      color: product.availableColors ? product.availableColors[0] : "#000000" // Default to first color or black
    }, 1);
    
    // Show toast notification
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Toast notification */}
      {addedToCart !== null && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-md bg-green-50 p-4 shadow-md border border-green-200">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <p className="text-sm font-medium text-green-800">
            Product added to cart successfully!
          </p>
        </div>
      )}
      
      <main className="flex-1 bg-threadflare-background py-10">
        <Container>
          <h1 className="heading-lg mb-6">My Wishlist</h1>
          
          {wishlist.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl mb-4">Your wishlist is empty</h2>
              <p className="mb-6 text-gray-600">Add items to your wishlist to save them for later.</p>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((product) => (
                <Card key={product.id} className="relative overflow-hidden">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-gray"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <X className="h-6 w-6 bg-slate-200 rounded-full p-1" />
                  </Button>
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.imageUrl || product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          // Fallback image if the original fails to load
                          e.currentTarget.src = "/images/placeholder-product.jpg";
                        }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-gray-700 mt-1">EGP {product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button asChild variant="outline">
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                    <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}
