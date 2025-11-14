import React from 'react';

const products = [
  { name: 'XCEED Forecast', desc: 'Demand forecasting & inventory optimization.', tag: 'AI' },
  { name: 'XCEED Connect', desc: 'ETL & integration platform.', tag: 'Data' },
  { name: 'XDash', desc: 'Prebuilt BI dashboards and templates.', tag: 'BI' }
];

export default function Products() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Off-the-shelf tools that accelerate delivery.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="p-6 rounded-lg border bg-white dark:bg-slate-800">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{p.desc}</div>
              <div className="mt-4 text-xs inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">{p.tag}</div>
              <div className="mt-4">
                <button className="px-4 py-2 rounded-md bg-teal-500 text-white">Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
