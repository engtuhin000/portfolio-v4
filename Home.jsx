import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div className="space-y-4">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-bold leading-tight">
          Hey! I'm <span style={{color:'var(--accent)'}}>Mehedi Hasan Tuhin</span>
        </motion.h1>
        <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="text-gray-300 max-w-xl">
          iOS UI/UX Designer — I design beautiful, user-friendly interfaces and prototypes.
        </motion.p>
        <div className="flex gap-3 mt-4">
          <a href="/resume.pdf" className="px-4 py-2 bg-[var(--accent)] rounded-md text-deep-navy font-semibold shadow hover:scale-105 transform transition">Download CV</a>
          <a href="/portfolio" className="px-4 py-2 border border-[var(--accent)] rounded-md text-[var(--accent)] hover:bg-[var(--accent)]/10 transition">View Portfolio</a>
        </div>
      </div>
      <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.25}} className="flex justify-center">
        <div className="relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-[var(--accent)]/40 shadow-2xl">
            <img src="/hero1.png" alt="Tuhin" className="object-cover w-full h-full"/>
          </div>
          <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full border-4 border-[var(--accent)]/60 shimmer"></div>
        </div>
      </motion.div>
    </section>
