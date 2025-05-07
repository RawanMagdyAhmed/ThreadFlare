
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatPrice } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Shipping cost
  const shippingCost = 50; // EGP 50 for shipping

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const total = subtotal + shippingCost;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { customer: formData, items: cart, total });
    
    // Show order success message
    setIsOrderComplete(true);
    
    // Clear the cart after successful order
    setTimeout(() => {
      clearCart();
      setIsCheckoutOpen(false);
      setIsOrderComplete(false);
    }, 3000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="container mx-auto flex-1 px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            <h2 className="mb-4 text-xl font-medium">Your cart is empty</h2>
            <p className="mb-6 text-gray-600">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-orange-gradient">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white">
                <div className="border-b border-gray-200 p-4">
                  <h2 className="text-lg font-medium">
                    Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div key={item.id} className="flex p-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium">
                          <h3>
                            <Link to={`/products/${item.id}`} className="hover:text-threadflare-orange">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-threadflare-orange-dark">{formatPrice(item.price)}</p>
                        </div>
                        
                        {item.size && <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>}
                        {item.color && <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>}
                        
                        <div className="mt-auto flex flex-1 items-end justify-between">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-fit rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">{formatPrice(subtotal)}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">{formatPrice(shippingCost)}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Total</p>
                    <p className="font-bold text-threadflare-orange-dark">{formatPrice(total)}</p>
                  </div>
                </div>
              </div>
              
              <Button
                className="mt-6 w-full bg-orange-gradient py-6"
                onClick={() => setIsCheckoutOpen(true)}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </Button>
              
              <Link to="/products">
                <Button className="mt-4 w-full" variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
      
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogTitle className=" pt-4 pb-2 z-10">Complete Your Order</DialogTitle>
          
          {isOrderComplete ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Order Placed Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your order. We'll deliver your items soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-4 py-4 px-1">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your full address"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="rounded-md bg-gray-50 p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-threadflare-orange mr-2 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Payment Method</h4>
                    <p className="text-sm text-gray-600">Cash on Delivery (COD)</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Subtotal:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Shipping:</span>
                  <span>{formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-threadflare-orange-dark">{formatPrice(total)}</span>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-orange-gradient py-6 mb-4">
                Place Order
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default CartPage;
