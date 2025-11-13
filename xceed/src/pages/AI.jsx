import React from 'react'

export default function AI(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
      <p className="text-muted mt-2">Delivering models and systems that produce operational value — from prototyping to production.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <h4 className="font-semibold">Use cases</h4>
          <ul className="mt-3 text-sm text-muted space-y-2">
            <li>Demand forecasting & inventory optimization</li>
            <li>Customer analytics & churn prediction</li>
            <li>NLP for document understanding and chatbots</li>
            <li>Anomaly detection for operations and finance</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <h4 className="font-semibold">PoC to Production</h4>
          <p className="text-sm text-muted mt-2">We run compact experiments to validate ROI, then build with reproducible pipelines and monitoring for production.</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Deliverables</h4>
        <ul className="mt-2 text-sm text-muted space-y-2">
          <li>Model notebooks & reproducible training pipelines</li>
          <li>Containerized inference endpoints with autoscaling</li>
          <li>Monitoring and drift-detection dashboards</li>
        </ul>
      </div>
    </div>
  )
}
