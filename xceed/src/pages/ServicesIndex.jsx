import React from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  {title:'Artificial Intelligence', path:'/services/ai', desc:'Forecasting, NLP, CV, recommendations.'},
  {title:'Data Engineering', path:'/services/data', desc:'Warehouses, lakes, ETL/ELT and streaming.'},
  {title:'Business Intelligence', path:'external', href:'https://sachithshilshan.github.io/xceed/#/', desc:'Dashboards & reporting.'},
  {title:'Automation & Ops', path:'/services/automation', desc:'RPA, orchestration and low-code flows.'},
  {title:'Research & Strategy', path:'/services/research', desc:'PoC strategy and data readiness.'},
  {title:'Projects & Delivery', path:'/services/projects', desc:'End-to-end delivery and PMO.'}
]

export default function ServicesIndex(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="text-muted mt-2">Explore our domains and sample deliverables.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {tiles.map(t => (
          <div key={t.title} className="bg-white p-5 rounded-xl shadow-soft">
            <h4 className="font-semibold">{t.title}</h4>
            <p className="text-sm text-muted mt-2">{t.desc}</p>
            <div className="mt-4">
              {t.path === 'external' ? (
                <a className="px-3 py-1 rounded-lg border" href={t.href} target="_blank" rel="noreferrer">Open demo</a>
              ) : (
                <Link to={t.path} className="px-3 py-1 rounded-lg border">View</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
