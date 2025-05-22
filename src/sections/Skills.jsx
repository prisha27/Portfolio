import React from 'react';
import { Code, BookOpen, Database, Award } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-gray-700 dark:text-gray-300">A quick overview of my technical background</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
          
          {/* Programming Languages */}
          <div>
            <div className="flex items-center mb-3 text-blue-500">
              <Code className="mr-2" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>C++</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
          </div>

          {/* Coursework */}
          <div>
            <div className="flex items-center mb-3 text-blue-500">
              <BookOpen className="mr-2" />
              <h3 className="text-xl font-semibold">Relevant Coursework</h3>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Object-Oriented Programming (OOPs)</li>
              <li>Database Management System (DBMS)</li>
              <li>Operating System (OS)</li>
              <li>Software Design Technology (UML Modeling)</li>
            </ul>
          </div>

          {/* Libraries & Databases */}
          <div>
            <div className="flex items-center mb-3 text-blue-500">
              <Database className="mr-2" />
              <h3 className="text-xl font-semibold">Libraries & Databases</h3>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>React</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-3 text-blue-500">
              <Award className="mr-2" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Google: Crash Course on Python</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
