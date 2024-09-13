import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import Header from '../components/Header';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-10"></div>
      <Header />
      <div className="relative z-10">
        <main className="pt-20">
          <section className="hero min-h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
  {'<!-- Brian '}
</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  {'Kimemia '}
</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
  {'Njeri -->'}
</span>
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl mb-8 bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg font-mono"
              >
                <pre className="text-left overflow-x-auto whitespace-pre-wrap">
                  <code>
                    <span className="text-pink-400">const</span> <span className="text-cyan-400">profile</span> = {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-green-400">role:</span> <span className="text-yellow-300">"Information Science | AWS Cloud Practitioner | ICT Specialist"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-green-400">passion:</span> <span className="text-yellow-300">"Transforming digital landscapes with innovative solutions"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-green-400">expertise:</span> <span className="text-yellow-300">"Cloud computing, Educational technology, IT support"</span>
                    <br />
                    {'}'};
                  </code>
                </pre>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  Get in Touch <ArrowRight className="ml-2" />
                </Link>
                <a
                  href="/Brian_Kimemia_Njeri_CV.pdf"
                  download
                  className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  Download CV <FileText className="ml-2" />
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6"
              >
                <a href="https://github.com/BrianKN019" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/nbriankimemia019b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:briannkimemia@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                  <Mail className="w-8 h-8" />
                </a>
              </motion.div>
            </motion.div>
          </section>
        </main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-10 h-10 text-cyan-400 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
