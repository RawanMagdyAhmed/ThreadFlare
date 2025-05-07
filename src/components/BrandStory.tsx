
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg mb-6">Our Brand Story</h2>
            <p className="mb-4 text-gray-600">
              ThreadFlare began with a simple idea: create comfortable, stylish t-shirts that empower
              individuals to express themselves while maintaining modesty.
            </p>
            <p className="mb-6 text-gray-600">
              Founded in 2023, our journey started in a small design studio with big dreams. Today,
              we continue to craft each piece with attention to detail, quality materials, and
              contemporary design that speaks to the modern fashion enthusiast.
            </p>
            <Button
              variant="outline"
              className="border-threadflare-orange px-8 py-6 text-lg hover:bg-threadflare-orange-light hover:text-white"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-lg bg-orange-gradient"></div>
              <img
                src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                alt="ThreadFlare studio"
                className="relative rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
