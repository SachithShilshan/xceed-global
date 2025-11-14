const services = {
  ai: {
    title: 'Artificial Intelligence (AI) Solutions',
    intro: 'From predictive models to computer vision — build intelligent systems that transform operations.',
    sections: [
      {
        title: 'Predictive & Advanced Analytics',
        items: ['Demand forecasting', 'Churn prediction', 'Risk scoring', 'Sales & revenue prediction']
      },
      {
        title: 'AI Automation & Intelligent Systems',
        items: ['Intelligent document processing', 'Smart routing & classification', 'AI-driven recommendations']
      },
      {
        title: 'NLP & Conversational AI',
        items: ['Chatbots', 'Email/SMS automation', 'Language translation', 'Sentiment analysis']
      },
      {
        title: 'Computer Vision',
        items: ['Image classification', 'Anomaly detection in images', 'QR/Barcode automation', 'Quality inspection systems']
      }
    ]
  },
  dataEngineering: {
    title: 'Data Engineering & Data Platform Solutions',
    intro: 'Robust, scalable data platforms to power analytics and AI across the organization.',
    sections: [
      { title: 'Data Infrastructure & Architecture', items: ['Data lakes', 'Data warehouses', 'Data marts', 'Real-time streaming pipelines'] },
      { title: 'Data Integration & ETL/ELT', items: ['Pipeline design', 'API integrations', 'Batch & real-time processing'] },
      { title: 'Data Governance & Security', items: ['Data quality management', 'Metadata catalog', 'Access control & compliance', 'Master data management'] },
      { title: 'Database Design & Optimization', items: ['SQL/NoSQL architecture', 'Query optimization', 'Performance tuning'] }
    ]
  },
  bi: {
    title: 'Business Intelligence (BI)',
    intro: 'Actionable dashboards and self-service analytics empower leaders to decide faster.',
    sections: [
      { title: 'Dashboarding & Reporting', items: ['Executive dashboards', 'Operational dashboards', 'Financial reporting', 'Sales & marketing insights'] },
      { title: 'Self-Service BI', items: ['Power BI governance', 'Data models for self-service', 'Analytical workspaces'] },
      { title: 'KPI & Metrics Frameworks', items: ['OKR tracking', 'Organization KPIs', 'Performance monitoring'] }
    ]
  },
  automation: {
    title: 'Automation & Digital Operations',
    intro: 'Automate repetitive work, orchestrate systems, and digitize manual processes at scale.',
    sections: [
      { title: 'Process Automation (RPA)', items: ['Robotic process automation', 'Data entry automation', 'Workflow automation'] },
      { title: 'Business Process Optimization', items: ['Process re-engineering', 'Lean digital workflows', 'Paperless solutions'] },
      { title: 'Integration & Orchestration', items: ['Power Automate', 'API automation', 'Event-driven automation'] },
      { title: 'Enterprise Productivity Tools', items: ['Power Apps', 'Custom internal tools', 'Notification/alert systems'] }
    ]
  },
  research: {
    title: 'Research, Strategy & Innovation',
    intro: 'Market insights, PoCs and roadmaps to unlock the highest-value use-cases.',
    sections: [
      { title: 'Market & Industry Research', items: ['Competitor analysis', 'Industry benchmarking', 'Market forecasting'] },
      { title: 'Data-driven Strategy', items: ['Digital transformation strategy', 'BI & data strategy', 'AI readiness assessments'] },
      { title: 'Proof of Concepts (PoCs)', items: ['AI model testing', 'Pilot automation solutions', 'Prototype BI dashboards'] },
      { title: 'Organizational Data Maturity Assessment', items: ['Capability benchmarking', 'Roadmap recommendations'] }
    ]
  }
};

export default services;
