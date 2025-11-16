// src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({
  title = 'XCEED — Data, AI & Automation',
  subtitle = 'Practical AI, scalable data engineering, and automation that deliver measurable business impact.',
  cta = { text: 'Get Started', href: '/contact' }
}) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 pb-16">
      {/* MAIN HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={cta.href}
                className="inline-flex items-center px-5 py-3 rounded-lg bg-teal-500 text-white font-medium shadow hover:opacity-95"
              >
                {cta.text}
              </a>
              <a
                href="/#services"
                className="text-sm text-slate-600 dark:text-slate-300 hover:underline"
              >
                Explore services →
              </a>
            </div>
          </div>

          {/* Right side hero illustration box */}
          <div>
            <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-slate-800 dark:to-slate-800 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200">
              <div className="text-center px-6">
                <div className="text-sm">Leading-edge projects</div>
                <div className="text-xl font-semibold mt-2">
                  Intelligent Automation & Predictive AI
                </div>
                <div className="mt-3 text-sm">
                  XCEED solutions focus on enhancing human productivity and
                  maximizing business outcomes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED SOLUTION ADDED HERE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold">⭐ Featured Solution — Data & Dashboard Management System</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Explore the complete BI and data management platform created by XCEED —
                featuring role-based dashboards, data pipelines, and real-time Power BI
                integrations.
              </p>

              <ul className="mt-4 text-sm space-y-2 text-slate-700 dark:text-slate-200">
                <li>• End-to-end dashboard & reporting workflows</li>
                <li>• Integrated Power BI live analytics</li>
                <li>• Department-wise role dashboards</li>
                <li>• Fully deployed on GitHub Pages</li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://sachithshilshan.github.io/xceed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-teal-600 text-white"
                >
                  Open Demo
                </a>

                <a
                  href="https://sachithshilshan.github.io/xceed/#/departments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600"
                >
                  Power BI Dashboards
                </a>

                <Link
                  to="/portfolio"
                  className="text-sm text-teal-600 dark:text-teal-300 font-medium"
                >
                  View related projects →
                </Link>
              </div>
            </div>

            {/* Small right-side info */}
            <div className="text-xs text-slate-400 dark:text-slate-500">
              Live on GitHub Pages — fast, stable and fully responsive.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
