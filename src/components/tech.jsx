import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball.jsx";
import { SectionWrapper } from "../hoc/index.js";
import { technologies } from "../constants/index.js";
import styles from "../style.js";
import { textVariant, fadeIn } from "../utils/motion.js";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 mt-8 sm:mt-10 w-full">
          {technologies.map((technology, index) => (
            <motion.div
              variants={fadeIn("up", "spring", 0.05 * index, 0.5)}
              className="flex flex-col items-center gap-2 group"
              key={technology.name}
            >
              {isMobile ? (
                /* ── Static image on mobile ── */
                <div className="w-[72px] h-[72px] rounded-2xl bg-[#151030] border border-white/10 flex items-center justify-center p-3 shadow-lg group-hover:border-[#915eff]/40 transition-all duration-300">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* ── 3D Ball on desktop ── */
                <div className="w-28 h-28 transition-transform duration-300 group-hover:scale-110">
                  <BallCanvas icon={technology.icon} />
                </div>
              )}
              <p className="text-[#aaa6c3] group-hover:text-white transition-colors text-[12px] sm:text-[14px] font-medium text-center">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");