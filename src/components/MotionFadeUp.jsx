// components/MotionFadeUp.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionFadeUp = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeUp;
