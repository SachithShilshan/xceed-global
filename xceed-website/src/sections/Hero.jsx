import React from 'react';

export default function Hero({ title = 'XCEED — Data, AI & Automation', subtitle, cta = { text: 'Get Started', href: '/contact' } }) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle || 'Practical AI, scalable data engineering, and automation that deliver measurable business impact.'}</p>
            <div className="mt-6 flex items-center gap-4">
              <a href={cta.href} className="inline-flex items-center px-5 py-3 rounded-lg bg-teal-500 text-white font-medium shadow hover:opacity-95">
                {cta.text}
              </a>
              <a href="/#services" className="text-sm text-slate-600 dark:text-slate-300 hover:underline">Explore services →</a>
            </div>
          </div>
          <div>
            <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-slate-800 dark:to-slate-800 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200">
              <div className="text-center px-6">
                <div className="text-sm">Featured solution</div>
                <div className="text-xl font-semibold mt-2">Demand forecasting & inventory optimization</div>
                <div className="mt-3 text-sm">Reduce stockouts, improve turnover and free working capital with ML-driven forecasting.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
