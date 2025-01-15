'use client'

import { motion } from 'framer-motion'
import { DollarSign, Globe, Lock } from 'lucide-react'

const services = [
  {
    icon: <DollarSign className="w-12 h-12 text-blue-500" />,
    title: 'Foreign Exchange',
    description: 'Competitive rates for all your foreign exchange needs.',
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-500" />,
    title: 'International Transfers',
    description: 'Fast and secure international money transfers.',
  },
  {
    icon: <Lock className="w-12 h-12 text-blue-500" />,
    title: 'Secure Investments',
    description: 'Diverse portfolio of secure international investment options.',
  },
]

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="py-20"
      id="services"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-800"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="mb-4 inline-block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 * index }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default Services

