import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import CaseStudy from '../components/CaseStudy'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{y:6, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.05}} className="text-3xl font-bold">
            Turn data into decisions — fast
          </motion.h1>
          <p className="text-muted mt-4">We combine AI, modern data platforms and automation to deliver measurable business outcomes — faster and with less risk.</p>

          <div className="mt-6 flex gap-3">
            <Link to="/services" className="px-4 py-2 rounded-lg bg-primary text-white">Explore services</Link>
            <Link to="/contact" className="px-4 py-2 rounded-lg border">Talk to an expert</Link>
            <a href="https://sachithshilshan.github.io/xceed/#/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg">View BI demo</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="text-sm text-muted">
              <strong className="block text-lg text-primary">25+</strong>
              Projects
            </div>
            <div className="text-sm text-muted">
              <strong className="block text-lg text-primary">3x</strong>
              Faster insights
            </div>
            <div className="text-sm text-muted">
              <strong className="block text-lg text-primary">99.9%</strong>
              Uptime on dashboards
            </div>
          </div>
        </div>

        <div>
          <img src="/src/assets/hero-illustration-light.svg" alt="Hero illustration" className="rounded-xl shadow-soft" />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold">What we do</h3>
        <p className="text-muted mt-2">From PoC to production — templates, tooling and experience to scale analytics and automation across your org.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <FeatureCard title="AI & ML" caption="Forecasting, NLP, recommendations and anomaly detection." icon="🤖" />
          <FeatureCard title="Data Platforms" caption="Data lakes, warehouses, ETL and realtime pipelines." icon="🗄️" />
          <FeatureCard title="Automation" caption="RPA, workflows and orchestration for operations." icon="⚙️" />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold">Case studies</h3>
        <p className="text-muted mt-2">Selected outcomes from recent projects.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <CaseStudy title="BI modernization" summary="Built consolidated dashboards for Sales & Ops; replaced 6 legacy reports." impact="Reduced reporting time from 6 hours to 10 minutes."/>
          <CaseStudy title="Demand forecasting" summary="Time-series models for SKU demand." impact="Cut stockouts by 21% and improved fill rates."/>
          <CaseStudy title="HR automation" summary="Automated onboarding flows and document verification." impact="Saved 4 FTEs worth of time per month."/>
        </div>
      </section>

      <section className="mt-12 bg-white p-6 rounded-xl shadow-soft">
        <h3 className="text-lg font-semibold">Start a project</h3>
        <p className="text-muted mt-2">We start with a short discovery to scope impact, a compact PoC, and a production roadmap.</p>
        <div className="mt-4">
          <Link to="/contact" className="px-4 py-2 rounded-lg bg-primary text-white">Book discovery</Link>
        </div>
      </section>
    </div>
  )
}
