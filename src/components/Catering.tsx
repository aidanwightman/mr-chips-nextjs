import FadeIn from './FadeIn';
import ScrollButton from './ScrollButton';

const services = [
  {
    icon: '🛒',
    title: 'Portobello Market',
    desc: 'Find us at our stalls in the heart of Portobello Road every Thursday–Sunday. Walk up, order up, dig in.',
    detail: 'Thu–Sun · Notting Hill, London',
  },
  {
    icon: '🎪',
    title: 'Festival Catering',
    desc: 'We thrive in the festival environment. Fast service, massive portions, and energy that matches the crowd. Perfect fit.',
    detail: 'Contact us to discuss your event',
    highlight: true,
  },
  {
    icon: '💍',
    title: 'Wedding Catering',
    desc: "Make your big day unforgettable with a street food twist. Danilo's chips are the talk of every reception.",
    detail: 'Bespoke menus available',
  },
  {
    icon: '🎉',
    title: 'Private Events',
    desc: 'Birthday, anniversary, corporate do, house party — we cater for any gathering, big or small.',
    detail: 'Min. 20 guests',
  },
];

export default function Catering() {
  return (
    <section id="catering" className="py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] text-white/[0.02] whitespace-nowrap pointer-events-none tracking-wider select-none"
        style={{ fontSize: 'clamp(8rem, 18vw, 20rem)' }}
        aria-hidden="true"
      >
        CATERING
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <FadeIn className="mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#F5C518] mb-3">
            We Go Where The Party Is
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider mb-4 text-white">
            Catering &amp; Events
          </h2>
          <p className="text-white/50 max-w-md">
            From market mornings to festival stages — we bring the chips to you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <div
                className={`rounded-3xl p-8 border h-full transition-all duration-250 hover:-translate-y-1 ${
                  s.highlight
                    ? 'bg-[#C0392B] border-[#9B2335] hover:bg-[#9B2335]'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-[#F5C518]/30'
                }`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wider mb-3">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[#F5C518] text-[11px] font-bold uppercase tracking-wider">
                  {s.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.1em] mb-4">
            Got an event coming up?
          </p>
          <ScrollButton targetId="contact" variant="primary">Get a Quote</ScrollButton>
        </FadeIn>
      </div>
    </section>
  );
}
