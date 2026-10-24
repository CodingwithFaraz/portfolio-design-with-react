import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-t-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Hi, I'm <span className="text-purple-400">Shahwaz Khan</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I Craft Responsive Websites, engaging digital experiences, and
            innovative technology solutions that turn ideas into impactful
            digital products and help businesses grow, connect, and stand out
            online.
          </p>
          <div>
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-400 rounded-lg hover:bg-purple-700 font-medium transition duration-300"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border ml-2 border-purple-400 rounded-lg hover:bg-purple/20 font-medium transition duration-purple-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* right side content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-300 animated-pulse-slow opacity-70">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                src={assets.profileImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
