import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaGithub  } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-10 bg-grey-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple-300">Touch</span>
        </h2>
        <p className="text-grey-400 text-center max-w-2xl mb-16 mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact form */}
            <div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                        <input type="text" className="w-full bg-black-300 border border-gray-300 px-4 py-3 outline-none rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Eamil Address</label>
                        <input type="email" className="w-full bg-black-300 border border-gray-300 px-4 py-3 outline-none rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Message</label>
                        <textarea type="text" className="w-full bg-black-300 border border-gray-300 px-4 py-3 outline-none rounded-lg"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-purple-400 px-6 py-3 font-medium rounded-lg cursor-pointer">Send</button>
                    </div>
                </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-purple-300 text-2xl mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">ABC, City </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-300 text-2xl mr-4">
                  <FaEnvelope />

                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-300 text-2xl mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+92 0123 4567</p>
                </div>
              </div>
              <div className="pt-4">
                <h3>Follow Me</h3>
                <div className="flex space-x-r">
                  <a href="#" className="w-12 h-12 rounded-full bg-black-300 flex items-center">
                    <FaGithub/>
                  </a>
                </div>
              </div>
            </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
