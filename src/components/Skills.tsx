import React from 'react';
import { Code2, Database, Globe, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      title: 'Technologies & Frameworks',
      icon: Globe,
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'npm/yarn']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages I use to build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mx-auto mb-6">
                  <IconComponent className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="bg-white dark:bg-gray-900 rounded-lg p-3 text-center shadow-sm">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Web Design',
              'API Integration',
              'Version Control (Git)',
              'Agile Development',
              'Problem Solving',
              'Team Collaboration',
              'UI/UX Design Principles',
              'Performance Optimization',
              'Testing & Debugging',
              'Documentation'
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;