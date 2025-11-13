import React from 'react'

export default function Data(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Data Engineering & Platforms</h2>
      <p className="text-muted mt-2">Reliable data platforms enable analytics and automation at scale.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Architectures</h4>
          <p className="text-sm text-muted mt-2">Designs for cost-effective data lakes and purpose-built warehouses.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Data Integration</h4>
          <p className="text-sm text-muted mt-2">ETL/ELT pipelines, CDC and streaming with observability.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Governance</h4>
          <p className="text-sm text-muted mt-2">Metadata, cataloging and role-based access controls.</p>
        </div>
      </div>
    </div>
  )
}
