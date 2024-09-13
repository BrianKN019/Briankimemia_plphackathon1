import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock, Monitor, Terminal, Globe, Cpu, Zap, Smartphone, Server, Wifi, PenTool, Layers, GitBranch, FileSpreadsheet, Box } from 'lucide-react';

const skillsData = [
  { name: 'Cloud Computing (AWS)', level: 85, icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Web Development', level: 80, icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Data Analysis & Reporting', level: 85, icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'IT Technical Support', level: 90, icon: <Monitor className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Cybersecurity', level: 75, icon: <Lock className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Database Management', level: 80, icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Python Programming', level: 75, icon: <Code className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Network Administration', level: 70, icon: <Wifi className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'DevOps Practices', level: 65, icon: <Server className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Mobile App Development', level: 60, icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'UI/UX Design', level: 70, icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Microservices Architecture', level: 65, icon: <Layers className="w-6 h-6 md:w-8 md:h-8" /> },
];

const softSkills = [
  'Exemplary Communication',
  'Decision Making',
  'Problem Solving',
  'Client-Centric Approach',
  'Versatility',
  'Innovative Thinking',
  'Critical Thinking',
  'Teamwork',
  'Adaptability',
  'Time Management',
  'Leadership',
  'Emotional Intelligence',
];

const softwares = [
  { name: 'Python', icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'JavaScript', icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'HTML/CSS', icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'SQL', icon: <Database className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Git', icon: <GitBranch className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'AWS Services', icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Docker', icon: <Server className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Dart', icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Flutter', icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'React', icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Node.js', icon: <Server className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'MongoDB', icon: <Database className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Kubernetes', icon: <Layers className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'TensorFlow', icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'Terraform', icon: <Box className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: 'MS Excel', icon: <FileSpreadsheet className="w-5 h-5 md:w-6 md:h-6" /> },
];

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0fa';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg relative overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-lg md:text-xl font-semibold ml-4">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <motion.div
                    className="bg-cyan-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
                <p className="text-right">{skill.level}%</p>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:w-20 group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gray-800 p-6 md:p-8 rounded-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 group"
              >
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                <span className="text-sm group-hover:text-cyan-400 transition-colors duration-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-gray-800 p-6 md:p-8 rounded-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Software & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {softwares.map((software, index) => (
              <motion.div
                key={software.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-gray-700 p-3 rounded-lg text-center hover:bg-gray-600 hover:shadow-md hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  {software.icon}
                  <span className="text-xs md:text-sm font-medium mt-2 group-hover:text-cyan-400 transition-colors duration-300">{software.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;