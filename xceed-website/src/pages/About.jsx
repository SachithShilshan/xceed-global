import React from 'react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">About XCEED</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          XCEED helps organizations transform with data, AI and automation. We work with teams across industries to find high-value opportunities,
          build reliable systems and deliver measurable impact — faster.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Deliver practical AI and data solutions that accelerate decision-making and efficiency.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Approach</h3>
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Product-led engineering, human-centered design and robust MLOps & data engineering practices.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Team</h3>
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Cross-disciplinary engineers, analysts and product designers with domain experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
