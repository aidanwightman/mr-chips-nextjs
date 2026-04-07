import Image from 'next/image';
import Link from 'next/link';

const photos = [
  {
    src: '/images/insta-photo-1.png',
    alt: 'Potato skewer fresh from the stall',
    span: 'row-span-2',
  },
  {
    src: '/images/insta-sc-1.png',
    alt: 'Mr Chips at the market',
    span: '',
  },
  {
    src: '/halloumi-fries.jpg',
    alt: 'Crispy halloumi fries',
    span: '',
  },
  {
    src: '/food-spread.jpg',
    alt: 'Mr Chips food spread',
    span: 'col-span-2',
  },
  {
    src: '/loaded-fries.jpg',
    alt: 'Loaded fries',
    span: '',
  },
  {
    src: '/food-spread-2.webp',
    alt: 'Fresh chips at Portobello',
    span: '',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#2B161B]">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#2B161B]/95 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">←</span>
          <span className="font-[family-name:var(--font-playfair)] italic font-bold text-[#F5C518] text-xl">
            Mr Chips.
          </span>
        </Link>
        <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
          Portobello Market · Notting Hill
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-16 pt-20 pb-12">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C0392B] mb-4">
          Straight From The Stall
        </p>
        <h1
          className="font-[family-name:var(--font-playfair)] italic font-black text-white leading-[0.88]"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          The Food.
        </h1>
      </div>

      {/* Masonry grid */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-16 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-[#3d2026] group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle hover label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B161B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white/80 text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/10 py-10 text-center">
        <p className="text-white/25 text-xs font-bold uppercase tracking-[0.2em] mb-5">
          Come find us
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-[#F5C518] text-[#2B161B] font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-white transition-colors"
        >
          Book Catering
        </Link>
      </div>

    </div>
  );
}
