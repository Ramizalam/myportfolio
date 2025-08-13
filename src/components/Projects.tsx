import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'MedRemind',
      description: 'An intelligent healthcare management system that uses OCR technology to digitize prescriptions and provides automated medication reminders.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'OCR API', 'OpenFDA API', 'SMS/WhatsApp Integration'],
      liveLink: 'https://med-remind-red.vercel.app/',
      githubLink: 'https://github.com/Ramizalam/MedRemind',
      features: [
        'OCR-based prescription upload and processing',
        'Automated SMS and WhatsApp reminders',
        'Drug information integration via OpenFDA API',
        'User-friendly dashboard for medication tracking'
      ]
    },
    {
      title: 'CommunityWatch',
      description: 'A citizen-centric platform enabling local communities to report issues, track resolution status, and engage with local administration.',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Google Maps API', 'Real-time Updates'],
      liveLink: 'https://commuity-issue.vercel.app/',
      githubLink: 'https://github.com/Ramizalam/CommuityIssue',
      features: [
        'Interactive map for issue reporting',
        'Real-time status tracking system',
        'Admin dashboard for issue management',
        'Community engagement and voting features'
      ]
    },
    {
      title: 'MovieMania',
      description: 'A dynamic movie discovery platform with advanced search capabilities and trending movie visualizations.',
      technologies: ['React.js', 'Movie Database API', 'Chart.js', 'Tailwind CSS'],
      liveLink: 'https://movie-mania-indol-one.vercel.app/',
      githubLink: 'https://github.com/Ramizalam/MovieMania',
      features: [
        'Advanced movie search and filtering',
        'Trending movies with visual charts',
        'Detailed movie information pages',
        'Responsive design for all devices'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
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