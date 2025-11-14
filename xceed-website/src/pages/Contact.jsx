import React from 'react';
import ContactForm from '../sections/ContactForm';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us about your challenge and we’ll get back within 2 business days.</p>

        <div className="mt-6">
          <ContactForm />
        </div>

        <div className="mt-8 text-sm text-slate-600 dark:text-slate-300">
          Or email us at <a href="mailto:hello@xceed.example" className="underline">hello@xceed.example</a>
        </div>
      </div>
    </div>
  );
}
