import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }}
  id="project"
  className="py-10 bg-grey-300">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Core <span className="text-purple-400">Projects</span></h2>
        <p className="text-gray-400 mb-16 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-16xl mx-auto">
            {/* Project Card */}
            {
                projects.map((project, index)=>(
                    <ProjectCard key={index} {...project}/>

                ))
            }
        </div>

    </div>
    

  </motion.div>
  );

}

export default Projects;
