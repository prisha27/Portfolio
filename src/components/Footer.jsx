import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </a>
            
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/prisha27" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prisha-singh-083439255?" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
             <a href="https://leetcode.com/u/insaan_08/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
  <SiLeetcode size={20} />
</a>

          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
