import FadeIn from './FadeIn';

const stats = [
  { value: '2018', label: 'Est.' },
  { value: '2', label: 'Market Stalls' },
  { value: '100+', label: 'Events Catered' },
  { value: '5★', label: 'Google Rating' },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#F5EDD0] rounded-2xl border-2 border-dashed border-[#D4A017] flex items-center justify-center overflow-hidden">
                <div className="text-center text-[#645659] text-sm flex flex-col gap-3">
                  <span className="text-5xl">👨‍🍳</span>
                  <span>Danilo&apos;s photo<br />coming soon</span>
                </div>
              </div>
              {/* Poptata-style label badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F5C518] rounded-full flex flex-col items-center justify-center shadow-2xl leading-none">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#2B161B]">Since</span>
                <strong className="font-[family-name:var(--font-playfair)] italic font-black text-2xl text-[#2B161B]">2018</strong>
              </div>
              <div className="absolute top-6 -left-5 bg-[#C0392B] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                📍 Notting Hill
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={100}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C0392B] mb-4">
              The Man Behind The Stall
            </p>
            {/* Poptata: big italic Playfair heading */}
            <h2 className="font-[family-name:var(--font-playfair)] italic font-black text-[#2B161B] leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              Meet Danilo.
            </h2>
            <p className="text-lg font-medium text-[#2B161B] mb-4 leading-relaxed">
              You&apos;ll spot him a mile off — bandana on, apron dusted with seasoning, grinning behind the counter. That&apos;s Danilo, and he&apos;s been feeding Notting Hill since 2018.
            </p>
            <p className="text-[#645659] mb-3 leading-[1.8]">
              What started as a single stall at Portobello Market has grown into a beloved institution. His philosophy is simple: freshest potatoes, fried right, served with personality.
            </p>
            <p className="text-[#645659] leading-[1.8]">
              Two market stalls. One restaurant. Hundreds of weddings, festivals and events. Always the same boundless energy.
            </p>

            <div className="grid grid-cols-4 gap-4 mt-12 pt-12 border-t border-[#F5EDD0]">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <strong className="block font-[family-name:var(--font-playfair)] italic font-black text-[#C0392B] leading-none mb-1"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                    {s.value}
                  </strong>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#645659] block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
