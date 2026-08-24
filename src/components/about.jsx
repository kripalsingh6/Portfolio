import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from '../style.js';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';
import SectionWrapper from '../hoc/SectionWrapper.jsx';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="w-full sm:w-[240px]"
      options={{
        max: 25,
        scale: 1.02,
        speed: 400,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        className="w-full bg-gradient-to-b from-[#915eff]/40 via-[#151030] to-[#0f0c29] p-[1px] rounded-[24px] shadow-xl hover:shadow-[0_10px_30px_rgba(145,94,255,0.3)] transition-all duration-300"
      >
        <div className="bg-[#151030]/90 backdrop-blur-md rounded-[24px] py-6 sm:py-8 px-5 sm:px-6 min-h-[220px] sm:min-h-[260px] flex justify-evenly items-center flex-col border border-white/10 hover:border-[#915eff]/50 transition-colors">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center p-3 border border-white/10 shadow-inner">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] font-bold text-center mt-2 leading-snug">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 mb-4 sm:mb-6 text-[#aaa6c3] text-[14.5px] sm:text-[17px] leading-[26px] sm:leading-[30px] w-full"
        >
          I am an innovative Full-Stack Engineer and final-year Computer Science (Data Science) undergraduate at RGPV Bhopal with a <span className="text-white font-semibold">7.43 CGPA</span>. I specialize in architecting production-ready AI tools using the <span className="text-white font-semibold">Gemini 1.5 Flash API</span>, scalable MERN stack web applications (<span className="text-[#915eff]">MongoDB, Express.js, React.js, Node.js</span>), user authentication systems (Passport.js), and payment gateways (Razorpay).
          <br />
          <br />
          With a solid algorithmic foundation backed by <span className="text-[#00cea8] font-semibold">200+ solved DSA problems</span> across LeetCode & GeeksforGeeks, I enjoy turning complex software challenges into clean, high-performance, maintainable web products.
        </motion.p>

        <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 justify-center items-center w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");