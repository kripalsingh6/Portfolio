import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-16 relative z-0 my-16 sm:my-24"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;