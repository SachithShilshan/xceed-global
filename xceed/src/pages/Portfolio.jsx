import React from 'react'

export default function Portfolio(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <p className="text-muted mt-2">A selection of projects demonstrating impact and measurable outcomes.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Retail BI</h4>
          <p className="text-sm text-muted mt-2">Unified sales, inventory and promotions dashboards.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">Supply Forecasting</h4>
          <p className="text-sm text-muted mt-2">Forecast models integrated into replenishment workflows.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-soft">
          <h4 className="font-semibold">HR Automation</h4>
          <p className="text-sm text-muted mt-2">Onboarding automation and document verification flows.</p>
        </div>
      </div>
    </div>
  )
}
