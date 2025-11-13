import React from 'react'

export default function SectionCard({ title, href }) {
  const isExternal = href.startsWith('http')
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="muted">Explore solutions, case studies and example implementations.</p>
      <a
        className="btn small"
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`Open ${title}`}
      >
        Open
      </a>
    </article>
  )
}
