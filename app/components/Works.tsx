"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const worksData = [
  {
    name: "Deep Fake Detection Using Machine Learning",
    techStack: ["Kaggle", "Google Colab", "TensorFlow Lite", "openCV", "Flask", "GitHub"],
    description: [
      "Developed a lightweight deepfake detection model optimized for mobile devices, ensuring high accuracy and real-time processing.",
      "Orchestrated an AI-powered backend using ResNet-Swish-BiLSTM to analyze video frames and detect deepfakes with improved robustness.",
      "Integrated a cross-platform mobile application with frame extraction APIs for seamless deepfake verification on both iOS and Android.",
    ],
    github: "https://github.com/SamikshaSolanke/Deepfake-detection-using-ML",
  },
  {
    name: "Resume Analyzer Using Machine Learning",
    techStack: ["Python", "Pandas", "Numpy", "Flask", "Jupyter Notebook", "HTML", "CSS", "GitHub"],
    description: [
      "Developed an AI-powered system for job recommendations, categorization, and accurate extraction of candidate details, including names, contact information, and skills.",
      "Formulated advanced analytics to assess strengths, weaknesses, and skill sets, enhancing recruitment precision and decision- making.",
      "Improved recruitment efficiency by reducing errors, accelerating candidate selection, and aligning job requirements with candidate profiles.",
    ],
    github: "https://github.com/SamikshaSolanke/Resume-Analyser-using-AIML",
  },
  {
    name: "British Airways Reviews Analysis using Tableau",
    techStack: ["Kaggle", "Tableau", "GitHub"],
    description: [
      "Provides a breakdown of average ratings for cabin staff service, entertainment, food and beverages, ground service, seat comfort, and value for money.",
      "Displays a world map with color-coded countries representing their selected average rating for British Airways.",
      "Shows a bar chart comparing the average selected rating for different aircraft types.",
    ],
    github: "https://github.com/SamikshaSolanke/Data-Analysis-of-British-Airways-Review-using-Tableau",
  },
  {
    name: "UT Mart Sales Analysis using Tableau",
    techStack: ["Kaggle", "Tableau", "GitHub"],
    description: [
      "Showcases total sales, profit, and quantity metrics prominently at the top of the dashboard.",
      "Allows users to filter sales data by the year of the order date using a dropdown menu.",
      "Displays sales distribution across various states in the United States, color-coded based on total sales volume.",
    ],
    github: "https://github.com/SamikshaSolanke/UT-Mart-Sales-Analytics-Dashboard",
  },
  {
    name: "Credit Card Fraud Detection using Machine Learning",
    techStack: ["Python", "Numpy", "Pandas", "Kaggle", "Google Colab", "GitHub"],
    description: [
      "This project explores the development and implementation of machine learning models for detecting fraudulent activities in various domains, such as financial transactions, insurance claims, and e-commerce.",
      "This project provides a comprehensive framework for building, training, and evaluating fraud detection models, including data preprocessing, feature engineering, model selection, and performance evaluation."
    ],
    github: "https://github.com/SamikshaSolanke/Fraud-Detection-Using-Machine-Learning",
  },
  {
    name: "Voting System Using C Language",
    techStack: ["C"],
    description: [
      "The program prompts for the number of candidates and reads each candidate's name, checking for duplicates using ‘isDuplicateCandidate’ and converting names to lowercase for consistency.",
      "The program enters a loop where users enter their names and cast votes. It checks if the voter has already voted using ‘hasVoted’ to prevent multiple votes from the same user. Votes are cast using the ‘castVote’ function, which matches votes to candidates case-insensitively.",
      "The ‘storeVotes’ function sorts candidates by name using ‘qsort’ and ‘compareCandidates’, and writes the sorted results to a file.",
      "The ‘findWinner’ function finds the candidate with the highest votes and handles ties by listing all candidates with the maximum votes."
    ],
    github: "https://github.com/SamikshaSolanke/Voting-System-Using-C-Language",
  },
]

const Works = () => {
  return (
    <section id="my-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
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

