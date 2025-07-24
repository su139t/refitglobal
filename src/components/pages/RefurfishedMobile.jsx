import ScrollReveal from "../ScrollReveal";
import ChromaGrid from "../ChromaGrid";

const RefurfishedMobile = () => {
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
      borderColor: "#2563EB", // blue-600
      // gradient: "linear-gradient(145deg, #2563EB, #000)",
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
      borderColor: "#2563EB", // green-500
      // gradient: "linear-gradient(145deg, #22C55E, #000)",
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
      borderColor: "#2563EB", // purple-500
      // gradient: "linear-gradient(145deg, #A855F7, #000)",
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
      borderColor: "#2563EB", // orange-500
      // gradient: "linear-gradient(145deg, #F97316, #000)",
    },
    {
      image:
        "https://imgs.search.brave.com/eOKBCjbNVGqniStjacRLrJNjUYsF-zgGkOJtbMdvjSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDI1LzI3/My83NDcvbm9uXzJ4/L3hpYW9taS1yZWRt/aS1ub3RlLTEyLXBy/by1wbHVzLTVnLW1v/Y2t1cC1mcmVlLXBu/Zy5wbmc",
      title: "Redmi Note 12 refurbished",
      subtitle: "128 GB - Lunar Black",
      price: "₹12,999",
      discount: "10% Off",
      emi: "₹649/month",
      cod: true,
      url: "https://refitglobal.com/products/xiaomi-redmi-note-12-pro-refurbished",
      borderColor: "#2563EB", // red-500
      // gradient: "linear-gradient(145deg, #EF4444, #000)",
    },
    {
      image:
        "https://imgs.search.brave.com/m9oSX06Bzr8YqTwccbNQDKKoC_fjOVI75M_zRIj_z2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2l6dG9wLmNvbS9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvOTdjYzExNDNk/MmUyMGYyYjBjOGVh/OTFhYWExMjA1M2Mv/MS8wLzEwMDEwNzgx/XzE3NDUyMzM3OTU3/NjFfNzUweDc1MC5w/bmc", // assumed Vivo V200 Ultra mockup
      title: "Vivo X200 Ultra refurbished",
      subtitle: "256 GB - Cosmic Blue",
      price: "₹76,999",
      discount: "15% Off",
      emi: "₹2,399/month",
      cod: true,
      url: "https://refitglobal.com/products/vivo-v200-ultra",
      borderColor: "#2563EB", // blue-500
      // gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image:
        "https://imgs.search.brave.com/uU5twWD8RXPIk5KYOUjL02l_jskKP_uOFPxdTeecJUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/MDEuZXMuYzAxLmNv/L3VwbG9hZC9FNDc4/RTdGMjU4QUM3NTY0/LzIwMjUwNi81MDIw/NzIzMDk2MDIxNzI5/MTIyLnBuZw", // used Vivo X200 FE approximation
      title: "Vivo X200 FE refurbished",
      subtitle: "128 GB - Midnight Black",
      price: "₹54,990",
      discount: "12% Off",
      emi: "₹1,799/month",
      cod: true,
      url: "https://refitglobal.com/products/vivo-x200-fe",
      borderColor: "#2563EB", // green-500
      // gradient: "linear-gradient(145deg, #10B981, #000)",
    },
    {
      image:
        "https://imgs.search.brave.com/Skhy8hee8JHhGau5S0pwyoaQd_GUkxgVe-iEQEn-jes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmVlYm9tLmNvbS9t/b2JpbGUvMjAyNC8w/MS9Ob3RoaW5nLVBo/b25lLTJhLTEucG5n", // Nothing Phone 2a
      title: "Nothing Phone 2a refurbished",
      subtitle: "256 GB - Black",
      price: "₹23,999",
      discount: "8% Off",
      emi: "₹1,149/month",
      cod: true,
      url: "https://refitglobal.com/products/nothing-phone-2a-refurbished",
      borderColor: "#2563EB", // violet-500
      // gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    },
  ];

  return (
    <ScrollReveal y={100} duration={0.8} delay={0.2}>
      <section className="w-full py-12 pt-[90px] px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our Featured Phones
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Handpicked refurbished phones at unbeatable prices.
          </p>
        </div>

        <div style={{ height: "auto", position: "relative" }}>
          <ChromaGrid
            items={mobileProducts}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>
    </ScrollReveal>
  );
};

export default RefurfishedMobile;
