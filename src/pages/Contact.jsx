import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setButtonText('Sending...');
    const formspreeEndpoint = 'https://formspree.io/f/mzbnqjkn';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setButtonText('Sent!');
        toast.success('Message sent successfully!');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setButtonText('Error!');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setButtonText('Send Message'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-50 animate-pulse"></div>
      <div className="absolute inset-x-0 top-0 h-64 overflow-hidden">
        <MatrixRain />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Contact Information</h3>
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <p className="group-hover:text-cyan-400 transition-colors duration-300 text-xl">+254 704 717 231</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <p className="group-hover:text-cyan-400 transition-colors duration-300 text-xl">briannkimemia@gmail.com</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <p className="group-hover:text-cyan-400 transition-colors duration-300 text-xl">Nairobi, Kenya</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <a href="https://github.com/BrianKN019" target="_blank" rel="noopener noreferrer" className="group-hover:text-cyan-400 transition-colors duration-300 text-xl">GitHub Profile</a>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <a href="https://www.linkedin.com/in/nbriankimemia019b/" target="_blank" rel="noopener noreferrer" className="group-hover:text-cyan-400 transition-colors duration-300 text-xl">LinkedIn Profile</a>
            </motion.div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-cyan-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 hover:border-cyan-400"
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-cyan-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 hover:border-cyan-400"
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-cyan-400">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 hover:border-cyan-400"
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center group ${
                isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
              }`}
            >
              <span className="mr-2">{buttonText}</span>
              <Send className={`w-5 h-5 ${isLoading ? 'animate-spin' : 'group-hover:translate-x-1 transition-transform duration-300'}`} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default Contact;