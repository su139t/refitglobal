import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/ReFitglobal", // replace with your actual link
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/refitglobal", // replace with your actual link
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@refitglobal", // replace with your actual link
      label: "YouTube",
    },
  ];
  return (
    <motion.footer
      className="bg-black text-white px-6 py-16 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div className="grid md:grid-cols-4 gap-10" variants={fadeInUp}>
        {/* Popular Searches */}
        <div>
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            POPULAR SEARCHES
          </h4>
          <div className="flex flex-wrap gap-2 max-h-70 overflow-y-auto text-sm text-gray-300">
            {[
              "Apple",
              "ASUS Mobiles",
              "Best Camera SmartPhones",
              "Best Selling Products",
              "Deal of the Day",
              "Gionee",
              "Google Mobiles",
              "Honor",
              "Infinix",
              "Iqoo",
              "Lenovo",
              "LG",
              "Limited Time Deal",
              "Long Battery Life Phones",
              "New Product",
              "Newest Product",
              "Nokia",
              "Nothing",
              "OnePlus",
              "Oppo",
              "Poco",
              "Realme",
              "Redmi",
              "Refurbished Mobiles",
              "Second Hand Phones",
              "Tecno",
              "Top Gaming Phones",
              "Top Offer",
              "Under ₹5,999",
              "Under ₹9,999",
              "Under ₹15,999",
              "Under ₹20,999",
              "Under ₹24,999",
              "Under ₹30,999",
              "Under ₹34,999",
              "Vivo",
              "Xiaomi",
            ].map((term, i) => (
              <motion.span
                key={i}
                className="bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-700 hover:scale-105 transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {term}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Online Shopping */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-sky-400">
            ONLINE SHOPPING
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Apple", "Realme", "Xiaomi", "ASUS", "Lenovo", "OnePlus"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-sky-400 hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-emerald-400">
            CUSTOMER POLICIES
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Contact Us",
              "FAQ",
              "T&C",
              "Shipping",
              "Warranty Policies & Claim",
              "Cancellation",
              "Replace order",
              "Replacement Policy",
              "Privacy policy",
              "Track Order",
              "Become an Affiliate",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-emerald-400 hover:translate-x-1 transition-all cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-rose-400">REACH US</h4>
          <p className="text-sm text-gray-300 mb-2">
            EMAIL:{" "}
            <a
              href="mailto:service@refitglobal.com"
              className="text-white underline"
            >
              service@refitglobal.com
            </a>
          </p>
          <p className="text-sm text-gray-300 mb-4">
            PHONE:{" "}
            <a href="tel:+919355177599" className="text-white underline">
              +91 9355177599
            </a>
          </p>

          <h4 className="text-lg font-semibold mb-2">KEEP IN TOUCH</h4>
          <div className="flex gap-4 text-2xl text-gray-300 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                className="hover:text-rose-400 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4"
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-2">
            <img src="/assets/100_original.svg" alt="Original" className="h-5" />
            <span>100% ORIGINAL guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/47_quality_Check.svg"
              alt="Quality Check"
              className="h-5"
            />
            <span>47 Quality Check Points</span>
          </div>
        </div>
        <p>© {currentYear} Refit Global. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
