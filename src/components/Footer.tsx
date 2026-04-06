const links = ['menu', 'about', 'catering', 'gallery', 'contact'];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] pt-20 pb-0">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 pb-16 border-b border-white/10">

          <div>
            <div className="font-[family-name:var(--font-bebas)] text-[2.2rem] tracking-wider leading-none mb-4">
              <span className="text-white">Mr</span>
              <span className="text-[#F5C518]">Chips</span>
            </div>
            <p className="text-white/40 text-sm leading-[1.7] max-w-[280px] mb-6">
              Notting Hill&apos;s finest chips since 2018. Find us at Portobello Market or book us for your next event.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'TikTok'].map(s => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#F5C518] hover:text-[#1A1A1A] transition-all text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-bebas)] text-xl text-white tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map(l => (
                <li key={l}>
                  <a
                    href={`#${l}`}
                    className="text-white/40 text-sm capitalize hover:text-[#F5C518] transition-colors"
                  >
                    {l === 'contact' ? 'Book Now' : l.charAt(0).toUpperCase() + l.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-bebas)] text-xl text-white tracking-wider mb-5">
              Find Us
            </h4>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Portobello Road Market<br />Notting Hill, London
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              <strong className="text-white/70">Thu – Sun</strong><br />
              Market opening hours
            </p>
            <a href="tel:+447867850713" className="text-white/40 text-sm hover:text-[#F5C518] transition-colors block mb-1">
              +44 786 785 0713
            </a>
            <a href="mailto:danilo@mrchipslondon.co.uk" className="text-white/40 text-sm hover:text-[#F5C518] transition-colors block">
              danilo@mrchipslondon.co.uk
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-6 text-white/25 text-xs">
          <p>© 2026 Mr Chips London. All rights reserved.</p>
          <p>
            Built by{' '}
            <a href="https://a.dev" target="_blank" rel="noopener noreferrer" className="text-[#F5C518] hover:underline">
              a.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
