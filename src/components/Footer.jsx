import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Brian Kimemia Njeri</h3>
            <p className="text-gray-300">Information Science | AWS Cloud Practitioner | ICT Specialist</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-pink-400 transition-colors duration-300">About</Link></li>
                <li><Link to="/skills" className="hover:text-purple-400 transition-colors duration-300">Skills</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link to="/education" className="hover:text-blue-400 transition-colors duration-300">Education</Link></li>
                <li><Link to="/projects" className="hover:text-green-400 transition-colors duration-300">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/BrianKN019" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nbriankimemia019b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:briannkimemia@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {currentYear} Brian Kimemia Njeri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;