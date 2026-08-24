import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../style.js";
import { github } from "../assets/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { projects } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="w-full">
      <Tilt
        options={{
          max: 20,
          scale: 1.01,
          speed: 400,
        }}
        className="bg-gradient-to-b from-[#151030] to-[#0d0927] p-5 sm:p-6 rounded-3xl w-full border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(145,94,255,0.25)] flex flex-col justify-between h-full"
      >
        <div>
          <div className="relative w-full h-[190px] sm:h-[220px] rounded-2xl overflow-hidden group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                title="View Source Code"
                className="bg-black/70 backdrop-blur-md w-10 h-10 sm:w-11 sm:h-11 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 border border-white/20 transition-transform shadow-lg"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white font-bold text-[19px] sm:text-[22px] hover:text-[#915eff] transition-colors">{name}</h3>
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex items-center justify-center p-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#aaa6c3]"
                aria-label={`View ${name} on GitHub`}
              >
                <img src={github} alt="github" className="w-4 h-4 object-contain" />
              </a>
            </div>
            <p className="mt-2 text-[#aaa6c3] text-[13.5px] sm:text-[14px] leading-[22px]">{description}</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] sm:text-[12px] font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>MY WORK</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-[#aaa6c3] text-[14.5px] sm:text-[17px] leading-[26px] sm:leading-[30px] w-full"
          >
            The following technical projects demonstrate my skills in architecting production-ready AI platforms, full-stack web applications, RESTful APIs, and database schemas based on real-world engineering requirements.
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-start w-full">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");