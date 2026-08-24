import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../style.js";
import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets/index.js";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full flex items-center py-3.5 sm:py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group bg-transparent"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain group-hover:scale-105 transition-transform bg-transparent"
          />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex items-center bg-transparent">
            Kripal Singh Thakur &nbsp;
            <span className="md:inline-block hidden text-[#915eff] bg-transparent">
              | Full-Stack Engineer
            </span>
          </p>
        </Link>

        {/* Right Side: Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center bg-transparent">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white font-bold border-b-2 border-[#915eff]"
                  : "text-[#aaa6c3]"
              } hover:text-[#915eff] text-[15px] font-medium cursor-pointer transition-all py-1 bg-transparent`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="bg-transparent">{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center bg-transparent">
          <button
            type="button"
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[22px] h-[22px] object-contain bg-transparent"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden opacity-0 scale-95 pointer-events-none" : "flex opacity-100 scale-100 pointer-events-auto"
            } transition-all duration-200 p-6 bg-[#0f0c29]/95 backdrop-blur-2xl border border-white/15 absolute top-16 right-4 min-w-[220px] z-50 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)]`}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-4 w-full bg-transparent">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-[#915eff] font-bold bg-[#915eff]/10"
                      : "text-[#aaa6c3] hover:text-white"
                  } font-medium cursor-pointer text-[15px] transition-all w-full rounded-xl px-3 py-2 bg-transparent`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="block w-full bg-transparent">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}