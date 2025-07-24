import MainSection from "../HeroSection";
import Scroll3DSection from "../Scroll3DSection";
import CircularGallery from "../CircularGallery";
import ChromaGrid from "../ChromaGrid";
import PressReleaseSection from "../PressReleaseSection";
import FaqAccordion from "../FaqAccordion";
import MotionFadeUp from "../MotionFadeUp"; // Custom wrapper

const HomePage = () => {
  const mobileProducts = [
    {
      image:
        "https://imgs.search.brave.com/NyUyqI-alplBlAKJeufgwImQjHlFcRqdhEuxpcP5LLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvaXBob25lXzEz/L2lwaG9uZV8xM19Q/TkcyNy5wbmc",
      title: "iPhone 13 refurbished",
      subtitle: "128 GB - Blue",
      price: "₹48,999",
      discount: "15% Off",
      emi: "₹2,312/month",
      cod: true,
      url: "https://refitglobal.com/products/apple-iphone-15-refurbished",
      borderColor: "#2563EB",
    },
    {
      image:
        "https://imgs.search.brave.com/JaPZfJ7mzt9N4y0ZsU9bZWwD6pqLIbkX6trjixZxfQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWVu/ZGEucGVyc29uYWwu/Y29tLmFyL2ltYWdl/cy8zMjAvd2VicC9H/YWxheHlfUzIxX0Zl/X0JsYW5jb19Eb3Jz/b19taW5fNTk1Zjlk/NzA1MC5wbmc",
      title: "Samsung Galaxy S21 FE refurbished",
      subtitle: "128 GB - Olive Green",
      price: "₹29,999",
      discount: "25% Off",
      emi: "₹1,599/month",
      cod: true,
      url: "https://refitglobal.com/products/samsung-galaxy-s21-fe-5g-refurbished",
      borderColor: "#2563EB",
    },
    {
      image:
        "https://imgs.search.brave.com/DFarjtv5yntUWunhYqhdaoV46qqi1s9w87cvUeRiJGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vYXNp/cy5vcHN0YXRpY3Mu/Y29tL2NvbnRlbnQv/ZGFtL29hc2lzL3Bh/Z2UvMjAyMy9nbG9i/YWwvcHJvZHVjdC9s/YXJyeS9pbWFnZXMt/Y2FtZXJhLWV4cGxv/ZGUtMS0xLnBuZy53/ZWJw",
      title: "OnePlus Nord CE 3 Lite refurbished",
      subtitle: "128 GB - Pastel Lime",
      price: "₹17,499",
      discount: "20% Off",
      emi: "₹849/month",
      cod: true,
      url: "https://refitglobal.com/products/oneplus-nord-ce-3-lite-refurbished",
      borderColor: "#2563EB",
    },
    {
      image:
        "https://imgs.search.brave.com/38b5Af3EwX_NOReH5UxeOD4AItLHUr1B-rMjr2ie9tY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9iaWxlZG9rYW4u/Y29tL21lZGlhLzE3/MTA4NDU4MDNIb0Fl/by53ZWJw",
      title: "Realme Narzo 60 refurbished",
      subtitle: "128 GB - Cosmic Black",
      price: "₹13,499",
      discount: "30% Off",
      emi: "₹699/month",
      cod: false,
      url: "https://refitglobal.com/products/realme-narzo-60-5g-refurbished",
      borderColor: "#2563EB",
    },
  ];

  return (
    <>
      <MainSection />
      <Scroll3DSection />

      {/* Circular Gallery Section */}
      <section className="relative z-20 bg-black py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionFadeUp>
            <h1 className="text-white text-center text-3xl md:text-5xl font-extrabold leading-tight mb-10">
              Explore Top Refurbished Mobile Brands Trusted by Millions
            </h1>
          </MotionFadeUp>

          <MotionFadeUp delay={0.2}>
            <div className="overflow-hidden h-[400px] relative">
              <CircularGallery
                bend={-3}
                scrollSpeed={0.5}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.05}
              />
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="w-full py-16 px-4 md:px-10 bg-black">
        <MotionFadeUp>
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Featured Phones
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Handpicked refurbished phones at unbeatable prices.
            </p>
          </div>
        </MotionFadeUp>

        <MotionFadeUp delay={0.1}>
          <div style={{ height: "auto", position: "relative" }}>
            <ChromaGrid
              items={mobileProducts}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </MotionFadeUp>

        <MotionFadeUp delay={0.2}>
          <div className="text-center mt-10">
            <a
              href="https://refitglobal.com/collections/all-refurbished-mobile-phones"
              className="inline-block px-6 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              View More
            </a>
          </div>
        </MotionFadeUp>
      </section>

      {/* Press Release */}
      <MotionFadeUp delay={0.2}>
        <PressReleaseSection />
      </MotionFadeUp>

      {/* FAQ */}
      <MotionFadeUp delay={0.2}>
        <FaqAccordion />
      </MotionFadeUp>
    </>
  );
};

export default HomePage;
