import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  {to: '/', label: 'Home'},
  {to: '/skills', label: 'Skills'},
  {to: '/services', label: 'Services'},
  {to: '/portfolio', label: 'Portfolio'},
  {to: '/contact', label: 'Contact'},
]

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <header className="py-4 relative z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[var(--accent)] to-white rounded-full flex items-center justify-center text-deep-navy font-bold">TU</div>
          <div className="text-sm">Tuhin UI/UX</div>
        </div>

        <nav className="nav-desktop hidden md:flex gap-4 items-center">
          {links.map(l=> (
            <NavLink key={l.to} to={l.to} className={({isActive})=> 'nav-link ' + (isActive? 'active text-white px-3' : 'text-gray-300 hover:text-white px-3')} end>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-mobile md:hidden">
          <button onClick={()=>setOpen(v=>!v)} aria-label="menu" className="p-2 bg-white/5 rounded">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      <motion.div initial={{height:0}} animate={open? {height: 'auto'}:{height:0}} transition={{type:'spring', stiffness:260, damping:30}} className="md:hidden overflow-hidden">
        <div className="px-4 pt-4 pb-6 space-y-2">
          {links.map(l=> (
            <NavLink key={l.to} to={l.to} className={({isActive})=> 'block py-2 px-3 rounded nav-link ' + (isActive? 'active text-white' : 'text-gray-300 hover:text-white')} end>
              {l.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
)
}
