import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball.jsx";
import { SectionWrapper } from "../hoc/index.js";
import { technologies } from "../constants/index.js";
import styles from "../style.js";
import { textVariant } from "../utils/motion.js";

const Tech = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 mt-8 sm:mt-10 w-full">
          {technologies.map((technology) => (
            <div className="flex flex-col items-center gap-2 group" key={technology.name}>
              <div className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-110">
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="text-[#aaa6c3] group-hover:text-white transition-colors text-[13px] sm:text-[14px] font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");