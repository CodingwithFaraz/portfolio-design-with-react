import React from 'react'
import { motion } from 'framer-motion'
import {aboutInfo, assets} from '../assets/assets'



function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    id="about"
    className="py-20 bg-dark-200 "
    >
        <div className="container mx-0 px-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-4">About 
                <span className='text-purple-300'> Me </span> 
            
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto text-center mb-16'>Hi, I’m Shahwaz , Full Stack Developer & Digital Creator focused on transforming ideas into modern,engaging digital experiences.
              From high-performance websites to innovative digital solutions,I combine technology, creativity, and thoughtful design to 
              help brands build a stronger and more impactful online presence.</p>

              {/* Image + My Journey */}
              <div className="flex flex-col md:flex-row items-center gap-12"> 
                {/* Image */}
                <div className="md:w-1/2 rounded-2xl overflow-hidden">
                    <motion.img
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9,ease:'easeOut'}}
                    viewport={{once:false,amount:0.2}}
                    className="w-full h-full object-cover"
                    src={assets.profileImg} alt="Profile"
                    />
                </div>
                {/* Text Content */}
                <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9,ease:'easeOut'}}
                viewport={{once:false,amount:0.2}}
                className="md:w-1/2"
                >
                  <div className="rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                    <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur nesciunt modi ea fugiat iusto animi saepe accusantium labore autem? Veniam dicta fugiat aliquid, laudantium optio saepe odit tenetur sed.</p>
                    <p className="text-gray-300 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur nesciunt modi ea fugiat iusto animi saepe accusantium labore autem? Veniam dicta fugiat aliquid, laudantium optio saepe odit tenetur sed.</p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {
                        aboutInfo.map((data, index)=>(
                          <div key={index} className="bg-black rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                            <div className="text-purple-400 text-4xl mb-4">
                              <data.icon/>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">{data.title}</h3>
                            <p className="text-purple-400">{data.description}</p>

                          </div>
                        ))
                      }
                  </div>
                  </div>

                </motion.div>
                
              </div>
        </div>

    </motion.div>
  )
}

export default About