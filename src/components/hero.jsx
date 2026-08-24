import { motion } from 'framer-motion';
import styles from "../style.js";
import { ComputersCanvas } from './canvas/computers.jsx';

export default function Hero() {
  return (
    <section className='relative w-full sm:h-screen sm:min-h-screen mx-auto flex flex-col overflow-x-clip'>
      {/* ── Text content ── */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 pt-[120px] sm:pt-0 sm:absolute sm:inset-0 sm:top-[125px] flex flex-row items-start gap-3 sm:gap-5 z-10 sm:pointer-events-none">
        {/* Purple dot + gradient line */}
        <div className='flex flex-col justify-center items-center mt-2 sm:mt-5 shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff] shadow-[0_0_15px_#915eff]' />
          <div className='w-1 h-28 sm:h-80 violet-gradient' />
        </div>

        {/* Main text block */}
        <div className='sm:pointer-events-auto flex-1 min-w-0'>
          <h1 className='font-black text-white text-[28px] xs:text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.15] sm:leading-[88px] mt-1'>
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-[#b87dff] to-[#00cea8]'>Kripal</span>
          </h1>
          <p className='text-[14px] sm:text-[17px] text-[#aaa6c3] font-medium tracking-wide mt-3 sm:mt-3 max-w-2xl leading-[22px] sm:leading-[28px]'>
            Full-Stack Engineer & CS (Data Science) undergraduate specializing in building production-ready AI tools (Gemini API), scalable MERN web systems, and solving 200+ DSA problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <a
              href="#projects"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#915eff] to-[#00cea8] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-[0_0_25px_rgba(145,94,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              View Projects 🚀
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              Get In Touch ✉️
            </a>
          </div>
        </div>
      </div>

      {/* ── 3D Canvas: only on desktop/tablet ── */}
      <div className="hidden sm:block w-full h-full pt-24">
        <ComputersCanvas />
      </div>

      {/* ── Scroll indicator ── */}
      <div className='w-full flex justify-center items-center z-10 pointer-events-auto py-10 sm:py-0 sm:absolute sm:bottom-8'>
        <a href='#about' aria-label="Scroll down to About section">
          <div className='w-[30px] sm:w-[35px] h-[54px] sm:h-[64px] rounded-3xl border-2 sm:border-4 border-[#aaa6c3]/50 flex justify-center items-start p-1.5 sm:p-2 hover:border-[#915eff] transition-colors'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#915eff] mb-1 shadow-[0_0_10px_#915eff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}