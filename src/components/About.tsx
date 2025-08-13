import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a B.Tech IT student at Dr. Akhilesh Das Gupta Institute of Professional Studies (CGPA: 8.3) passionate about building innovative web applications that solve real-world problems.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Skilled in Java, Python, JavaScript, React.js, Node.js, and MongoDB, 
              I’ve developed full-stack projects from healthcare solutions to community platforms,
               turning complex challenges into simple, user-friendly solutions.

            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, organizing hackathons,
              or contributing to open-source projects. I believe in continuous learning and sharing
              knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experienced in building end-to-end web applications with modern technologies
                  and best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Lightbulb className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about identifying challenges and developing innovative solutions
                  through creative thinking and technical expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Users className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Leadership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Active organizer and leader in hackathons and tech communities,
                  fostering collaboration and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;