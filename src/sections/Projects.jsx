import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Note Management Website',
      description: 'A fully responsive Todo List platform built with React, Node.js, and MongoDB. Features include user authentication, notes filtering',
      image: 'https://www.clipartbest.com/cliparts/di7/Lgd/di7Lgd4xT.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Frontend', 'Backend'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website designed and developed to showcase my work and skills. Features a clean, modern design with smooth animations and responsive layout.',
      image: 'https://wwin.vn/wp-content/uploads/2023/06/portfolio-la-gi-1.jpg',
      tags: ['React', 'Tailwind CSS', 'Frontend'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Gym Suggestion Dashboard',
      description: 'Built a responsive and dynamic fitness app using React.js, enabling users to generate personalized workout plans.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a94a23160307447.63b27b4bb6f94.jpg',
      tags: ['JavaScript', 'React', 'Frontend'],
      githubUrl: 'https://github.com/prisha27/FlexFlow',
      liveUrl: 'https://prisha27.github.io/FlexFlow/',
    },
  ];


  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Here are some projects I've worked on recently
          </p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Single 'All' button if you want to keep it */}
        <div className="flex justify-center mb-12">
          <button
            className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium cursor-default"
          >
            All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Projects;
