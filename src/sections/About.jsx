import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
  <img 
    src="https://live.staticflickr.com/65535/54273563612_f3183077b2_o.jpg" 
    alt="My photo" 
    className="w-full h-full object-cover"
  />
</div>

            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-teal-400 rounded-xl hidden lg:block"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Software Developer & Cybersecurity Enthusiast 
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
             I am currently pursuing a B.Tech in Computer Science at Manipal Institute of Technology, where I have developed a strong foundation in data analysis, full-stack development, and cybersecurity. My experience includes an internship at Tata Steel, where I completed a data-driven project on diagnostic tool development for coke quality improvement, and a full stack developer internship at Santaan, building secure hospital management web applications with real-time features and robust authentication. I have demonstrated my technical skills and problem-solving abilities by securing second place in the ACM-W Hour of Code competitive programming contest and winning the BugBase e-bhadra CTF in cybersecurity. As Vice President of the Manipal Information Security Team and Membership Chair at ACM Manipal, I have led large teams and organized events to promote cyber awareness. 
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
             My technical toolkit spans C++, Java, SQL, React, Express, and MySQL, and I am committed to continuous learning through certification courses in Python and cybersecurity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Manipal, Karnataka</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Email</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">prishasinghxic16.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Education</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">B.Tech Computer Science</p>
              </div>
              
            </div>
            
            <a 
  href="/resume.pdf" 
  download 
  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-200 shadow-lg hover:shadow-blue-500/20"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
