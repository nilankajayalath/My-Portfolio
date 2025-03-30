import React from 'react';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
        

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <SpotlightCard 
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(100, 121, 167, 0.15)"
            >
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  BSc(Hon's) Software Engineering
                </h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Saegis Campus - Nugegoda</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2022 - present</p>
            
                <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Relevant Coursework:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Database Management System</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Data Structures and Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Operating Systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Computer Networks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>MVC Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Frameworks and Libraries</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <SpotlightCard 
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(70, 199, 255, 0.15)"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                  <img 
      src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" 
      alt="Postman API Logo" 
      className="w-10 h-10"
    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Postman API</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://badgr.com/public/assertions/C9CVZalzQSew2KvKunO5-Q?identity__email=nilankajayalath10@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        Postman Certificate <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                  <img 
                        src="/images/uom.png" 
                          alt="University of Moratuwa Logo" 
                              className="w-10 h-10"
                           />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Frontend web development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://open.uom.lk/lms/mod/customcert/view.php?id=839&downloadown=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                       University of Moratuwa - DP Education Certificate<span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                  <img 
                        src="/images/uom.png" 
                          alt="University of Moratuwa Logo" 
                              className="w-10 h-10"
                           />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Server-side Web Programming</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://open.uom.lk/lms/mod/customcert/view.php?id=1025&downloadown=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                       University of Moratuwa - DP Education Certificate<span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;