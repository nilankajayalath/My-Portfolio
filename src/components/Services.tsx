import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Search, Bug, Zap, Shield } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'FullStack Website Deisgn & Development',
    description: 'specializing in web development and optimization. I design and develop fully functional websites using MongoDB, Express.js, React.js, and Node.js, ensuring high performance and user-friendly experiences.',
    spotlightColor: 'rgba(26, 171, 255, 0.15)'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Fully Responsive & Mobile-Friendly Layouts',
    description: 'Fully responsive and mobile-friendly web design. I build optimized, high-performance websites.',
    spotlightColor: 'rgba(100, 121, 167, 0.15)'
  },

  {
    icon: <Bug className="w-6 h-6" />,
    title: 'Website Maintenance & Bug Fixes',
    description: 'I ensure smooth performance, troubleshoot issues, and optimize websites using MongoDB, Express.js, React.js, and Node.js.',
    spotlightColor: 'rgba(100, 121, 167, 0.15)'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Web Development & Optimization</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I create fast, responsive, and user-friendly,Full Stack websites using modern technologies. Whether you need a business
           website, portfolio, blog, or landing page, I ensure top-notch performance and smooth functionality with SEO-friendly optimizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard 
                className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                spotlightColor={service.spotlightColor}
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;