
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import CallToAction from "@/components/CallToAction";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <BrandStory />
        <CallToAction />
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
