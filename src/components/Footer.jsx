import React from "react";
import { logo } from "../assets";

/* ─── Social Icon SVGs ─────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);
const GFGIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-1.106-.712L12 12.078l-3.56 2.949a3.79 3.79 0 0 1-1.106.712 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 3.01 3.01 0 0 1-.565-.745A2.547 2.547 0 0 1 2.27 13c0-.47.127-.93.379-1.315.25-.385.611-.698 1.046-.903L12 6.948l8.305 3.834c.435.205.797.518 1.046.903.252.385.38.844.379 1.315a2.547 2.547 0 0 1-.28 1.315zM12 2.25C6.615 2.25 2.25 6.615 2.25 12S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25z" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────── */
const footerColumns = [
  {
    heading: "Navigation",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Experience & Education", href: "#work" },
      { label: "Technical Skills", href: "#tech" },
      { label: "Projects", href: "#projects" },
      { label: "Testimonials", href: "#feedback" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Coding Profiles",
    links: [
      { label: "LeetCode ↗", href: "https://leetcode.com/u/kripalsinghthakur20/", external: true },
      { label: "GeeksforGeeks ↗", href: "https://geeksforgeeks.org", external: true },
      { label: "GitHub ↗", href: "https://github.com/kripalsingh6", external: true },
      { label: "LinkedIn ↗", href: "https://linkedin.com/in/kripalsingh6", external: true },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Bhopal, MP, India", href: null },
      { label: "+91 8770534091", href: "tel:+918770534091" },
      { label: "thakurkripalsingh6@gmail.com", href: "mailto:thakurkripalsingh6@gmail.com" },
    ],
  },
];

const socialLinks = [
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/kripalsingh6", label: "LinkedIn" },
  { icon: <GitHubIcon />, href: "https://github.com/kripalsingh6", label: "GitHub" },
  { icon: <LeetCodeIcon />, href: "https://leetcode.com/u/kripalsinghthakur20/", label: "LeetCode" },
  { icon: <GFGIcon />, href: "https://geeksforgeeks.org", label: "GFG" },
];

/* ─── Component ────────────────────────────────────────────── */
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{ background: "#050816", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      className="w-full text-white relative z-10 overflow-x-clip"
    >
      {/* ── Top section: brand + columns ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
              <span className="text-sm font-semibold leading-tight text-white tracking-wide">
                Kripal Singh<br />
                <span className="text-[#915eff]">Thakur</span>
              </span>
            </div>
            <p className="text-[13px] text-[#7a7d96] leading-relaxed max-w-[240px]">
              Full-Stack Engineer &amp; Competitive Programmer crafting performant, scalable web experiences.
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-xs text-[#00cea8] font-medium">200+ DSA Problems Solved</span>
              <span className="text-xs text-[#915eff] font-medium">B.Tech CS (Data Science) · 7.43 CGPA</span>
            </div>
          </div>

          {/* Link columns - shifted to the right on PC with clean left-aligned text */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3.5 lg:ml-auto w-fit text-left">
              <h4 className="text-xs font-semibold text-white tracking-wider uppercase">
                {col.heading}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[13.5px] text-[#7a7d96] hover:text-white transition-colors block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-[13.5px] text-[#7a7d96] block">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Social icons row ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 py-5 sm:py-6">
        <div className="flex gap-2.5 sm:gap-3 flex-wrap lg:justify-end">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#7a7d96] hover:text-white border border-white/10 hover:border-white/30 transition-all bg-white/5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          {/* Left: legal / copyright */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-xs text-[#44475a]">
            <span>Privacy</span>
            <span>©&nbsp;{new Date().getFullYear()} Kripal Singh Thakur. All rights reserved.</span>
          </div>

          {/* Right: status + back to top */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Pulsing status indicator */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00cea8] inline-block animate-pulse" />
              <span className="text-xs text-[#44475a]">Open to Opportunities</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="text-xs text-[#44475a] hover:text-white flex items-center gap-1 cursor-pointer transition-colors bg-transparent border-none p-0"
            >
              Back to top
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
