import { motion } from "framer-motion";

export default function WhyRefurbished() {
  const steps = [
    {
      title: "Fully Restored",
      desc: "Repaired & restored to work just like new.",
      img: "https://refitglobal.com/cdn/shop/files/Fully_Restored.jpg?v=1716986249&width=1000",
    },
    {
      title: "Quality Check",
      desc: "Rigorous 47-point quality testing on each device.",
      img: "https://refitglobal.com/cdn/shop/files/Quality_Check.jpg?v=1716986249&width=1000",
    },
    {
      title: "Certified Refurbished",
      desc: "Certified, graded & packed in a brand-new box.",
      img: "https://refitglobal.com/cdn/shop/files/Certified_Refurbished.png?v=1716986351&width=1000",
    },
  ];

  const assurances = [
    {
      title: "Certified Professionals",
      img: "https://refitglobal.com/cdn/shop/files/Certified_Graded_by_Professional.jpg?v=1717017065&width=1000",
    },
    {
      title: "Months of Warranty",
      img: "https://refitglobal.com/cdn/shop/files/6_months_warranty.jpg?v=1717017065&width=1000",
    },
    {
      title: "Easy 7‑Days Replacement",
      img: "https://refitglobal.com/cdn/shop/files/Easy_3_Days.jpg?v=1717017065&width=1000",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4 md:px-16">
      {/* Intro */}
      <motion.section
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Why Refurbished is the Smart Choice
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our renewal process transforms used smartphones into like-new devices
          with certified quality, warranty & trust.
        </p>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white/5 p-6 rounded-xl hover:bg-white/10 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={s.img} alt={s.title} className="h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-300 text-center">{s.desc}</p>
          </motion.div>
        ))}
      </motion.section>
      {/* Environmental Impact */}

      <motion.section
        className="mt-24 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Refurbished = Responsible Choice
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Every refurbished device sold helps reduce e-waste and carbon
          footprint. ReFit Global believes in a circular economy that’s better
          for the planet and your pocket.
        </p>
        <img
          src="https://refitglobal.com/cdn/shop/files/1.png?v=1717577143&width=750"
          alt="e-waste impact"
          className="w-full max-w-xl mx-auto mt-8 rounded-lg shadow-lg"
        />
      </motion.section>

      {/* Assurances */}
      <motion.section
        className="grid grid-cols-1 pt-24 sm:grid-cols-3 gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {assurances.map((a, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white/5 p-6 rounded-xl hover:bg-white/10 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={a.img} alt={a.title} className="h-14 mb-3" />
            <h4 className="text-lg font-semibold">{a.title}</h4>
          </motion.div>
        ))}
      </motion.section>

      {/* Final Call-to-Action */}
      <motion.section
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-300 mb-6">
          Get access to premium tech at smart prices, backed by warranty & easy
          replacement.
        </p>
        <a
          href="/mobile"
          className="inline-block px-8 py-3 text-black bg-white rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Refurbished Phones
        </a>
      </motion.section>
    </div>
  );
}
