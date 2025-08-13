import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 border-l-4 border-blue-600 dark:border-blue-400 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl flex-shrink-0">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Frontend Developer</h3>
                    <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">UptoSkill</h4>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mt-2 lg:mt-0">
                    Internship
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>July 2025 – Sept 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Remote</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                        Developed a comprehensive resume builder application with intuitive drag-and-drop interface, 
                        file upload functionality, and multiple editable templates
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                        Implemented PDF download feature with high-quality formatting and shareable links 
                        for easy distribution
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                        Currently developing OCR-based auto-fill functionality to extract and populate 
                        resume details from uploaded documents
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'PDF Generation'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;