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
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed w-full bg-gray-900 bg-opacity-90 z-50">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-end space-x-4">
          {["Home", "About Me", "My Education", "My Experience", "My Works", "Contact Me"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-300 hover:text-blue-100"
                onClick={(e) => {
                  e.preventDefault()
                  if (item === "Home") {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  } else {
                    const target = item.toLowerCase().replace(/\s+/g, "-")
                    const element = document.querySelector(`#${target}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
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

