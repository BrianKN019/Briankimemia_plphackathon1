import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

const About = () => {
  const experiences = [
    {
      year: '2023 - 2024',
      title: 'Information Communication Technology Intern',
      company: 'Ministry of Education',
      description: 'Supported the development, innovation, and integration of ICT into teaching, learning, and assessment for the Digital Literacy Programme.',
      achievements: [
        'Spearheaded the implementation of the Digital Literacy Programme with a 95% adoption rate.',
        'Advocated for safe and ethical use of technology in learning.',
        'Provided comprehensive classroom support and training for teachers, increasing confidence by 90%.',
        'Pioneered innovative solutions, increasing student engagement by 20%.',
        'Offered first-line support and maintenance for ICT services.'
      ]
    },
    {
      year: '2022',
      title: 'Intern',
      company: 'Kenya Revenue Authority - Kenya School of Revenue Administration',
      description: 'Managed student inquiries and examination processes.',
      achievements: [
        'Resolved 95% of student inquiries within 24 hours.',
        'Contributed to record increase in graduation rates.',
        'Improved data accuracy in examination records by 40%.',
        'Reduced result analysis processing time by 40%.'
      ]
    },
    {
      year: '2021',
      title: 'Attachment',
      company: 'Kenya Revenue Authority - Knowledge Management Unit',
      description: 'Managed knowledge capture tools and SLA monthly reports.',
      achievements: [
        'Achieved 90% response rate for knowledge management sessions.',
        'Ensured 100% completion rate for knowledge capture tools and reports.',
        'Increased accessibility of knowledge resources by 30%.',
        'Improved user engagement by 20% through enhanced resource presentation.'
      ]
    }
  ];

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
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-lg mb-6">
            Results-driven professional with 4+ years in examination administration, ICT support, and AWS Cloud Solutions. 
            Expertise in securing examination processes, delivering exceptional stakeholder service, and developing knowledge 
            management strategies. AWS Certified Cloud Practitioner with strong skills in documentation, content creation, 
            and digital learning innovation. Adept in classroom support, training, and maintaining ICT services with a focus 
            on continuous improvement and professional development.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Key Strengths</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Digital Literacy Programme implementation</li>
            <li>Classroom support and teacher training</li>
            <li>Innovative digital learning solutions</li>
            <li>ICT services maintenance and support</li>
            <li>Knowledge management and documentation</li>
            <li>AWS Cloud Solutions</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Interests</h3>
          <ul className="list-disc list-inside">
            <li>Writing on GitHub and Joomla content management system</li>
            <li>Learning new skills in Business Intelligence, Programming, and Research</li>
            <li>Travelling</li>
            <li>Volunteering (Jomo Kenyata Foundation's Elimu Scholarship Selection Process, ESR Census)</li>
          </ul>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`bg-gray-800 p-6 rounded-lg shadow-lg w-5/6 relative ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                } hover:shadow-cyan-500/50 transition-shadow duration-300`}
              >
                <div className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <Award className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="text-cyan-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-2">{exp.year}</p>
                  <p className="text-sm text-center mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;