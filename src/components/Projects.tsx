import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'Tours & Travels Booking App',
    description: 'This has been a great learning experience as I continue refining my skills in full-stack development.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'Express.js','MongoDB'],
    achievements: [
      'Simple and user-friendly interface for effortless navigation.',
      'Still leveraging RESTful API integration for fast, efficient back-end communication.',
      'Booking of any tour for a particular date.',
    ],  //https://demo-source.imgix.net/house.jpg
    links: {
      // Updated links with the correct URLs
      github: 'https://github.com/nilankajayalath/MERN-Travel-and-Tour-Booking-website',
      live: '',
    },
    spotlightColor: 'rgba(26, 171, 255, 0.2)', // Primary color with opacity
  },
  {
    title: 'Real Time Chat App',
    description: 'A real-time chat app built this project was an incredible learning experience.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800',
    techStack: ['React','TailwindCSS', 'Daisy UI', 'Node.js', 'Express.js','Socket.io','MongoDB'],
    achievements: [
      'Authentication & Authorization with JWT',
      'Real-time messaging with Socket.io',
      'Global state management with Zustand',
    ],
    links: {
      // Updated links with the correct URLs
      github: 'https://github.com/nilankajayalath/MERN-Chat-App',
      live: '',
    },
    spotlightColor: 'rgba(100, 121, 167, 0.2)', // Secondary color with opacity
  },
  {
    title: 'Real Estate Website',
    description: 'This project focuses on creating a seamless online experience for buyers, sellers, and renters alike.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Swiper.js', 'React hooks', 'modern CSS','framer motion'],
    achievements: [
      'Custom design tailored to the real estate industry.',
      'Fully responsive for smooth browsing on any device.',
      'Detailed property listings, search functionality, and easy-to-use contact options.',
    ],
    links: {
      // Updated links with the correct URLs
      github: 'https://github.com/nilankajayalath/Real_Estate_Website',
      live: 'https://real-estate-web-werm.pages.dev/',
    },
    spotlightColor: 'rgba(70, 199, 255, 0.2)', // Different primary shade with opacity
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Showcasing my best work and technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <SpotlightCard 
                className="h-full w-full bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 flex flex-col hover:shadow-xl transition-shadow duration-300" 
                spotlightColor={project.spotlightColor}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/16x9?text=Project+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-2 rounded-full transform scale-75 hover:scale-100 transition-all duration-200"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 mt-1 mr-1.5 bg-primary-600 dark:bg-primary-400 rounded-full flex-shrink-0"></span>
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-6 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
        {/* View more projects button */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/nilankajayalath?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 font-medium hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;