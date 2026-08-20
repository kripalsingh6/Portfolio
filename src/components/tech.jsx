import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball.jsx";
import { SectionWrapper } from "../hoc/index.js";
import { technologies } from "../constants/index.js";
import styles from "../style.js";
import { textVariant } from "../utils/motion.js";

const Tech = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-start gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center gap-2" key={technology.name}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-secondary text-[14px] font-medium text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");