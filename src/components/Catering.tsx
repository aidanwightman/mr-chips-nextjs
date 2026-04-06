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
    desc: 'We thrive in the festival environment. Fast service, massive portions, and energy that matches the crowd.',
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
    <section id="catering" className="bg-[#2B161B] overflow-hidden">

      {/* Poptata-style: full-width typographic banner */}
      <div className="border-b border-white/10 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 md:px-16 py-24 md:py-36">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#F5C518] mb-5">
              We Go Where The Party Is
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] italic font-black text-white leading-[0.85]"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              Catering &<br />
              <span className="text-[#F5C518]">Events.</span>
            </h2>
          </FadeIn>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-[1240px] mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <div className={`rounded-2xl p-8 h-full transition-all duration-250 hover:-translate-y-1 border ${
                s.highlight
                  ? 'bg-[#F5C518] border-[#D4A017]'
                  : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-[#F5C518]/30'
              }`}>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className={`font-[family-name:var(--font-playfair)] italic font-bold mb-3 ${s.highlight ? 'text-[#2B161B]' : 'text-white'}`}
                  style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${s.highlight ? 'text-[#2B161B]/70' : 'text-white/55'}`}>
                  {s.desc}
                </p>
                <p className={`text-[11px] font-bold uppercase tracking-wider ${s.highlight ? 'text-[#C0392B]' : 'text-[#F5C518]'}`}>
                  {s.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center pt-4 border-t border-white/10">
          <p className="text-white/35 text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Got an event coming up?
          </p>
          <ScrollButton targetId="contact" variant="primary">Get a Quote</ScrollButton>
        </FadeIn>
      </div>

    </section>
  );
}
