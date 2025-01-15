'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-blue-800"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        Welcome to FPI Bank
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your trusted partner for foreign portfolio investments
      </motion.p>
      <motion.div
        className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="FPI Bank services"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </motion.section>
  )
}

export default Hero

