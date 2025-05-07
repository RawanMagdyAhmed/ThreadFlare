import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <section className="relative bg-threadflare-black py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-lg mb-6 text-white">
            Join the ThreadFlare Community
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Be the first to know about new collections, exclusive offers, and
            community events. Follow us on social media and sign up for our
            newsletter.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 text-center">
            {/* Option 1: Keep your Link approach */}
            <Link
              to="/products"
              className=" inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-threadflare-orange to-threadflare-orange-dark rounded-md hover:opacity-90 transition-all z-10"
              onClick={(e) => {
                e.preventDefault();
                handleShopNow();
              }}>
              Shop Now <ArrowRight className="h-5 w-5 text-center" />
            </Link>            
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-threadflare-orange-dark/20 blur-3xl"></div>
        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-threadflare-orange-dark/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
