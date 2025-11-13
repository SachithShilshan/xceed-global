import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="text-muted mt-2">Describe your challenge — we'll reply within 2 business days.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <ContactForm />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h4 className="font-semibold">Office</h4>
          <p className="text-sm text-muted mt-2">Colombo, Sri Lanka</p>

          <h4 className="font-semibold mt-4">Email</h4>
          <p className="text-sm text-muted mt-2">hello@xceed.example</p>

          <h4 className="font-semibold mt-4">Sales</h4>
          <p className="text-sm text-muted mt-2">sales@xceed.example</p>
        </div>
      </div>
    </div>
  )
}
