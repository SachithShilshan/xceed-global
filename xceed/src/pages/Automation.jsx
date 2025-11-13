import React from 'react'

export default function Automation(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Automation & Digital Operations</h2>
      <p className="text-muted mt-2">Reduce manual work, accelerate processing and improve accuracy with robust automation.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">RPA & Low-code</h4>
          <p className="text-sm text-muted mt-2">End-to-end automation for time-consuming operational tasks.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Orchestration</h4>
          <p className="text-sm text-muted mt-2">Event-driven automation orchestrated with alerting and SLA monitoring.</p>
        </div>
      </div>
    </div>
  )
}
