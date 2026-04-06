'use client';

import { useState, FormEvent } from 'react';
import FadeIn from './FadeIn';

const details = [
  {
    icon: '📍',
    title: 'Find Us',
    lines: ['Portobello Road Market, Notting Hill, London', 'Thursday – Sunday'],
  },
  {
    icon: '📞',
    title: 'Call / WhatsApp',
    href: 'tel:+447867850713',
    lines: ['+44 786 785 0713'],
  },
  {
    icon: '✉️',
    title: 'Email',
    href: 'mailto:danilo@mrchipslondon.co.uk',
    lines: ['danilo@mrchipslondon.co.uk'],
  },
  {
    icon: '🕐',
    title: 'Market Hours',
    lines: ['Thursday – Sunday', 'Market opening times'],
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus('sending');
    setTimeout(() => {
      setStatus('done');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#FFF8E7]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

          {/* Info */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C0392B] mb-3">
              Get In Touch
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider mb-4">
              Book Danilo
            </h2>
            <p className="text-gray-400 mb-10 leading-[1.75]">
              Whether it&apos;s a market visit or a full event catering package, we&apos;d love to hear from you.
            </p>
            <ul className="flex flex-col gap-6">
              {details.map(d => (
                <li key={d.title} className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{d.icon}</span>
                  <div>
                    <strong className="block text-[11px] font-bold uppercase tracking-wider mb-1 text-[#1A1A1A]">
                      {d.title}
                    </strong>
                    {d.href ? (
                      <a href={d.href} className="text-sm text-gray-400 hover:text-[#C0392B] transition-colors">
                        {d.lines[0]}
                      </a>
                    ) : (
                      d.lines.map((l, i) => (
                        <p key={i} className="text-sm text-gray-400 leading-relaxed">{l}</p>
                      ))
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={100}>
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name" name="name" type="text" required autoComplete="name"
                      placeholder="e.g. Sarah Johnson"
                      className="px-4 py-3.5 rounded-xl border-[1.5px] border-[#F5EDD0] bg-[#FFF8E7] text-sm focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email" name="email" type="email" required autoComplete="email"
                      placeholder="sarah@example.com"
                      className="px-4 py-3.5 rounded-xl border-[1.5px] border-[#F5EDD0] bg-[#FFF8E7] text-sm focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]" htmlFor="type">
                      Enquiry Type
                    </label>
                    <select
                      id="type" name="type" required
                      className="px-4 py-3.5 rounded-xl border-[1.5px] border-[#F5EDD0] bg-[#FFF8E7] text-sm focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition-all appearance-none"
                    >
                      <option value="">Select one...</option>
                      <option value="festival">Festival Catering</option>
                      <option value="wedding">Wedding Catering</option>
                      <option value="private">Private Event</option>
                      <option value="other">General Enquiry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]" htmlFor="date">
                      Event Date
                    </label>
                    <input
                      id="date" name="date" type="date"
                      className="px-4 py-3.5 rounded-xl border-[1.5px] border-[#F5EDD0] bg-[#FFF8E7] text-sm focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]" htmlFor="message">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Number of guests, location, any dietary requirements..."
                    className="px-4 py-3.5 rounded-xl border-[1.5px] border-[#F5EDD0] bg-[#FFF8E7] text-sm focus:outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition-all resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'done'}
                  className="w-full bg-[#F5C518] text-[#1A1A1A] font-bold text-sm uppercase tracking-wider py-4 rounded-full hover:bg-[#D4A017] hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'sending' ? 'Sending…' : status === 'done' ? 'Sent! ✓' : 'Send Enquiry 🍟'}
                </button>

                {status === 'done' && (
                  <p className="text-center text-green-600 font-semibold text-sm mt-4">
                    Thanks! We&apos;ll be in touch soon. 🎉
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
