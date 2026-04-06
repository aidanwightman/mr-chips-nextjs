const links = ['menu', 'about', 'catering', 'gallery', 'contact'];

export default function Footer() {
  return (
    <footer className="bg-[#2B161B] pt-20 pb-0">
      <div className="max-w-[1240px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 pb-16 border-b border-white/10">

          <div>
            {/* Poptata-style large italic brand name in footer */}
            <div className="font-[family-name:var(--font-playfair)] italic font-black text-[#F5C518] leading-none mb-5"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Mr Chips.
            </div>
            <p className="text-white/40 text-sm leading-[1.8] max-w-[280px] mb-7">
              Notting Hill&apos;s finest chips since 2018. Find us at Portobello Market or book us for your next event.
            </p>
            <div className="flex gap-3">
              {[['IG', 'Instagram'], ['FB', 'Facebook'], ['TK', 'TikTok']].map(([short, label]) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#F5C518] hover:text-[#2B161B] transition-all text-xs font-bold">
                  {short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-playfair)] italic font-bold text-white text-xl mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l}>
                  <a href={`#${l}`}
                    className="text-white/40 text-sm capitalize hover:text-[#F5C518] transition-colors">
                    {l === 'contact' ? 'Book Now' : l.charAt(0).toUpperCase() + l.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-playfair)] italic font-bold text-white text-xl mb-6">
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-7 text-white/20 text-xs">
          <p>© 2026 Mr Chips London. All rights reserved.</p>
          <p>Built by <a href="https://a.dev" target="_blank" rel="noopener noreferrer" className="text-[#F5C518] hover:underline">a.dev</a></p>
        </div>
      </div>
    </footer>
  );
}
