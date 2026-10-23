import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-10 bg-grey-100">

        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4"> Work <span className="text-purple-300">Experience</span></h2>
          <p className="text-grey-400 text-center max-w-2xl mb-16 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {
                workData.map((data, index)=>(
                  <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-300 cursor-pointer hover:translate-y-2 transition-all duration-300">
                    {/* timelie */}
                    <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-400">

                    </div>
                    {/* box */}
                    <div className="bg-black rounded-2xl p-6">
                      <div className="flex justify-between items-startmb-2">
                        <h3 className="text-xl font-smibold">{data.role}</h3>
                        <span className="px-3 py-1 bg-purple-300/20 text-purple-400 text-xs rounded-full md:text-sm">{data.duration}</span>
                        
                      </div>
                      <p className="text-gray-400 mb-2">{data.company}</p>
                        <p className="text-gray-300">{data.description}</p>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>

    </motion.div>
  );
}

export default Work;
