import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({ title, caption, icon }) {
  return (
    <motion.article
      whileHover={{ translateY: -6 }}
      className="bg-white rounded-xl p-6 shadow-soft"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon || '★'}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-muted mt-1">{caption}</p>
        </div>
      </div>
    </motion.article>
  )
}
