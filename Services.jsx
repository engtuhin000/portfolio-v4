import React from 'react'
import { motion } from 'framer-motion'

const Card = ({title, children}) => (
  <motion.div whileHover={{ y: -8 }} className="p-6 rounded-xl shadow-lg glass">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-300 text-sm">{children}</p>
    <div className="mt-4">
      <button className="px-4 py-2 bg-[var(--accent)] text-deep-navy rounded-md">Hire Me</button>
    </div>
  </motion.div>
)

export default function Services(){
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Web & UI Design">Responsive interfaces, landing pages, UI systems.</Card>
        <Card title="UX Research & Prototyping">User flows, usability testing, prototypes.</Card>
        <Card title="Branding & Graphics">Logos, social assets, brand kits.</Card>
      </div>
    </section>
)
