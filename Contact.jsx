import React from 'react'

export default function Contact(){
  return (
    <section className="py-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="glass p-6 rounded-xl text-center">
        <p className="text-gray-300 mb-4">You can reach me via email:</p>
        <a href="mailto:eng.tuhin000@gmail.com" className="inline-block px-6 py-3 bg-[var(--accent)] text-deep-navy rounded-md font-semibold">Send Email</a>
        <p className="mt-3 text-sm text-gray-400">Or connect via LinkedIn / social links (add links later)</p>
      </div>
    </section>
)
