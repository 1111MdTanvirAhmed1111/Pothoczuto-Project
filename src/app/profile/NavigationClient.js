'use client'

import { motion } from 'framer-motion'

export default function NavigationClient() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute inset-0 pointer-events-none"
    />
  )
}