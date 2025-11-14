import React from 'react';

const items = [
  { title: 'Retail Forecasting', desc: 'Reduced stockouts by 35% for a retail chain' },
  { title: 'Invoice Automation', desc: 'Automated invoice processing saving 1200 hours/year' },
  { title: 'Finance Dashboards', desc: 'Realtime CFO dashboards for a multinational' }
];

export default function Portfolio() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Selected projects and outcomes.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-lg border bg-white dark:bg-slate-800">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
