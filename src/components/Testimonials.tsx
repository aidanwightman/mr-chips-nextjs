import FadeIn from './FadeIn';

const reviews = [
  {
    stars: 5,
    text: "The halloumi fries are absolutely incredible. I've dragged everyone I know to this stall. Worth every penny and the queue — always worth the queue.",
    author: 'Sarah M.',
    role: 'Google Review · 5 stars',
  },
  {
    stars: 5,
    text: "Danilo catered our wedding and it was hands-down the best decision we made. Every single guest raved about the chips. An absolute legend.",
    author: 'James & Priya K.',
    role: 'Wedding Catering · 5 stars',
    featured: true,
  },
  {
    stars: 5,
    text: "We had Mr Chips at our festival for the second year running. The crowd goes wild every time the stall opens. Non-stop queues from open to close.",
    author: 'Tom H.',
    role: 'Festival Organiser · 5 stars',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <FadeIn className="mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C0392B] mb-3">
            Don&apos;t Take Our Word For It
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wider">
            What People Say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          {reviews.map((r, i) => (
            <FadeIn key={r.author} delay={i * 100}>
              <div
                className={`rounded-3xl p-8 flex flex-col gap-4 border h-full transition-all duration-250 hover:-translate-y-1 hover:shadow-2xl ${
                  r.featured
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] md:-translate-y-3'
                    : 'bg-[#FFF8E7] border-[#F5EDD0]'
                }`}
              >
                <p className="text-[#F5C518] text-sm tracking-widest">{'★'.repeat(r.stars)}</p>
                <p className={`text-sm leading-[1.75] flex-1 ${r.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className={`border-t pt-4 ${r.featured ? 'border-white/10' : 'border-black/10'}`}>
                  <strong className={`block text-sm font-bold ${r.featured ? 'text-[#F5C518]' : 'text-[#1A1A1A]'}`}>
                    {r.author}
                  </strong>
                  <span className={`text-xs ${r.featured ? 'text-white/40' : 'text-gray-400'}`}>
                    {r.role}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <p className="text-gray-400 text-sm">
            ★ Rated 5 stars on Google ·{' '}
            <a
              href="https://mrchipsuk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] font-bold hover:underline"
            >
              See all reviews
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
