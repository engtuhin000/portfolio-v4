import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, pct}) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-gray-300 mb-1">
      <span>{name}</span>
      <span>{pct}%</span>
    </div>
    <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
      <motion.div initial={{width:0}} animate={{width: `${pct}%`}} transition={{duration:1}} className="h-3 bg-gradient-to-r from-[var(--accent)] to-white"></motion.div>
    </div>
  </div>
)

export default function Skills(){
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl">
          <Skill name="Figma" pct={92} />
          <Skill name="Adobe Illustrator" pct={75} />
          <Skill name="React" pct={70} />
          <Skill name="Tailwind CSS" pct={82} />
        </div>
        <div className="glass p-6 rounded-xl">
          <Skill name="Adobe Photoshop" pct={88} />
          <Skill name="JavaScript" pct={60} />
          <Skill name="HTML5" pct={95} />
          <Skill name="CSS3" pct={85} />
        </div>
      </div>
    </section>
)
