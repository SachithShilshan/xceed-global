// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-700 flex items-center justify-center text-white font-bold">X</div>
          <div>
            <div className="font-semibold">XCEED</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">AI • Data • Automation</div>
          </div>
        </div>

        <nav className="flex gap-4">
          <Link to="/about" className="text-sm hover:underline">About</Link>
          <Link to="/services" className="text-sm hover:underline">Services</Link>
          <Link to="/products" className="text-sm hover:underline">Products</Link>
          <Link to="/portfolio" className="text-sm hover:underline">Portfolio</Link>
          <Link to="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/xceed1/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a href="https://www.facebook.com/share/1FzhLDGVa8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Facebook</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">YouTube</a>
          <a href="mailto:hello-xceed@outlook.com" className="text-sm text-slate-600 dark:text-slate-300 underline">Email</a>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
          <div>© {new Date().getFullYear()} XCEED — Built by Shilshan B.</div>
          <div className="mt-1">Specialist in BI, Data & AI — <a href="https://www.linkedin.com/in/sachith-shilshan/" target="_blank" rel="noopener noreferrer" className="underline">Connect</a></div>
        </div>
      </div>
    </footer>
  );
}
