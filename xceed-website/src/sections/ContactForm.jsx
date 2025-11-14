import React, { useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    // This is a placeholder. Integrate with your backend or form service.
    console.log('contact submit', state);
    setSent(true);
    setState({ name: '', email: '', message: '' });
  }

  if (sent) {
    return <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-md">Thanks — we got your message and will reach out soon.</div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4 bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-100 dark:border-slate-800">
      <div>
        <label className="block text-sm">Name</label>
        <input required value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input required type="email" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea required value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 h-28" />
      </div>
      <div>
        <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-teal-500 text-white">Send Message</button>
      </div>
    </form>
  );
}
