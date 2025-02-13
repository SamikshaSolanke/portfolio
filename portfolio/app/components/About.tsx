"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about-me" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300">
            Your paragraph about yourself goes here. Describe your passion for technology, your goals, and what drives
            you in your career.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <Image src="/placeholder.svg" alt="About Me Graphic" width={400} height={400} className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  )
}

export default About

