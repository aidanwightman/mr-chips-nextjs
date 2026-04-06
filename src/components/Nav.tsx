'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector('nav');
    const offset = (nav?.offsetHeight ?? 72) + 8;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  const toggleMenu = (open: boolean) => {
    setMenuOpen(open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const links = [
    { label: 'Menu', id: 'menu' },
    { label: 'About', id: 'about' },
    { label: 'Catering', id: 'catering' },
    { label: 'Gallery', id: 'gallery' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#2B161B] shadow-2xl py-3' : 'py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('home')}
              className="font-[family-name:var(--font-playfair)] italic font-black text-[#F5C518] leading-none"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}
            >
              Mr Chips.
            </button>
            <span className="hidden md:block text-white/70 text-[10px] font-bold tracking-[0.18em] uppercase border-l border-white/30 pl-3">
              Portobello Market · Notting Hill · Est. 2018
            </span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-white/80 hover:text-[#F5C518] text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className="bg-[#F5C518] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                Book Now
              </button>
            </li>
          </ul>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => toggleMenu(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white rounded" />
            <span className="block w-6 h-0.5 bg-white rounded" />
            <span className="block w-6 h-0.5 bg-white rounded" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[1999] bg-black/60 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleMenu(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#2B161B] z-[2000] pt-20 px-10 pb-10 transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={() => toggleMenu(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="flex flex-col gap-2">
          {[...links, { label: 'Book Now', id: 'contact' }].map(l => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="font-[family-name:var(--font-bebas)] text-4xl text-white hover:text-[#F5C518] tracking-wider transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
