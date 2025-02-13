"use client"

import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Software Engineer",
    company: "Tech Company A",
    responsibilities: [
      "Developed and maintained web applications",
      "Collaborated with cross-functional teams",
      "Implemented new features and optimized existing ones",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Company B",
    responsibilities: [
      "Built responsive user interfaces",
      "Worked with React and Next.js",
      "Improved website performance and SEO",
    ],
  },
  {
    role: "Intern",
    company: "Tech Startup C",
    responsibilities: [
      "Assisted in developing mobile applications",
      "Learned and applied new technologies",
      "Participated in code reviews and team meetings",
    ],
  },
]

const Experience = () => {
  return (
    <section id="my-experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-blue-300 mb-4">{exp.company}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

