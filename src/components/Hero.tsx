import Image from 'next/image';
import ScrollButton from './ScrollButton';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/food-spread.jpg"
          alt="Mr Chips food spread"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/55 to-[#1A1A1A]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full pt-28 pb-20">
        <p className="anim-1 text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-5">
          Portobello Market · Notting Hill
        </p>

        <h1 className="anim-2 font-[family-name:var(--font-bebas)] leading-[0.88] tracking-wider mb-4">
          <span className="block text-white" style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>
            MR
          </span>
          <span className="block text-[#F5C518]" style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>
            CHIPS
          </span>
        </h1>

        <p className="anim-3 text-white font-bold mb-4" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
          Crispy. Golden. Legendary.
        </p>

        <p className="anim-4 text-white/75 max-w-[500px] mb-10 leading-relaxed">
          Fresh potato chips, halloumi fries & sweet potato — straight from the heart of Notting Hill since 2018.
        </p>

        <div className="anim-5 flex gap-4 flex-wrap">
          <ScrollButton targetId="menu" variant="primary">View Menu</ScrollButton>
          <ScrollButton targetId="contact" variant="outline">Book Catering</ScrollButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 text-[10px] font-bold tracking-[0.1em] uppercase anim-5">
        <span>Scroll</span>
        <div className="w-px h-10 bg-white/30 scroll-pulse" />
      </div>
    </section>
  );
}
