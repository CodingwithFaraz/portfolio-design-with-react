import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


function ProjectCard({title, description, image, tech}) {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer">
        <img src={image} alt={title} className="w-full h-60 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div>
                {
                    tech.map((item,index)=>(
                        <span key={index}>{item}</span>
                    ))
                }
            </div>
            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-400/20 transition duration-300"><span>View More Projects</span>
                <FaArrowRight className="ml-2"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard