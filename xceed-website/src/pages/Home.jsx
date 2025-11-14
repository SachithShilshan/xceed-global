import React from 'react';
import Hero from '../sections/Hero';
import FeaturesGrid from '../sections/FeaturesGrid';
import ServicesList from '../sections/ServicesList';
import servicesData from '../data/servicesData';

export default function Home() {
  const features = [
    { title: 'End-to-end delivery', desc: 'From discovery to production and monitoring.' },
    { title: 'Scalable pipelines', desc: 'Design for growth & maintainability.' },
    { title: 'Human-centered AI', desc: 'Models that align with real business needs.' },
    { title: 'Fast iteration', desc: 'PoCs to production in weeks.' }
  ];

  return (
    <div>
      <Hero />
      <FeaturesGrid features={features} />
      <ServicesList data={servicesData} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Why choose XCEED?</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">We combine practical engineering with business-first product thinking to deliver measurable outcomes.</p>
        </div>
      </section>
    </div>
  );
}
