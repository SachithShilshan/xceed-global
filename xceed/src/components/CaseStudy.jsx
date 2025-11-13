import React from 'react'
import { motion } from 'framer-motion'

export default function CaseStudy({ title, summary, impact }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-5 rounded-xl shadow-soft">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted mt-2">{summary}</p>
      <div className="mt-3">
        <span className="text-xs inline-block bg-green-50 text-green-700 px-2 py-1 rounded-md">Impact</span>
        <p className="text-sm mt-2">{impact}</p>
      </div>
    </motion.div>
  )
}
