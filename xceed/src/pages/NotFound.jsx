import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">Page not found</h2>
      <p className="text-muted mt-3">That link looks broken — try returning to the homepage.</p>
      <div className="mt-6">
        <Link to="/" className="px-4 py-2 rounded-lg bg-primary text-white">Back to home</Link>
      </div>
    </div>
  )
}
