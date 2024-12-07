'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('/api/send-email', formData);

      if (response.status === 200) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Developer Description */}
      <motion.div
        className="lg:w-1/2 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h2>
        <p className="text-white">
          Hi, I&apos;m a passionate developer specializing in web and software
          development. I create robust, user-friendly applications that solve
          real-world problems. Let&apos;s connect!
        </p>
        <p className="text-white">
          Feel free to use the contact form to reach out, and I&apos;ll get back to
          you as soon as possible.
        </p>
         {/* Social Links Section */}
       <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          <a
            href="https://linkedin.com/in/sagar-puniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/sagarpuniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaTwitter size={20} />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/sagar-puniyani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:sagarpuniyani@gmail.com"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sagarpuniyani@gmail.com', '_blank')}
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-lg font-medium transition-all duration-200 space-x-2"
          >
            <FaEnvelope size={20} />
            <span>Gmail</span>
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-black shadow-md p-6 rounded-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        {submitMessage && (
          <motion.p
            className="mt-4 text-center text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {submitMessage}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
