import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

// Variants for floating background particles
const particleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i) => ({
    opacity: [0.2, 0.5, 0.2],
    scale: [1, 1.5, 1],
    y: [0, -100, 0],
    x: [0, i % 2 === 0 ? 50 : -50, 0],
    transition: {
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      ease: "linear",
      delay: i * 2,
    },
  }),
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "Android Developer", "iOS Developer", "UI/UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden bg-[#0B1120]">
      
      {/* --- Dynamic Background Elements --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        
        {/* Existing large blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-sky-700/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className={`absolute w-2 h-2 rounded-full blur-sm ${i % 2 === 0 ? 'bg-sky-400' : 'bg-purple-400'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- Left Side: Text Content --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left relative"
        >
         
          <div className="absolute -inset-x-10 -inset-y-10 bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-3xl -z-10 md:hidden"></div>

    

          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 animate-gradient-x">
              Shyam Patidar
            </span>
          </h1>

        <div className="h-8 mb-8 flex justify-center md:justify-start items-center gap-3"> {/* Use flex and gap to control spacing */}
    <span className="text-xl lg:text-2xl text-gray-300 font-medium whitespace-nowrap">I am a</span>
    
    {/* Create a relative container for the changing text to sit in */}
    <div className="relative w-[250px] h-full flex items-center">
        <AnimatePresence mode='wait'>
            <motion.span
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // Removed left-[...] and added left-0
            className="text-xl lg:text-2xl font-bold text-sky-400 absolute left-0"
            style={{ whiteSpace: 'nowrap' }}
            >
            {roles[roleIndex]}
            </motion.span>
        </AnimatePresence>
    </div>
</div>

          <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Specializing in <strong className="text-white">MERN Stack</strong>, <strong className="text-white">C++</strong>, and building highly scalable and performant modern web applications.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-sky-500/30 relative overflow-hidden group"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </motion.button>
            </Link>

            <motion.a 
              href="/resume.pdf" 
              download="Shyam_Patidar_Resume.pdf"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-slate-800/50 backdrop-blur-md border border-slate-600/50 text-white rounded-full font-bold transition-all flex items-center gap-2 hover:border-sky-500/50 hover:text-sky-400 group"
            >
              <FaFileDownload className="group-hover:animate-bounce" /> Resume
            </motion.a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start mt-10 items-center">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider hidden md:block">Connect:</span>
            {[
              { Icon: FaGithub, href: "https://github.com/ShyamPatidar-17", color: "hover:text-[#ffffff]" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shyam-patidar-736b77257/", color: "hover:text-[#0077b5]" },
              { Icon: FaEnvelope, href: "mailto:shyampatidar672@gmail.com", color: "hover:text-[#ea4335]" }
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className={`text-3xl text-gray-400 transition-all duration-300 ${color} relative group`}
              >
                <Icon />
                <div className={`absolute inset-0 -z-10 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${color.replace('hover:text', 'bg')}`}></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* --- Right Side: Photo with Static Border --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
          className="relative flex justify-center items-center"
        >
          {/* Large static glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-purple-600/30 rounded-full blur-[100px] animate-pulse -z-10"></div>
          
          {/* --- Image Container --- */}
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] z-10">
              
             
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-[3rem] z-0">
              
                <div className="h-full w-full bg-[#0B1120] rounded-[calc(3rem-2px)] overflow-hidden">
                  <img 
                    src="/images/profile.png" 
                    alt="Shyam Patidar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
              
           
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -left-6 bg-[#0B1120]/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/50 shadow-2xl shadow-sky-500/10 flex items-center gap-4 z-30"
              >
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-green-500 to-emerald-400"></span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Current Status</p>
                  <p className="text-base font-bold text-white">Open to Work</p>
                </div>
              </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;