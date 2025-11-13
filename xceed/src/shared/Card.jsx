import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ title, desc, href, index=0 }) {
  return (
    <motion.article
      initial={{y:12, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay: 0.05 * index}}
      className="bg-white/3 border border-white/6 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-300 mt-2">{desc}</p>
      <div className="mt-4">
        <a href={href} className="inline-block text-indigo-300 hover:text-indigo-200 font-medium">Open →</a>
      </div>
    </motion.article>
  )
}
