"use client"

import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Event Coordinator",
    company: "Microsoft Learner Students Club, VIT, Pune",
    responsibilities: [
      "Led a Web Development workshop for 300+ freshmen, making coding accessible.",
      "Helped in organising my college’s first offline 24-hour Blockchain Hackathon, managing 50+ teams.",
      "These experiences strengthened my leadership and problem-solving skills while fostering a collaborative tech community."
    ],
  },
  {
    role: "Design Coordinator",
    company: "College Newsletter Club, VIT, Pune",
    responsibilities: [
      "Led the design team for the College Newsletter Club, creating visually engaging and well-structured editions.",
      "Designed and refined newsletter layouts, ensuring professional-quality content presentation while maintaining brand consistency.",
      "Earned recognition and appreciation from faculty for creativity, and contribution to the club’s impactful publications."
    ],
  },
  {
    role: "Social Service Volunteer",
    company: "Social Service Club, VIT, Pune",
    responsibilities: [
      "Taught at government primary schools’ children under social welfare program called ‘Utkarsh’.",
      "It deepened my empathy and compassion as I connect with the students and their struggles, helping me become a more empathetic individual.",
      "Teaching and interacting with children from diverse backgrounds expanded my perspective and promote personal growth."
    ],
  },
]

const Experience = () => {
  return (
    <section id="my-experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Co-curricular and Extra-curricular Experiences</h2>
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

