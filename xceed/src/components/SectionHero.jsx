import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHero({ eyebrow, title, desc, ctaText, ctaHref, img }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {eyebrow && <p className="text-sm text-indigo-300 font-semibold mb-2">{eyebrow}</p>}
          <motion.h1 initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.45}} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {title}
          </motion.h1>
          <motion.p initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.08, duration:0.45}} className="mt-4 text-slate-300 max-w-xl">
            {desc}
          </motion.p>
          <div className="mt-6">
            <a href={ctaHref} className="inline-block bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-md font-semibold shadow-lg text-white">
              {ctaText}
            </a>
          </div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.12}} className="flex justify-center">
          <img src={img} alt="" className="w-full max-w-md rounded-xl shadow-2xl border border-white/6" />
        </motion.div>
      </div>
    </section>
  )
}
