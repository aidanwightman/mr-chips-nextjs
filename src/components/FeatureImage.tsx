import Image from 'next/image';

export default function FeatureImage() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
      <Image
        src="/images/insta-photo-1.png"
        alt="Mr Chips signature potato skewer"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Left-to-right dark fade so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B161B]/85 via-[#2B161B]/40 to-transparent" />
      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2B161B] to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1240px] mx-auto px-8 md:px-16">
          <p className="text-[#F5C518] text-xs font-bold tracking-[0.3em] uppercase mb-5">
            Signature
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] italic font-black text-white leading-[0.88] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Made fresh.<br />
            <span className="text-[#F5C518]">Every time.</span>
          </h2>
          <p className="text-white/70 max-w-sm leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
            Thinly sliced, seasoned to perfection. Every skewer is a work of craft.
          </p>
        </div>
      </div>
    </section>
  );
}
