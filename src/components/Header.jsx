import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Skills', to: '/skills' },
    { title: 'Education', to: '/education' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <Link to="/" className="text-2xl font-bold">
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                B
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
              >
                K
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
              >
                N
              </motion.span>
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>
      </nav>
      <motion.div
        className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-95"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;