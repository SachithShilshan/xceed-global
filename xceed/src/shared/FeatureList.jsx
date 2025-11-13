import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureList({ items=[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((it, i) => (
        <motion.div key={it.title} initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.05 * i}} className="bg-white/3 p-5 rounded-lg border border-white/6">
          <h3 className="text-lg font-semibold text-white">{it.title}</h3>
          <p className="text-slate-300 mt-2">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
