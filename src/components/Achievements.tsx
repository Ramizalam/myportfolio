import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Smart Delhi Ideathon 2025 Semifinalist',
      description: 'Reached semifinals among 1600+ participating teams with an innovative AI-driven CCTV and panic button system designed to enhance women\'s safety in urban environments.',
      stats: 'Top 100 out of 1600+ teams',
      highlight: 'Major Achievement'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition for innovation, problem-solving, and contribution to technology solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border-l-4 border-yellow-500 dark:border-yellow-400 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-xl flex-shrink-0">
                    <IconComponent className="text-yellow-600 dark:text-yellow-400" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">
                        {achievement.title}
                      </h3>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">
                        {achievement.highlight}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Target className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="text-gray-900 dark:text-white font-semibold">Achievement Statistics:</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-2">{achievement.stats}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Solution Highlights:</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">AI-powered surveillance system</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Emergency response integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Real-time threat detection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Scalable urban deployment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Recognition Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Active Community Member</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Regular participant in tech meetups and coding competitions</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg w-fit mx-auto mb-4">
                <Target className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Academic Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Maintaining 8.3 CGPA in B.Tech IT program</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-fit mx-auto mb-4">
                <Trophy className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Impact</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Developed solutions addressing real-world problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;