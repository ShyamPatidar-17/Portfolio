import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const links = ['Home' , 'Education', 'Skills' , 'Projects' , 'Experience', 'Contact'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg-card)]/90 backdrop-blur-sm z-50 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
         
       <h1 className="text-2xl font-bold cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="flex items-center gap-2 group">
              {/* Logo Box */}
              <div className="p-2 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-lg text-white group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300">
                <span className="font-bold font-mono">SP</span>
              </div>
              {/* Text Name - Adapts to Light/Dark Mode */}
              <span className="text-xl font-bold text-[var(--text-main)] transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500">
                Shyam Patidar
              </span>
            </Link>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-sm font-medium text-[var(--text-secondary)]">
              {links.map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    className="cursor-pointer hover:text-sky-500 transition-colors"
                    activeClass="text-sky-500 font-bold"
                    spy={true}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

          

            <a href="/resume.pdf" download="Shyam_Patidar_Resume.pdf" className="flex items-center gap-2 px-4 py-2 border border-sky-500 text-sky-500 rounded-full text-sm font-bold hover:bg-sky-500 hover:text-white transition-all">
              Resume <FaDownload className="text-xs" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-4">
          
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--text-main)] text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-4 text-[var(--text-secondary)]">
              {links.map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-lg hover:text-sky-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" download className="block py-2 text-sky-500 font-bold">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;