import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "A showcase of my work and experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen`}>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">{children}</div>
      </body>
    </html>
  )
}

