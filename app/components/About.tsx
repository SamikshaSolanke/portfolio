"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about-me" className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          Hi there! 
          I’m Samiksha Solanke, a Bachelors of Technology student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, Pune. 

          I love working with data—whether it’s analyzing trends, building AI models, or solving real-world problems with machine learning.
          I enjoy creating innovative projects that push the boundaries of what data can do. I’ve also led tech workshops and hackathons, making learning more accessible for students like me!

          When I’m not coding, you’ll find me exploring new tech trends, participating in hackathons, or brainstorming my next project. I’m always eager to learn, grow, and collaborate!
          Let’s connect and build something amazing together. 🚀
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <Image
            src="/images/8027993.jpg"
            alt="About Me Graphic"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About

