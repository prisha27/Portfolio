import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 500, 0);
        const translateY = scrollY * 0.2;
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 transition-colors duration-500"
    >
      {/* Large background blobs */}
      <div className="absolute top-16 left-12 w-64 h-64 bg-blue-700 rounded-full opacity-20 filter blur-3xl animate-slow-blob"></div>
      <div className="absolute bottom-20 right-24 w-80 h-80 bg-purple-700 rounded-full opacity-15 filter blur-4xl animate-slow-blob-delay"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-700 rounded-full opacity-10 filter blur-3xl animate-slow-blob-slower -translate-x-1/2 -translate-y-1/2"></div>

      {/* Left floating small shapes */}
      <div className="absolute left-6 top-1/4 w-6 h-6 rounded-full bg-purple-600 opacity-30 filter blur-md animate-float-slow"></div>
      <div className="absolute left-10 top-1/3 w-8 h-8 rounded-lg bg-blue-600 opacity-25 filter blur-md animate-float-slower delay-2000"></div>
      <div className="absolute left-4 top-2/3 w-5 h-5 rounded-full bg-teal-600 opacity-20 filter blur-md animate-float-slow delay-1000"></div>
      <div className="absolute left-16 top-3/4 w-10 h-10 rounded-full bg-purple-500 opacity-20 filter blur-lg animate-float-slow delay-1200"></div>
      <div className="absolute left-20 top-1/6 w-4 h-4 rounded-lg bg-blue-500 opacity-15 filter blur-md animate-float-slower delay-800"></div>
      {/* More left elements */}
      <div className="absolute left-12 top-1/5 w-3 h-3 rounded-full bg-teal-400 opacity-20 filter blur-sm animate-float-slow delay-700"></div>
      <div className="absolute left-8 top-3/5 w-7 h-7 rounded-lg bg-purple-400 opacity-25 filter blur-sm animate-float-slower delay-1300"></div>
      <div className="absolute left-24 top-4/5 w-5 h-5 rounded-full bg-blue-400 opacity-15 filter blur-md animate-float-slow delay-900"></div>

      {/* Right floating small shapes */}
      <div className="absolute right-6 top-1/4 w-6 h-6 rounded-full bg-purple-600 opacity-30 filter blur-md animate-float-slow delay-1500"></div>
      <div className="absolute right-10 top-1/3 w-8 h-8 rounded-lg bg-blue-600 opacity-25 filter blur-md animate-float-slower"></div>
      <div className="absolute right-4 top-2/3 w-5 h-5 rounded-full bg-teal-600 opacity-20 filter blur-md animate-float-slow delay-500"></div>
      <div className="absolute right-16 top-3/4 w-10 h-10 rounded-full bg-purple-500 opacity-20 filter blur-lg animate-float-slow delay-700"></div>
      <div className="absolute right-20 top-1/6 w-4 h-4 rounded-lg bg-blue-500 opacity-15 filter blur-md animate-float-slower delay-1000"></div>
      {/* More right elements */}
      <div className="absolute right-12 top-1/5 w-3 h-3 rounded-full bg-teal-400 opacity-20 filter blur-sm animate-float-slow delay-1000"></div>
      <div className="absolute right-8 top-3/5 w-7 h-7 rounded-lg bg-purple-400 opacity-25 filter blur-sm animate-float-slower delay-1200"></div>
      <div className="absolute right-24 top-4/5 w-5 h-5 rounded-full bg-blue-400 opacity-15 filter blur-md animate-float-slow delay-1100"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <span className="px-6 py-2 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full backdrop-blur-sm">
              Available for Work
            </span>
          </div>

          <h1
            ref={textRef}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 mb-8 tracking-tight transition-colors duration-300"
          >
            <span className="block mb-4 text-2xl sm:text-3xl text-gray-400">
              Hello, I'm
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Prisha Singh
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
            A motivated and adaptable software engineer with a strong foundation in software development, problem solving, and emerging technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-medium shadow-md transition-transform duration-300 transform hover:-translate-y-1"
            >
              View Projects
              <ArrowDownCircle size={24} className="ml-3 group-hover:animate-bounce" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowBlob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(20px, -10px) scale(1.05);
            opacity: 0.25;
          }
        }
        @keyframes slowBlobDelay {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translate(-15px, 15px) scale(1.03);
            opacity: 0.2;
          }
        }
        @keyframes slowBlobSlower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(10px, 10px) scale(1.02);
            opacity: 0.12;
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatSlower {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-slow-blob {
          animation: slowBlob 15s ease-in-out infinite;
        }
        .animate-slow-blob-delay {
          animation: slowBlobDelay 18s ease-in-out infinite;
        }
        .animate-slow-blob-slower {
          animation: slowBlobSlower 22s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 8s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1100 {
          animation-delay: 1.1s;
        }
        .delay-1200 {
          animation-delay: 1.2s;
        }
        .delay-1300 {
          animation-delay: 1.3s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
