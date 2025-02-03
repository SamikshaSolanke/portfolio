"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useCallback } from "react"

const Header = () => {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(`#${target}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed w-full z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-end space-x-6">
          {["Home", "About Me", "My Education", "My Experience", "My Works", "Contact Me"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={(e) => scrollToSection(e, item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-"))}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

