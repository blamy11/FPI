'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-blue-600"
        >
          FPI Bank
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#cards">Cards</NavItem>
          <NavItem href="#services">Services</NavItem>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-2"
        >
          <NavItem href="#home" mobile>Home</NavItem>
          <NavItem href="#cards" mobile>Cards</NavItem>
          <NavItem href="#services" mobile>Services</NavItem>
        </motion.div>
      )}
    </motion.header>
  )
}

const NavItem = ({ href, children, mobile = false }) => (
  <motion.a
    href={href}
    className={`block ${mobile ? 'py-2 px-4' : ''} text-gray-600 hover:text-blue-600`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

export default Header

