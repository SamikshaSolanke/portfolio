"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

const contactData = [
  { icon: FaEnvelope, label: "Email", link: "mailto:your.email@example.com" },
  { icon: FaPhone, label: "Phone", link: "tel:+1234567890" },
  { icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/yourusername" },
  { icon: FaGithub, label: "GitHub", link: "https://github.com/yourusername" },
]

const Contact = () => {
  return (
    <section id="contact-me" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {contactData.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <contact.icon className="text-2xl text-blue-300" />
              <span className="sr-only">{contact.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

