import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiJavascript, SiCplusplus, SiMysql, SiC, 
  SiGit, SiPostman, SiMui, SiVercel, SiRender, SiNetlify, 
  SiTypescript
} from 'react-icons/si';
import { TbBinaryTree, TbBrandReactNative } from 'react-icons/tb';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

const Skills = () => {
  const categories = [
    {
      title: "Languages & Core",
      skills: [
        { icon: <SiCplusplus />, name: "C++ (OOP)", color: "text-blue-600" },
        { icon: <SiC />, name: "C", color: "text-blue-400" },
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
        { icon: <TbBinaryTree />, name: "DSA", color: "text-green-600" },
        {icon:<SiTypescript/>, name:"Typescript",color:"text-blue-600"}
      ]
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { icon: <FaReact />, name: "React.js", color: "text-sky-500" },
        { icon: <TbBrandReactNative />, name: "React Native", color: "text-blue-500" },
        { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-600" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-600" },
      ]
    },
    {
      title: "UI Libraries & Frameworks",
      skills: [
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
        { icon: <SiMui />, name: "Material UI", color: "text-blue-600" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-600" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
        { icon: <FaDatabase />, name: "Express.js", color: "text-gray-500" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-600" },
      ]
    },
    {
      title: "Deployment & Tools",
      skills: [
        { icon: <SiGit />, name: "Git & GitHub", color: "text-orange-600" },
        { icon: <SiVercel />, name: "Vercel", color: "text-black dark:text-white" },
        { icon: <SiRender />, name: "Render", color: "text-black dark:text-white" },
        { icon: <SiNetlify />, name: "Netlify", color: "text-teal-500" },
        { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-[#0B1120]">
       <div className="absolute inset-0 bg-grid-slate-800/[0.05] bg-[bottom_1px_center] mask-image:linear-gradient(to_bottom,transparent,black)"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-400 mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full mr-3"></span>
                {cat.title}
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {cat.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center p-4 rounded-xl border shadow-sm transition-all group 
                               bg-white border-gray-200 hover:border-sky-500/30 hover:shadow-md
                               dark:bg-slate-800/40 dark:backdrop-blur-sm dark:border-slate-700/50 dark:hover:bg-slate-800 dark:hover:shadow-sky-500/20 dark:hover:border-sky-500/30"
                  >
                    <div className={`text-4xl mb-3 ${skill.color} drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                    </div>
                    <p className="font-medium text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;