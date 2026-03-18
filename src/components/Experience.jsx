import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // 1. Data Configuration
  const experiences = [
    {
      id: 1,
      role: "Full Stack & React Native Developer",
      company: "NewTech Fusion, Indore",
      startDate: "2025-11-01", 
      endDate: "2026-04-01",
      displayDate: "Nov 2025 - Present",
      description: [
        "Developing scalable web and mobile applications using MongoDB, Express, React, React Native, and Node.js.",
        "Building cross-platform mobile solutions for iOS and Android with seamless native performance.",
        "Optimizing code architectures to ensure consistency between web and mobile interfaces."
      ]
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "IBM (PBEL Scheme) - Virtual",
      startDate: "2025-07-01",
      endDate: "2025-07-31", 
      displayDate: "July 2025",
      description: [
        "Architected and developed a full-stack E-commerce application using the MERN stack.",
        "Implemented end-to-end functionality including database management and RESTful API integration.",
        "Ensured dynamic data handling and scalable backend architecture."
      ]
    }
  ];

  // 2. Calculation Helper
  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);

    // Get total months difference
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    
    // Add 1 to make it inclusive (e.g., Jan to Jan is 1 month work, not 0)
    let totalMonths = (years * 12) + months + 1;

    // Convert back to Years + Months
    const calcYears = Math.floor(totalMonths / 12);
    const calcMonths = totalMonths % 12;

    let durationString = "";
    if (calcYears > 0) durationString += `${calcYears} yr${calcYears > 1 ? "s" : ""} `;
    if (calcMonths > 0) durationString += `${calcMonths} mo${calcMonths > 1 ? "s" : ""}`;
    
    return durationString.trim() || "1 mo";
  };

  return (
    <section id="experience" className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 border-l-2 border-sky-500 space-y-8"
        >
          {experiences.map((exp) => (
            <div key={exp.id} className="p-6 rounded-xl shadow-lg border relative transition-colors
                          bg-white border-gray-200
                          dark:bg-slate-800 dark:border-slate-700">
              
             
              <span className="absolute -left-[41px] top-6 w-5 h-5 bg-sky-500 rounded-full border-4 border-gray-50 dark:border-[#0B1120]"></span>
              
            
             
<div className="flex flex-col md:flex-row justify-between mb-4">
  

  <div className="flex flex-wrap items-baseline gap-2">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      {exp.role}
    </h3>
    <span className="hidden md:block text-gray-400">|</span>
    <h4 className="text-lg text-red-700 dark:text-red-400">
      {exp.company}
    </h4>
  </div>


  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
    <span className="text-sky-600 dark:text-sky-400 font-mono text-sm font-bold">
      {exp.displayDate}
    </span>
    <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">
      {calculateDuration(exp.startDate, exp.endDate)}
    </span>
  </div>

</div>
              
        
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;