
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="bg-threadflare-background-light py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="heading-md mb-3">Stay in the Loop</h2>
            <p className="mb-6 text-gray-600">
              Subscribe to our newsletter for exclusive deals, style tips, and new product announcements.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1"
              />
              <Button type="submit" className="btn-gradient h-12">
                Subscribe
              </Button>
            </div>
            <div className="mt-4 text-center text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from ThreadFlare.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
