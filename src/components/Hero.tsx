import ScrollButton from './ScrollButton';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[#2B161B]">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>
        {/* Gradient: dark at bottom where text lives, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B161B] via-[#2B161B]/60 to-[#2B161B]/10" />
      </div>

      {/* Top eyebrow */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-28 px-8 md:px-16 anim-1">
        <p className="text-[#F5C518] text-xs font-bold tracking-[0.25em] uppercase">
          Portobello Market · Notting Hill · Est. 2018
        </p>
      </div>

      {/* Main content — pinned to bottom left, Poptata-style */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 md:px-16 pb-20 md:pb-28">

        {/* Giant serif headline — Poptata's signature move */}
        <h1 className="anim-2 font-[family-name:var(--font-playfair)] italic font-black leading-[0.88] mb-6 text-white"
          style={{ fontSize: 'clamp(5rem, 16vw, 14rem)' }}>
          Mr<br />
          <span className="text-[#F5C518]">Chips.</span>
        </h1>

        {/* Bebas sub-label — street energy contrast */}
        <p className="anim-3 font-[family-name:var(--font-bebas)] text-white/60 tracking-[0.25em] uppercase mb-3"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>
          Crispy · Golden · Legendary
        </p>

        <p className="anim-4 text-white/60 max-w-[460px] leading-relaxed mb-10"
          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}>
          Fresh potato chips, halloumi fries & sweet potato — straight from the heart of Notting Hill since 2018.
        </p>

        <div className="anim-5 flex gap-4 flex-wrap items-center">
          <ScrollButton targetId="menu" variant="primary">View Menu</ScrollButton>
          <ScrollButton targetId="contact" variant="outline">Book Catering</ScrollButton>

          {/* Poptata-style inline stat strip */}
          <div className="hidden md:flex items-center gap-6 ml-8 pl-8 border-l border-white/20">
            {[['2018', 'Est.'], ['2', 'Stalls'], ['5★', 'Google']].map(([v, l]) => (
              <div key={l} className="text-center">
                <strong className="block font-[family-name:var(--font-playfair)] italic text-[#F5C518]"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>{v}</strong>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 anim-5">
        <div className="w-px h-12 bg-white/20 scroll-pulse" />
        <p className="text-white/30 text-[9px] font-bold tracking-[0.15em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </p>
      </div>
    </section>
  );
}
