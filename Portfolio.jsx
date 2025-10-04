import React from 'react'
import { motion } from 'framer-motion'

const unsplash = [
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80'
]

const items = unsplash.map((u,i)=>({id:i, title:`UI/UX Project ${i+1}`, img:u}))

const Card = ({it}) => (
  <motion.div whileHover={{ scale:1.03 }} className="rounded-lg overflow-hidden shadow-lg cursor-pointer group">
    <img src={it.img} alt={it.title} className="w-full h-48 object-cover group-hover:scale-105 transform transition"/>
    <div className="p-3 bg-white/3">
      <div className="font-semibold">{it.title}</div>
      <div className="text-sm text-gray-300">UI/UX focused demo image</div>
    </div>
  </motion.div>
)

export default function Portfolio(){
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(i => <Card key={i.id} it={i} />)}
      </div>
    </section>
)
