import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      degree: "B.Tech in CSE",
      year: "2022 - 2026",
      score: "CGPA: 8.10"
    },
    {
      institution: "Kautilya Education Academy",
      degree: "Class XII (CBSE)",
      year: "2022",
      score: "82%"
    },
    {
      institution: "Dinah Convent School",
      degree: "Class X (CBSE)",
      year: "2020",
      score: "68%"
    }
  ];

  return (
    // Section Background: Gray-50 (Light) / #0B1120 (Dark)
    <section id="education" className="py-20 relative transition-colors duration-300 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* --- Education Column --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-4">Academics</h3>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                // Card Styling: White (Light) / Slate-800 (Dark)
                className="p-6 rounded-lg border-l-4 border-sky-500 shadow-md dark:shadow-none bg-white dark:bg-slate-800 transition-colors"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>{edu.year}</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Achievements Column --- */}
          <div>
             <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-4">Achievements</h3>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               // Card Styling: White (Light) / Slate-800 (Dark) with borders
               className="p-6 rounded-lg border shadow-md dark:shadow-none bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 transition-colors"
             >
               <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                 <li className="flex items-start gap-3">
                   <span className="text-yellow-500 dark:text-yellow-400 mt-1 text-lg">★</span>
                   <span><b className="text-gray-900 dark:text-white">Winner:</b> Technovate 3.0 (IBM Day 2025) for 'MilkMate'</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="text-yellow-500 dark:text-yellow-400 mt-1 text-lg">★</span>
                   <span><b className="text-gray-900 dark:text-white">Finalist:</b> IBM Pan-India Hackathon 2025 (Bangalore)</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="text-green-600 dark:text-green-400 mt-1 text-lg">✔</span>
                   <span>Certified Full Stack Web Development (Apna College)</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <span className="text-green-600 dark:text-green-400 mt-1 text-lg">✔</span>
                   <span>Certified Data Structures & Algorithms in C++</span>
                 </li>
               </ul>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;