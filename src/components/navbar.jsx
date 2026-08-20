import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../style.js";
import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets/index.js";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050816]/85 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group bg-transparent"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-xl object-contain group-hover:scale-105 transition-transform bg-transparent"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center bg-transparent">
            Kripal Singh Thakur &nbsp;
            <span className="md:inline-block hidden text-[#915eff] bg-transparent">
              | Full-Stack Engineer
            </span>
          </p>
        </Link>

        {/* Right Side: Nav Links */}
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer bg-transparent"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#100d25]/95 backdrop-blur-xl border border-white/10 absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-2xl shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full bg-transparent">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-[#915eff] font-bold"
                      : "text-[#aaa6c3]"
                  } font-medium cursor-pointer text-[16px] hover:text-white transition-colors w-full bg-transparent`}
                  onClick={() => {
                    setToggle(!toggle);
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