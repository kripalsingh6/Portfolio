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
        className="w-full max-w-7xl mx-auto pl-10 sm:pl-20 md:pl-28 pr-6 sm:pr-12 relative z-0 my-16 sm:my-24"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;