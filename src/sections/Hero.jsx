import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 500, 0);
        const translateY = scrollY * 0.3;
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <span className="px-6 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              Available for Work
            </span>
          </div>

          <h1
            ref={textRef}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight transition-colors duration-300"
          >
            <span className="block mb-4 text-2xl sm:text-3xl text-gray-600 dark:text-gray-300">
              Hello, I'm
            </span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Prisha Singh
              </span>
              <span className="absolute bottom-0 left-0 w-full h-4 bg-blue-400/20 dark:bg-blue-500/20 -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-300">
           
            <span className="font-semibold relative">
              <span className="absolute bottom-0 left-0 w-full h-3 bg-teal-300/30 dark:bg-teal-500/30 -z-10 transform -rotate-1"></span>
            </span>{' '}
            A motivated and adaptable software engineer with a strong foundation in software development, problem solving, and emerging technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 flex items-center gap-3"
            >
              View Projects
              <ArrowDownCircle size={24} className="group-hover:animate-bounce" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
