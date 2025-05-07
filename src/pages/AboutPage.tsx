
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { PageTitle } from "@/components/ui/page-title";
const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-threadflare-background py-10">
        <Container>
          <PageTitle
            title="About ThreadFlare"
            subtitle="Premium apparel crafted with care for everyday comfort and style."
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <img
                src="/images/about-hero.jpg"
                alt="ThreadFlare Team"
                className="rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1664&auto=format&fit=crop';
                }}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Story</h2>
                <p className="text-gray-700">
                  ThreadFlare started in 2022 with a simple mission: create
                  high-quality, modest t-shirts that combine comfort with
                  contemporary design. What began as a small operation has grown
                  into a brand recognized for its commitment to quality and
                  style.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-gray-700">
                  We believe that fashion should be accessible, comfortable, and
                  expressive. Our mission is to provide clothing that allows you
                  to express your personality while maintaining comfort and
                  modesty.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Our Process</h2>
                <p className="text-gray-700">
                  Every ThreadFlare product is crafted with attention to detail.
                  We source premium materials, work with skilled artisans, and
                  ensure ethical production practices. From design to delivery,
                  quality is our priority.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold">Our Values</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                  <svg
                    className="h-6 w-6 text-threadflare-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-700">
                  We never compromise on quality, using only the best materials
                  and production methods.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                  <svg
                    className="h-6 w-6 text-threadflare-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We continuously explore new designs and techniques to bring
                  fresh ideas to our customers.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-orange-100 p-3 inline-block">
                  <svg
                    className="h-6 w-6 text-threadflare-orange"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-700">
                  We're committed to building a community of like-minded
                  individuals who appreciate quality and style.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
