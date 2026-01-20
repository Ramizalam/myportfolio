import React from 'react';
import { Download, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/MylatestResume2025.pdf" // must be inside public folder
    link.download = 'Ramiz-Alam-Resume.pdf';
    link.click();
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-4xl sm:text-5xl font-bold text-white">RA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900  dark:text-white mb-4 leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ramiz Alam</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-900 dark:text-gray-100 mb-8 max-w-3xl mx-auto">
            FullStack Developer | Problem Solver | Tech Enthusiast
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            B.Tech IT student passionate about building impactful web applications 
            and solving real-world problems through innovative technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handleDownload} className="group bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Download size={20} />
              Download Resume
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
