import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-70 transition-transform duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full py-3 flex items-center justify-between backdrop-blur-md bg-black/70 border-b shadow-xl px-[7%]">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center space-x-10">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://refitglobal.com/cdn/shop/files/Logo-a668e71027ad5db488a7c8f1cb514dea.png?v=1715177065&width=220"
                alt="Refit Logo"
                className="h-10 object-contain"
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-10 font-medium text-white text-sm">
              {[
                { name: "Top Offers", href: "#top-offers" },
                { name: "Refurbished Mobiles", href: "/mobile" },
                { name: "Why Refurbished", href: "/whyrefurbished" },
                { name: "About Us", href: "/about-us" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="group relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out" />
                </a>
              ))}
            </div>
          </div>

          {/* Sign In Button */}
          <a
            href="#"
            className="hidden md:inline-block px-5 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white text-sm rounded-lg shadow-md hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
          >
            Sign In
          </a>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-white cursor-pointer "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-start gap-8 pt-24 px-6 text-white text-xl font-semibold overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { name: "Top Offers", href: "#top-offers" },
              { name: "Refurbished Mobiles", href: "/mobile" },
              { name: "Why Refurbished", href: "/whyrefurbished" },
              { name: "About Us", href: "/about-us" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 hover:text-pink-400 transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
