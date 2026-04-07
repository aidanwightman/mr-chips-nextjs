'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const menuItems = [
  {
    name: 'Classic Chips',
    tag: 'Chips & Fries',
    category: 'chips',
    prices: [{ label: 'Small', price: '£5' }, { label: 'Large', price: '£6' }],
  },
  {
    name: 'Sweet Potato Fries',
    tag: 'Chips & Fries',
    category: 'chips',
    prices: [{ label: 'Small', price: '£6' }, { label: 'Large', price: '£7' }],
  },
  {
    name: 'Halloumi Fries',
    tag: 'Chips & Fries',
    category: 'chips',
    badge: 'Fan Favourite',
    prices: [{ label: '8 pcs', price: '£7' }, { label: '12 pcs', price: '£10' }],
  },
  {
    name: 'Southern Fried Chicken',
    tag: 'Chicken',
    category: 'chicken',
    prices: [{ label: '5 pcs', price: '£7' }, { label: '10 pcs', price: '£10' }],
  },
  {
    name: 'Mamma Meatballs',
    tag: 'Meatballs',
    category: 'meatballs',
    prices: [{ label: 'Pcs', price: '£7' }, { label: 'Large', price: '£10' }],
  },
  {
    name: 'Halloumi Combo',
    tag: 'Combos',
    category: 'combos',
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
  },
  {
    name: 'Chicken Combo',
    tag: 'Combos',
    category: 'combos',
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
  },
  {
    name: 'Meatball Combo',
    tag: 'Combos',
    category: 'combos',
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
  },
  {
    name: 'Soft Drinks',
    tag: 'Drinks',
    category: 'drinks',
    prices: [{ label: '', price: '£2' }],
  },
];

const tabs = [
  { label: 'All', filter: 'all' },
  { label: 'Chips & Fries', filter: 'chips' },
  { label: 'Chicken', filter: 'chicken' },
  { label: 'Meatballs', filter: 'meatballs' },
  { label: 'Combos', filter: 'combos' },
];

export default function Menu() {
  const [active, setActive] = useState('all');
  const visible = menuItems.filter(item => active === 'all' || item.category === active);

  return (
    <section id="menu" className="py-16 bg-[#FFF8E7]">
      <div className="max-w-[1240px] mx-auto px-8 md:px-16">

        <FadeIn className="mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C0392B] mb-2">
            What We&apos;re Cooking
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic font-black text-[#2B161B] leading-[0.88]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            The Menu.
          </h2>
        </FadeIn>

        {/* Tabs */}
        <FadeIn className="flex gap-2 flex-wrap mb-8">
          {tabs.map(t => (
            <button
              key={t.filter}
              onClick={() => setActive(t.filter)}
              className={`px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                active === t.filter
                  ? 'bg-[#2B161B] border-[#2B161B] text-[#F5C518]'
                  : 'border-[#2B161B]/20 text-[#645659] hover:border-[#2B161B] hover:text-[#2B161B]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </FadeIn>

        {/* Compact list */}
        <FadeIn>
          <div className="divide-y divide-[#2B161B]/8">
            {visible.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-3.5 group">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C0392B] w-24 shrink-0 hidden sm:block">
                    {item.tag}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-[family-name:var(--font-playfair)] italic font-bold text-[#2B161B] text-base sm:text-lg">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="self-start bg-[#C0392B] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-[#645659] shrink-0 ml-4">
                  {item.prices.map(p => (
                    <span key={p.label} className="flex items-center gap-1">
                      {p.label && <span className="text-[#645659]/60">{p.label}</span>}
                      <strong className="text-[#2B161B] font-bold">{p.price}</strong>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
