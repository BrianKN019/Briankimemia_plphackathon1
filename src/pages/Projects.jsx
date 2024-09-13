import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart2, Database, Shield, Laptop, Cloud, Code } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

const projectsData = [
  {
    title: 'Data Analysis Using AWS QuickSight',
    description: 'Integrated advanced analytics to automate real-time data, enabling immediate access to critical insights, which drastically cut down detection times and boosted operational efficiency.',
    technologies: ['AWS QuickSight', 'Data Analysis', 'Real-time Analytics'],
    github: 'https://github.com/BrianKN019/aws-quicksight-project',
    live: 'https://aws-quicksight-demo.com',
    icon: <BarChart2 className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Website Hosting on Amazon S3',
    description: 'Created and configured S3 bucket with ACLs and Versioning and public access settings for efficient and secure static website hosting.',
    technologies: ['AWS S3', 'Web Hosting', 'Cloud Storage'],
    github: 'https://github.com/BrianKN019/s3-website-hosting',
    live: 'https://s3-hosted-website-demo.com',
    icon: <Database className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Cloud Security with AWS IAM',
    description: 'Configured IAM that helps securely control different users\' access to AWS account\'s resources, enhancing overall cloud security posture.',
    technologies: ['AWS IAM', 'Cloud Security', 'Access Management'],
    github: 'https://github.com/BrianKN019/aws-iam-security',
    live: 'https://aws-iam-demo.com',
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Digital Literacy Programme Implementation',
    description: 'Spearheaded the implementation of the Digital Literacy Programme, ensuring seamless integration of digital literacy devices into classroom activities.',
    technologies: ['EdTech', 'Digital Literacy', 'Project Management'],
    github: 'https://github.com/BrianKN019/digital-literacy-programme',
    live: 'https://digital-literacy-demo.com',
    icon: <Laptop className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'AWS Lambda Serverless API',
    description: 'Developed a scalable, serverless API using AWS Lambda and API Gateway, integrating with DynamoDB for efficient data storage and retrieval.',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless'],
    github: 'https://github.com/BrianKN019/aws-lambda-api',
    live: 'https://aws-lambda-api-demo.com',
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Machine Learning Model Deployment',
    description: 'Implemented and deployed a machine learning model using AWS SageMaker, creating an end-to-end solution for predictive analytics.',
    technologies: ['AWS SageMaker', 'Machine Learning', 'Python', 'Data Science'],
    github: 'https://github.com/BrianKN019/ml-model-deployment',
    live: 'https://ml-model-demo.com',
    icon: <Code className="w-8 h-8 text-cyan-400" />,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects &amp; Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-semibold ml-4">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;