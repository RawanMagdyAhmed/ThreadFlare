
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-threadflare-background-light pb-12 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="heading-xl mb-4 bg-orange-gradient bg-clip-text text-transparent">
              Elevate Your Style
            </h1>
            <h2 className="heading-md mb-6 text-threadflare-black">
              Modest Fashion, Bold Statement
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Discover our collection of premium quality t-shirts designed for the modern,
              style-conscious individual. Comfort meets contemporary design.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                className="btn-gradient flex items-center gap-2 px-6 py-6 text-lg"
                asChild
              >
                <Link to="/products">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-threadflare-orange px-6 py-6 text-lg hover:bg-threadflare-orange hover:text-white"
                asChild
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="ThreadFlare Clothing Collection"
                className="mx-auto rounded-lg object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-threadflare-orange-dark/30 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-threadflare-orange-light/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-threadflare-orange-light/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
