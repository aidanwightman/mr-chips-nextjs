'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

const menuItems = [
  {
    name: 'Classic Chips',
    tag: 'Chips & Fries',
    category: 'chips',
    desc: 'Golden, crispy potato chips seasoned to perfection. Our signature since day one.',
    prices: [{ label: 'Small', price: '£5' }, { label: 'Large', price: '£6' }],
    emoji: '🍟',
    gradient: 'from-[#F5C518] to-[#D4A017]',
  },
  {
    name: 'Sweet Potato Fries',
    tag: 'Chips & Fries',
    category: 'chips',
    desc: 'Organic sweet potato fries — naturally sweeter, beautifully crispy.',
    prices: [{ label: 'Small', price: '£6' }, { label: 'Large', price: '£7' }],
    emoji: '🍠',
    gradient: 'from-[#E8833A] to-[#C0611A]',
  },
  {
    name: 'Halloumi Fries',
    tag: 'Chips & Fries',
    category: 'chips',
    desc: 'Original halloumi made with cow, sheep and goat milk. Crispy outside, melty inside.',
    prices: [{ label: '8 pcs', price: '£7' }, { label: '12 pcs', price: '£10' }],
    img: '/halloumi-fries.jpg',
    badge: 'Fan Favourite',
    featured: true,
  },
  {
    name: 'Southern Fried Chicken',
    tag: 'Chicken',
    category: 'chicken',
    desc: 'Tender, juicy fillet coated in our secret spiced crumb. Properly addictive.',
    prices: [{ label: '5 pcs', price: '£7' }, { label: '10 pcs', price: '£10' }],
    emoji: '🍗',
    gradient: 'from-[#8BC34A] to-[#558B2F]',
  },
  {
    name: 'Halloumi Combo',
    tag: 'Combos',
    category: 'combos',
    desc: 'Halloumi fries with your choice of classic chips or sweet potato. The full experience.',
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
    img: '/loaded-fries.jpg',
  },
  {
    name: 'Chicken Combo',
    tag: 'Combos',
    category: 'combos',
    desc: 'Southern fried chicken with classic chips or sweet potato fries. A proper meal.',
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
    img: '/burger.webp',
  },
];

const sauces = ['Onion', 'Garlic', 'BBQ', 'Spicy', 'Ketchup', 'Mayo'];
const extras = [
  { name: 'Truffle Mayo', price: '+£1' },
  { name: 'Whiskey Mayo', price: '+£1' },
  { name: 'Special Gravy', price: '+£1' },
];

const tabs = [
  { label: 'All', filter: 'all' },
  { label: 'Chips & Fries', filter: 'chips' },
  { label: 'Combos', filter: 'combos' },
  { label: 'Chicken', filter: 'chicken' },
];

export default function Menu() {
  const [active, setActive] = useState('all');

  const visible = menuItems.filter(
    item => active === 'all' || item.category === active
  );

  return (
    <section id="menu" className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">

        <FadeIn className="mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C0392B] mb-3">
            What We&apos;re Cooking
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider mb-4">
            The Menu
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            Fresh ingredients, bold flavours — no shortcuts, ever.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn className="flex gap-2 flex-wrap mb-12">
          {tabs.map(t => (
            <button
              key={t.filter}
              onClick={() => setActive(t.filter)}
              className={`px-6 py-2.5 rounded-full border-2 text-xs font-bold uppercase tracking-wider transition-all ${
                active === t.filter
                  ? 'bg-[#F5C518] border-[#F5C518] text-[#1A1A1A]'
                  : 'border-black/10 text-gray-400 hover:border-[#F5C518] hover:text-[#1A1A1A]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item, i) => (
            <FadeIn key={item.name} delay={i * 80}>
              <article
                className={`rounded-3xl overflow-hidden border-[1.5px] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-2xl ${
                  item.featured
                    ? 'border-[#F5C518] shadow-[0_0_0_3px_rgba(245,197,24,0.2)]'
                    : 'border-[#F5EDD0]'
                }`}
              >
                {/* Image area */}
                <div className="h-[220px] overflow-hidden relative bg-[#F5EDD0]">
                  {item.img ? (
                    <>
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#C0392B] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <span className="text-7xl drop-shadow-lg">{item.emoji}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#C0392B]">
                    {item.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-bebas)] text-[1.7rem] leading-none tracking-wider mt-1 mb-2 text-[#1A1A1A]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex gap-4 text-sm text-gray-400 border-t border-[#F5EDD0] pt-3">
                    {item.prices.map(p => (
                      <span key={p.label}>
                        {p.label} <strong className="text-[#1A1A1A] text-base">{p.price}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Sauces & Extras */}
        <FadeIn className="mt-16">
          <div className="bg-[#1A1A1A] rounded-3xl p-12">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5C518] mb-1 tracking-wider">
                  Signature Sauces
                </h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-5">
                  Included with every order
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {sauces.map(s => (
                    <span
                      key={s}
                      className="bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-px bg-white/10 mx-10 hidden md:block" />

              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#F5C518] mb-1 tracking-wider">
                  Premium Add-ons
                </h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-5">
                  Upgrade your order
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {extras.map(e => (
                    <span
                      key={e.name}
                      className="bg-[#F5C518]/15 border border-[#F5C518]/30 text-white text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      {e.name} <strong className="text-[#F5C518] ml-1">{e.price}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
