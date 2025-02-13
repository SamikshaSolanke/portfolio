"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    university: "Your University Name",
    degree: "Your Degree",
    cgpa: "Your CGPA",
    courses: ["Course 1", "Course 2", "Course 3"],
    certifications: ["Certification 1", "Certification 2"],
  },
]

const Education = () => {
  return (
    <section id="my-education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Education</h2>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6 mb-6"
          >
            <h3 className="text-2xl font-semibold mb-2">{edu.university}</h3>
            <p className="text-blue-300 mb-2">{edu.degree}</p>
            <p className="mb-4">CGPA: {edu.cgpa}</p>
            <h4 className="text-xl font-semibold mb-2">Relevant Courses:</h4>
            <ul className="list-disc list-inside mb-4">
              {edu.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mb-2">Certifications:</h4>
            <ul className="list-disc list-inside">
              {edu.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education

