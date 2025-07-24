import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question:
      "What is the difference between a Second-Hand and Refurbished phone?",
    answer: (
      <>
        <strong>Refurbished Phone:</strong> Goes through 47-point checks and
        includes warranty + return policy.
        <br />
        <strong>Second-Hand Phone:</strong> Just a used device without warranty
        or replacement.
      </>
    ),
  },
  {
    question: "What quality checks are performed on refurbished phones?",
    answer: (
      <>
        Devices undergo a strict 47-point quality check for performance and
        appearance before resale.
      </>
    ),
  },
  {
    question: "How do I avail of a warranty on my device?",
    answer: (
      <>
        Email:{" "}
        <a
          href="mailto:warranty@refitglobal.com"
          className="underline text-pink-400"
        >
          warranty@refitglobal.com
        </a>
        <br />
        Phone:{" "}
        <a href="tel:+919355177199" className="underline text-pink-400">
          +91-9355177199
        </a>
        <br />
        Replacement or refund within 6 months if defective.
      </>
    ),
  },
  {
    question: "Is there any device replacement policy?",
    answer: (
      <>
        Replacement available within 7 days. Keep original packaging and
        accessories.
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-20 py-10 bg-black text-white">
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Have a question? We’re here to help.
      </motion.h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between text-lg font-medium hover:text-pink-400 transition"
            >
              {item.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  className="px-6 pb-4 text-sm text-gray-300"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="py-2">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
