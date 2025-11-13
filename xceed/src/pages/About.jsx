import React from 'react'

export default function About(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About Xceed</h2>
      <p className="text-muted">We help organisations adopt AI, build robust data platforms and automate operational workflows — with measurable ROI.</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Mission</h4>
          <p className="text-sm text-muted mt-2">Deliver practical, production-ready solutions that drive value quickly.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Approach</h4>
          <p className="text-sm text-muted mt-2">Discovery → PoC → Build → Operate. Cross-functional teams and clear KPIs.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Values</h4>
          <p className="text-sm text-muted mt-2">Pragmatism, transparency, and measurable outcomes.</p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Leadership</h4>
          <p className="text-sm text-muted mt-2">Our team combines data science, engineering and product experience from enterprise projects.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Partners</h4>
          <p className="text-sm text-muted mt-2">We partner with cloud providers, BI platforms and automation technology vendors to accelerate delivery.</p>
        </div>
      </div>
    </div>
  )
}
