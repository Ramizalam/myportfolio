import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border-l-4 border-blue-600 dark:border-blue-400 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl flex-shrink-0 self-start lg:self-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">
                    Bachelor of Technology in Information Technology
                  </h3>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                    CGPA: 8.3
                  </div>
                </div>
                
                <h4 className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-4">
                  Dr. Akhilesh Das Gupta Institute of Professional Studies
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Expected May 2026</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Web Technologies',
                      'Software Engineering',
                      'Object-Oriented Programming',
                      'Computer Networks',
                      'Operating Systems'
                    ].map((course) => (
                      <span
                        key={course}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
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

export default Education;