import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

const educationData = [
  {
    year: '2016-2021',
    degree: 'BSc. Information Science',
    institution: 'Technical University of Kenya',
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    year: '2024',
    degree: 'AWS Certified Cloud Practitioner',
    institution: 'Ajira E-mobilis Training Institute',
    icon: <Award className="w-8 h-8" />,
    link: 'https://www.credly.com/badges/becf35b1-8d56-4957-ba65-f686d7b05aff/public_url'
  },
  {
    year: 'Ongoing',
    degree: 'Certificate in Software Development',
    institution: 'PowerLearnProject(PLP) Academy',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    year: '2016',
    degree: 'Computer Packages',
    institution: 'WangPoint Technologies',
    icon: <BookOpen className="w-8 h-8" />,
  },
];

const professionalTrainings = [
  { 
    name: 'AWS Certified Cloud Practitioner', 
    institution: 'Ajira E-mobilis Training Institute',
    year: '2024',
    link: 'https://www.credly.com/badges/becf35b1-8d56-4957-ba65-f686d7b05aff/public_url'
  },
  { name: 'Introduction to Cybersecurity', institution: 'Cisco Networking Academy', link: 'https://www.credly.com/badges/bc87036f-6d7a-4786-8676-594c4a521e65/public_url' },
  { name: 'Introduction to Data Science', institution: 'Cisco Networking Academy', link: 'https://www.credly.com/badges/5ddf7f14-c199-40ae-9d05-adb4c432dfe9/public_url' },
  { name: 'Cybersecurity Essentials', institution: 'Cisco Networking Academy', link: 'https://www.credly.com/badges/0aa89658-ed81-41ca-8635-550d7fb08cd1/public_url' },
  { name: 'Advanced Microsoft Excel and Statistics for Business Analytics', institution: 'Udemy' },
  { name: 'AI Career Essentials', institution: 'ALX Africa' },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Education & Training
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-5/6 relative ${
                  index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                } hover:shadow-cyan-500/50 transition-all duration-300 group`}
              >
                <div className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  {edu.icon}
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 mt-2 flex items-center"
                    >
                      Verify <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-800 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Trainings</h3>
          <ul className="space-y-4">
            {professionalTrainings.map((training, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all duration-300 group"
              >
                <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                <div>
                  <p className="font-semibold">{training.name}</p>
                  <p className="text-sm text-gray-400">{training.institution}</p>
                  {training.year && <p className="text-sm text-gray-400">{training.year}</p>}
                </div>
                {training.link && (
                  <motion.a 
                    href={training.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-auto text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;