"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const worksData = [
  {
    name: "Project 1",
    techStack: ["React", "Node.js", "MongoDB"],
    description: [
      "Developed a full-stack web application",
      "Implemented user authentication",
      "Created RESTful API endpoints",
    ],
    github: "https://github.com/yourusername/project1",
  },
  {
    name: "Project 2",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: [
      "Built a responsive portfolio website",
      "Utilized server-side rendering for improved SEO",
      "Implemented smooth animations with Framer Motion",
    ],
    github: "https://github.com/yourusername/project2",
  },
  {
    name: "Project 3",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    description: [
      "Created a task management application",
      "Designed and implemented database schema",
      "Integrated real-time updates with WebSockets",
    ],
    github: "https://github.com/yourusername/project3",
  },
  {
    name: "Project 4",
    techStack: ["React Native", "Firebase"],
    description: [
      "Developed a cross-platform mobile app",
      "Implemented push notifications",
      "Integrated with Firebase for backend services",
    ],
    github: "https://github.com/yourusername/project4",
  },
  {
    name: "Project 5",
    techStack: ["Python", "Django", "Docker"],
    description: [
      "Built a containerized web application",
      "Implemented CI/CD pipeline",
      "Created admin dashboard for content management",
    ],
    github: "https://github.com/yourusername/project5",
  },
  {
    name: "Project 6",
    techStack: ["GraphQL", "Apollo", "React"],
    description: [
      "Developed a scalable API with GraphQL",
      "Implemented efficient data fetching with Apollo Client",
      "Created a responsive dashboard for data visualization",
    ],
    github: "https://github.com/yourusername/project6",
  },
]

const Works = () => {
  return (
    <section id="my-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{work.name}</h3>
              <p className="text-blue-300 mb-4">{work.techStack.join(", ")}</p>
              <ul className="list-disc list-inside mb-4">
                {work.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <Link
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                View on GitHub
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works

