import React, { useState } from "react";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed bg w-full z-50 bg-black backdrop-blur-sm py-4 px-8 shadow-lg border-b-2 border-purple-400">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="text-3xl text-purple-400">
            <LuGitCompareArrows />
          </div>
          <a href="#" className="text-3xl font-bold text-white">
            Syed
            <span className="text-purple-400"> Faraz </span> Ali
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        {/*  For Mobile Menu buttons */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {/*  Mobile Menus */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300  rounded-lg p-4 flex flex-col space-y-4">
          <a
            href="#home"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 text-1xl transition duration-300 hover:text-purple-400 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-1 top-7 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
