import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "MilkMate - Dairy Management",
      desc: "Winner of Technovate 3.0. A role-based app for dairies & milkmen with secure login & real-time tracking.",
      tech: ["MERN", "Authentication", "Vercel"],
      badge: "Award Winner",
      imageUrl: "/images/milkmate.png",
      liveLink: "https://milkmate-cowzy.vercel.app/",
      codeLink: "https://github.com/ShyamPatidar-17/Milkmate",
    },
    {
      id: 2,
      title: "Artisan Bazaar",
      desc: "Local marketplace for artisans with Stripe payments and real-time chat using Socket.io.",
      tech: ["React", "Node.js", "Socket.io", "Stripe"],
      imageUrl: "/images/artisian.png",
      liveLink: "https://artisanbazzar.vercel.app/",
      codeLink: "https://github.com/ShyamPatidar-17/ArtisanBazzar",
    },
    {
      id: 1,
      title: "Kantam-The Ganga Water (E-Commerce)",
      desc: "Kantam - The Ganga Water is a specialized e-commerce platform dedicated to providing authentic and sacred Ganga water for rituals, purification, and spiritual use.",
      tech: ["MERN", "Authentication", "Vercel", "React", "Express.js"],
      badge: "FREE LANCING",
      imageUrl: "/images/kantam.png",
      liveLink: "https://kantam-the-ganga-water.vercel.app/",
      codeLink: "https://github.com/ShyamPatidar-17/Kantam-The-Ganga-Water",
    },
    {
      id: 4,
      title: "Deal-o-City",
      desc: "Fashion-based e-commerce website developed during an IBM internship.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      badge: "IBM Internship",
      imageUrl: "/images/dealocity.png",
      liveLink: "https://deal-o-cityy-official.vercel.app/",
      codeLink: "https://github.com/ShyamPatidar-17/Deal-O-Cityy",
    },
    {
      id: 5,
      title: "Airline Reservation System",
      desc: "C++ Console app for flight bookings using File Handling and OOP concepts.",
      tech: ["C++", "OOP", "File Handling"],
      badge: "Console Based",
      imageUrl: "/images/aeroplane.jpg",
      liveLink: null,
      codeLink: "https://github.com/Prakash88277/Airline-Reservation-System",
    },
    {
      id: 6,
      title: "Artisan Bazaar App",
      desc: "Cross-platform mobile application for the artisan marketplace with native payment integration and mobile chat interface.",
      tech: ["React Native", "Node.js", "Socket.io", "Stripe"],
      badge: "Mobile Application",
      imageUrl: "/images/artisian-app.png",
      liveLink: null,
      codeLink: "https://github.com/ShyamPatidar-17/ArtisanBazzar",
    },
    {
      id: 7,
      title: "Deal-o-City App",
      desc: "Mobile e-commerce app extending the fashion platform for Android/iOS users, optimized for touch interactions.",
      tech: ["React Native", "MongoDB", "Express.js", "Node.js"],
      badge: "Mobile Application",
      imageUrl: "/images/dealocity-app.png",
      liveLink: null,
      codeLink: "https://github.com/ShyamPatidar-17/Deal-O-Cityy",
    },
    // ... add remaining projects
  ];

  const [visibleCount, setVisibleCount] = useState(3); 
  const showMore = () => setVisibleCount(allProjects.length);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gray-50 dark:bg-[#0B1120]"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg border flex flex-col group transition-all
                         bg-white border-gray-200
                         dark:bg-slate-800/50 dark:backdrop-blur-lg dark:border-slate-700/50 dark:shadow-xl"
            >
              <div className="h-52 relative overflow-hidden">
                {project.badge && (
                  <span className="absolute top-4 right-4 z-20 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {project.badge}
                  </span>
                )}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-1 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full border 
                                           bg-sky-50 text-sky-600 border-sky-100
                                           dark:bg-slate-700/50 dark:text-sky-300 dark:border-sky-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all border group/btn
                    bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200
                    dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:border-sky-400/50"
                  >
                    <FaGithub className="group-hover/btn:scale-110 transition-transform" />{" "}
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold shadow-lg shadow-sky-500/20 transition-all group/btn
                    bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500"
                    >
                      <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />{" "}
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < allProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={showMore}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 transition-all"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
