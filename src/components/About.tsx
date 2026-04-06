import FadeIn from './FadeIn';

const stats = [
  { value: '2018', label: 'Est.' },
  { value: '2', label: 'Market Stalls' },
  { value: '100+', label: 'Events Catered' },
  { value: '5★', label: 'Google Rating' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#FFF8E7]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#F5EDD0] rounded-3xl border-2 border-dashed border-[#D4A017] flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm flex flex-col gap-3">
                  <span className="text-5xl">👨‍🍳</span>
                  <span>Danilo&apos;s photo coming soon</span>
                </div>
              </div>
              {/* Since badge */}
              <div className="absolute -bottom-5 -right-5 w-[90px] h-[90px] bg-[#F5C518] rounded-full flex flex-col items-center justify-center shadow-2xl leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Since</span>
                <strong className="font-[family-name:var(--font-bebas)] text-2xl text-[#1A1A1A]">2018</strong>
              </div>
              {/* Location badge */}
              <div className="absolute top-5 -left-4 bg-[#C0392B] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                📍 Notting Hill
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={100}>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C0392B] mb-3">
              The Man Behind The Stall
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider mb-6">
              Meet Danilo
            </h2>
            <p className="text-lg font-medium text-[#1A1A1A] mb-4 leading-relaxed">
              You&apos;ll spot him a mile off — bandana on, apron dusted with seasoning, grinning behind the counter. That&apos;s Danilo, and he&apos;s been feeding Notting Hill since 2018.
            </p>
            <p className="text-gray-500 mb-3 leading-[1.75]">
              What started as a single stall at Portobello Market has grown into a beloved institution on one of London&apos;s most iconic streets. Danilo&apos;s philosophy is simple: use the freshest potatoes, fry them right, and serve every customer like they&apos;re already a regular.
            </p>
            <p className="text-gray-500 leading-[1.75]">
              Two market stalls. One restaurant. Hundreds of weddings, festivals and events. And always that same boundless energy that somehow makes the food taste even better.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-10 border-t border-black/10">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <strong className="block font-[family-name:var(--font-bebas)] text-4xl text-[#C0392B] leading-none">
                    {s.value}
                  </strong>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mt-1 block">
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
