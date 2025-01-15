'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import CardApplication from './components/CardApplication'
import Services from './components/Services'
import Footer from './components/Footer'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800"
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <CardApplication />
        <Services />
      </main>
      <Footer />
    </motion.div>
  )
}

