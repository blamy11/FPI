'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-blue-900 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">FPI Bank</h3>
            <p className="text-blue-300">Your trusted partner for foreign portfolio investments</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#cards" className="text-blue-300 hover:text-white transition-colors">Cards</a></li>
              <li><a href="#services" className="text-blue-300 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-300">Email: info@fpibank.com</p>
            <p className="text-blue-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-400">
          <p>&copy; 2023 FPI Bank. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

