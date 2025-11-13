import React from 'react'

export default function Products(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Products</h2>
      <p className="text-muted mt-2">Modular products that accelerate delivery.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">DashboardKit</h4>
          <p className="text-sm text-muted mt-2">Prebuilt dashboard templates and data models for fast analytics.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">AutoFlows</h4>
          <p className="text-sm text-muted mt-2">Low-code orchestration templates for common business processes.</p>
        </div>
      </div>
    </div>
  )
}
