import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PressReleaseSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const pressData = [
    {
      title: "As seen on Shark Tank India S3",
      content:
        "ReFit Global pitched for ₹2 Crore for 0.5% equity — “Trusted by Sharks & Audience of India.”",
      image:
        "https://refitglobal.com/cdn/shop/files/WhatsApp_Image_2024-06-05_at_12.55.52_fdce8299.jpg?v=1717573111&width=500",
      link: "https://refitglobal.com/pages/press-release",
    },
    {
      title: "Featured by Forbes India",
      content:
        "Selected as one of the “Top 200 with Global Business Potential.”",
      image:
        "https://refitglobal.com/cdn/shop/files/WhatsApp_Image_2024-06-05_at_12.50.26_dcd9be36.jpg?v=1717573244&width=500",
      link: "https://refitglobal.com/pages/press-release",
    },
    {
      title: "Marketplace Launch for Refurb Phones",
      content:
        "Refit Global launched its own refurbished gadgets platform offering premium brands at up to 50% off, backed by a 37‑point quality check.",
      image:
        "https://refitglobal.com/cdn/shop/files/WhatsApp_Image_2024-06-05_at_12.50.26_19257864.jpg?v=1717573243&width=500",
      link: "https://www.mobilityindia.com/refit-global-announces-a-new-marketplace-for-pre-owned-smartphones-to-offer-premium-refurbished-phones-at-affordable-prices/",
    },
  ];

  return (
    <section className="py-16 bg-black  text-white">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Press & Recognition
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pressData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 hover:shadow-pink-500/20 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.content}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-pink-400 hover:underline text-sm"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
