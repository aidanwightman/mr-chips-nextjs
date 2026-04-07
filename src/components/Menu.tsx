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
    bg: 'bg-[#F5C518]',
  },
  {
    name: 'Sweet Potato Fries',
    tag: 'Chips & Fries',
    category: 'chips',
    desc: 'Organic sweet potato fries — naturally sweeter, beautifully crispy.',
    prices: [{ label: 'Small', price: '£6' }, { label: 'Large', price: '£7' }],
    emoji: '🍠',
    bg: 'bg-[#E8833A]',
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
    bg: 'bg-[#2B161B]',
  },
  {
    name: 'Mamma Meatballs',
    tag: 'Meatballs',
    category: 'meatballs',
    desc: "Fresh Italian handmade polpette following Danilo's mum's recipe. A taste of home.",
    prices: [{ label: 'Pcs', price: '£7' }, { label: 'Large', price: '£10' }],
    emoji: '🍝',
    bg: 'bg-[#C0392B]',
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
  {
    name: 'Meatball Combo',
    tag: 'Combos',
    category: 'combos',
    desc: "Mamma's meatballs with classic chips or sweet potato fries. Italian street food done right.",
    prices: [{ label: '+ Chips', price: '£9' }, { label: '+ Sweet Potato', price: '£10' }],
    emoji: '🍝',
    bg: 'bg-[#C0392B]',
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
    <section id="menu" className="py-32 bg-[#FFF8E7]">
      <div className="max-w-[1240px] mx-auto px-8 md:px-16">

        <FadeIn className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C0392B] mb-4">
            What We&apos;re Cooking
          </p>
          {/* Poptata: massive italic serif title */}
          <h2 className="font-[family-name:var(--font-playfair)] italic font-black text-[#2B161B] leading-[0.88] mb-5"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            The Menu.
          </h2>
          <p className="text-[#645659] max-w-md text-base">
            Fresh ingredients, bold flavours — no shortcuts, ever.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn className="flex gap-2 flex-wrap mb-14">
          {tabs.map(t => (
            <button
              key={t.filter}
              onClick={() => setActive(t.filter)}
              className={`px-6 py-2.5 rounded-full border-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                active === t.filter
                  ? 'bg-[#2B161B] border-[#2B161B] text-[#F5C518]'
                  : 'border-[#2B161B]/15 text-[#645659] hover:border-[#2B161B] hover:text-[#2B161B]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </FadeIn>

        {/* Menu grid — Poptata image-first rounded cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((item, i) => (
            <FadeIn key={item.name} delay={i * 80}>
              <article className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.featured ? 'ring-2 ring-[#F5C518] ring-offset-4 ring-offset-[#FFF8E7]' : ''
              }`}>

                {/* Image — tall and dominant, Poptata style */}
                <div className="relative h-64 overflow-hidden">
                  {item.img ? (
                    <>
                      <Image src={item.img} alt={item.name} fill
                        className="object-cover transition-transform duration-600 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      {item.badge && (
                        <span className="absolute top-4 left-4 bg-[#C0392B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                          {item.badge}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={`w-full h-full ${item.bg} flex items-center justify-center`}>
                      <span className="text-8xl drop-shadow-lg">{item.emoji}</span>
                    </div>
                  )}
                </div>

                {/* Body — clean and minimal like Poptata */}
                <div className="bg-white px-6 py-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#C0392B]">
                    {item.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] italic font-bold text-[#2B161B] mt-1 mb-2"
                    style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#645659] mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex gap-4 text-sm text-[#645659] border-t border-[#F5EDD0] pt-3">
                    {item.prices.map(p => (
                      <span key={p.label}>
                        {p.label} <strong className="text-[#2B161B] font-bold">{p.price}</strong>
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
