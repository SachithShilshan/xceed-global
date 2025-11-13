import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e){
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-primary">Xceed</Link>
          <p className="text-sm text-muted hidden md:block">AI • Data • BI • Automation</p>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-sm text-muted hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm text-muted hover:text-primary">About Us</Link>

          <div className="relative" ref={ref}>
            <button
              className="text-sm text-muted hover:text-primary flex items-center gap-2"
              onClick={() => setOpen(s => !s)}
              aria-expanded={open}
            >
              Services
              <span className="text-xs">{open ? '▴' : '▾'}</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.14 }}
              className={`absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-soft ring-1 ring-black/5`}
              style={{ display: open ? 'block' : 'none' }}
            >
              <div className="grid grid-cols-2 gap-4 p-5">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Core</h4>
                  <Link to="/services/ai" className="block py-1 text-muted hover:text-primary">Artificial Intelligence</Link>
                  <Link to="/services/data" className="block py-1 text-muted hover:text-primary">Data Engineering</Link>
                  <a className="block py-1 text-muted hover:text-primary" href="https://sachithshilshan.github.io/xceed/#/" target="_blank" rel="noopener noreferrer">Business Intelligence (BI)</a>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Ops & Strategy</h4>
                  <Link to="/services/automation" className="block py-1 text-muted hover:text-primary">Automation & Ops</Link>
                  <Link to="/services/research" className="block py-1 text-muted hover:text-primary">Research & Strategy</Link>
                  <Link to="/services/projects" className="block py-1 text-muted hover:text-primary">Projects & Delivery</Link>
                </div>
              </div>
              <div className="px-5 pb-4">
                <small className="text-muted">View case studies, templates and PoC guides for organizations.</small>
              </div>
            </motion.div>
          </div>

          <Link to="/products" className="text-sm text-muted hover:text-primary">Products</Link>
          <Link to="/portfolio" className="text-sm text-muted hover:text-primary">Portfolio</Link>
          <Link to="/contact" className="text-sm bg-white border px-3 py-1 rounded-lg text-muted hover:bg-primary hover:text-white transition">Contact Us</Link>
        </nav>

        {/* mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(s => !s)} aria-label="Toggle menu" className="p-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>

      {open && (
        <div className="absolute right-4 top-16 bg-white rounded-lg shadow-soft w-64 p-4">
          <Link to="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" className="block py-2" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/products" className="block py-2" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/portfolio" className="block py-2" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/contact" className="block py-2" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  )
}
