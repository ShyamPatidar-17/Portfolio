import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t relative z-10 transition-colors duration-300
                       bg-white border-gray-200
                       dark:bg-slate-900 dark:border-slate-800">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
       
        <p className="flex items-center justify-center gap-1 font-medium text-lg text-gray-700 dark:text-gray-300">
          Made with <FaHeart className="text-red-500 animate-pulse mx-1" /> by Shyam Patidar
        </p>
       
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;