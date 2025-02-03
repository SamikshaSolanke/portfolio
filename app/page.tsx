import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Works from "./components/Works"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Works />
      <Contact />
    </main>
  )
}

