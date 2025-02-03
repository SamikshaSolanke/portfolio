"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Samiksha Solanke
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">A Data Enuthsiast and Problem Solver</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mt-8 md:mt-0"
        >
          <Image
            src="/images/7408.jpg"
            alt="Hero Graphic"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

