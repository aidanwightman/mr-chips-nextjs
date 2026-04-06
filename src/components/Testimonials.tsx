import FadeIn from './FadeIn';

const reviews = [
  {
    stars: 5,
    text: "The halloumi fries are absolutely incredible. I've dragged everyone I know to this stall. Worth every penny and the queue — always worth the queue.",
    author: 'Sarah M.',
    role: 'Google Review',
  },
  {
    stars: 5,
    text: "Danilo catered our wedding and it was hands-down the best decision we made. Every single guest raved about the chips. An absolute legend.",
    author: 'James & Priya K.',
    role: 'Wedding Catering',
    featured: true,
  },
  {
    stars: 5,
    text: "We had Mr Chips at our festival for the second year running. The crowd goes wild every time the stall opens. Non-stop queues all day.",
    author: 'Tom H.',
    role: 'Festival Organiser',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-8 md:px-16">

        <FadeIn className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C0392B] mb-4">
            Don&apos;t Take Our Word For It
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic font-black text-[#2B161B] leading-[0.88]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            What People<br />Say.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
          {reviews.map((r, i) => (
            <FadeIn key={r.author} delay={i * 100}>
              <div className={`rounded-3xl p-8 md:p-10 flex flex-col gap-5 h-full transition-all duration-250 hover:-translate-y-1 hover:shadow-xl ${
                r.featured
                  ? 'bg-[#2B161B] md:-translate-y-4'
                  : 'bg-[#FFF8E7] border border-[#F5EDD0]'
              }`}>
                {/* Poptata-style large italic quote */}
                <p className={`font-[family-name:var(--font-playfair)] italic flex-1 leading-[1.6] ${
                  r.featured ? 'text-white/80' : 'text-[#645659]'
                }`} style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className={`border-t pt-5 flex items-center justify-between ${
                  r.featured ? 'border-white/10' : 'border-[#F5EDD0]'
                }`}>
                  <div>
                    <strong className={`block text-sm font-bold ${r.featured ? 'text-[#F5C518]' : 'text-[#2B161B]'}`}>
                      {r.author}
                    </strong>
                    <span className={`text-xs font-bold uppercase tracking-wider ${r.featured ? 'text-white/35' : 'text-[#645659]'}`}>
                      {r.role}
                    </span>
                  </div>
                  <span className="text-[#F5C518] text-sm tracking-wider">{'★'.repeat(r.stars)}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <p className="text-[#645659] text-sm">
            ★ Rated 5 stars on Google ·{' '}
            <a href="https://mrchipsuk.com" target="_blank" rel="noopener noreferrer"
              className="text-[#C0392B] font-bold hover:underline">
              See all reviews
            </a>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
