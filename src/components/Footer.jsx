import React from "react";
import { logo } from "../assets";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-16 sm:mt-24 bg-[#090617]/95 border-t border-white/10 pt-16 pb-12 relative z-10 text-white">
      <div className="w-full max-w-5xl mx-auto pl-8 sm:pl-20 md:pl-28 pr-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Badges */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              <h3 className="text-xl font-bold tracking-wide text-white">
                Kripal Singh <span className="text-[#915eff]">Thakur</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs rounded-full bg-[#915eff]/20 text-[#915eff] border border-[#915eff]/30 font-medium">
                200+ DSA Solved
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-[#00cea8]/20 text-[#00cea8] border border-[#00cea8]/30 font-medium">
                7.43 CGPA
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 w-fit">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-[#aaa6c3]">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#915eff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Bhopal, MP, India</span>
              </li>
              <li>
                <a href="tel:+918770534091" className="flex items-center gap-3 hover:text-[#00cea8] transition-colors">
                  <svg className="w-5 h-5 text-[#915eff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+91 8770534091</span>
                </a>
              </li>
              <li>
                <a href="mailto:thakurkripalsingh6@gmail.com" className="flex items-center gap-3 hover:text-[#00cea8] transition-colors break-all">
                  <svg className="w-5 h-5 text-[#915eff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>thakurkripalsingh6@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 w-fit">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-[#aaa6c3]">
              <li>
                <a href="#about" className="hover:text-[#915eff] transition-colors">About Me</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#915eff] transition-colors">Experience & Education</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-[#915eff] transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-[#915eff] transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#915eff] transition-colors">Contact & Rating</a>
              </li>
            </ul>
          </div>

          {/* Coding Profiles */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 w-fit">
              Coding Profiles
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-[#aaa6c3]">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#915eff] transition-colors py-1 block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kripalsingh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#915eff] transition-colors py-1 block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/kripalsinghthakur20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#915eff] transition-colors py-1 block"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://geeksforgeeks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#915eff] transition-colors py-1 block"
                >
                  GeeksforGeeks
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#aaa6c3]">
          <p>© {new Date().getFullYear()} Kripal Singh Thakur. Built with React, Tailwind CSS, & Three.js.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#915eff]/20 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
