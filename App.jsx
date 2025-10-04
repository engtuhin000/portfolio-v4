import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen relative z-0">
      <Cursor />
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-6 relative z-10">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <footer className="text-center text-sm text-gray-400 py-8 relative z-10">© {new Date().getFullYear()} Mehedi Hasan Tuhin</footer>
    </div>
  )
}
