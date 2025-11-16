import React from 'react';
import servicesData from '../../data/servicesData';

export default function Robotics() {
  const s = servicesData.robotics;
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{s.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{s.intro}</p>

        <div className="mt-6 space-y-6">
          {s.sections.map((sec) => (
            <div key={sec.title} className="p-4 border rounded-lg bg-white dark:bg-slate-800">
              <h3 className="font-semibold">{sec.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                {sec.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">How we work</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              We pursue an engineering-first approach—prototype quickly with hardware-in-the-loop, validate with domain experts,
              and iterate to production-ready systems that meet safety, reliability and regulatory requirements.
            </p>
            <div className="mt-3 text-sm">
              <strong>Example engagements:</strong>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Autonomous inspection robot for industrial facilities</li>
                <li>AI-enabled prosthetic limb with neural control interface</li>
                <li>Exoskeleton pilot to improve worker ergonomics and reduce injuries</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
