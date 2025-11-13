import React, { useState } from 'react'
import { FORMSPREE_ENDPOINT } from '../data/config'

export default function ContactForm(){
  const [sent, setSent] = useState(false)
  return (
    <>
      {!sent ? (
        <form className="space-y-4" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={() => setSent(true)}>
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input name="name" required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full border rounded-lg px-3 py-2"></textarea>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 rounded-lg text-white bg-primary">Send message</button>
            <button type="reset" className="px-4 py-2 rounded-lg border">Reset</button>
          </div>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <h3 className="font-semibold">Thanks — we received your message</h3>
          <p className="text-sm text-muted mt-2">We typically reply within 2 business days.</p>
        </div>
      )}
    </>
  )
}
