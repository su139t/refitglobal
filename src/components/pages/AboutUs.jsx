import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16 overflow-hidden">
      {/* Our Essence */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Our Essence
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          We transform pre‑loved gadgets into second‑best treasures—each device
          goes through a rigorous 47‑point quality check. Say goodbye to e‑waste
          and hello to sustainable tech!
        </p>
      </motion.div>

      {/* Core Values Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
      >
        {[
          {
            img: "https://refitglobal.com/cdn/shop/files/Promote_Reuse_Reduce_waste.jpg?v=1716986100&width=750",
            title: "Promote Reuse",
            desc: "Reduce waste",
          },
          {
            img: "https://refitglobal.com/cdn/shop/files/Sustainable_Green_Technology.jpg?v=1716986100&width=750",
            title: "Green Technology",
            desc: "Sustainability",
          },
          {
            img: "https://refitglobal.com/cdn/shop/files/Affordability_meets_Performance.jpg?v=1716986100&width=750",
            title: "Affordability",
            desc: "Meets performance",
          },
          {
            img: "https://refitglobal.com/cdn/shop/files/Regenerative_Circular_System.jpg?v=1716986176&width=750",
            title: "Circular System",
            desc: "Regeneration",
          },
        ].map((item, idx) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={idx}
            className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl shadow-md hover:shadow-pink-500/20 transition duration-300"
          >
            <img
              src={item.img}
              className="w-20 h-20 mb-4 rounded-full object-cover shadow"
              alt={item.title}
            />
            <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
          Redefining Refurbished Electronics
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          At ReFit Global, we're on a mission to redefine mobile solutions. We
          breathe new life into old devices—offering competitive prices backed
          by our thorough quality checks.
        </p>
      </motion.div>

      {/* Founders */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Saket */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center bg-white/5 p-6 rounded-xl hover:shadow-pink-500/30 transition"
        >
          <img
            src="https://refitglobal.com/cdn/shop/files/65d304209dcd194ea164ad2a.WhatsApp_Image_2024-02-19_at_10.29.56_AM.jpg?v=1716879876&width=1500"
            alt="Saket Saurav"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500/50"
          />
          <h3 className="text-xl font-semibold text-white">
            Saket Saurav, Co‑Founder & CEO
          </h3>
          <p className="italic text-pink-300 my-2">
            "Our smartphones tell a story beyond pixels..."
          </p>
          <p className="text-gray-300">
            15+ years in retail at Shopclues & LG Electronics, MBA & Law
            graduate, redefining refurbished tech.
          </p>
        </motion.div>

        {/* Avneet */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center bg-white/5 p-6 rounded-xl hover:shadow-pink-500/30 transition"
        >
          <img
            src="https://refitglobal.com/cdn/shop/files/65d304329dcd194ea164ad2c.WhatsApp_Image_2024-02-19_at_10.29.57_AM.jpg?v=1716880206&width=1500"
            alt="Avneet Singh"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500/50"
          />
          <h3 className="text-xl font-semibold text-white">
            Avneet Singh, Co‑Founder & COO
          </h3>
          <p className="italic text-pink-300 my-2">
            "Committed to exceptional service, quality & innovation."
          </p>
          <p className="text-gray-300">
            14+ years in e‑commerce and FMCG. MBA & B.Pharm, building trust and
            strategy at ReFit.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
