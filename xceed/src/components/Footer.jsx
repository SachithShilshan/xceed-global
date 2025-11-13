import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-primary">Xceed</h3>
          <p className="text-sm text-muted">Applying AI, Data & Automation to business outcomes.</p>
        </div>

        <div className="flex gap-10">
          <div>
            <h4 className="text-sm font-semibold">Solutions</h4>
            <ul className="text-sm text-muted space-y-2 mt-2">
              <li><a href="#/">Home</a></li>
              <li><a href="#/services/ai">AI</a></li>
              <li><a href="#/services/bi" target="_blank" rel="noopener noreferrer">BI Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="text-sm text-muted mt-2">hello@xceed.example</p>
            <p className="text-sm text-muted">+94 7X XXX XXXX</p>
          </div>
        </div>

        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Xceed • Built with care
        </div>
      </div>
    </footer>
  )
}
