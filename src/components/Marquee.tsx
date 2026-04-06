const items = [
  'Classic Chips', 'Halloumi Fries', 'Sweet Potato', 'Southern Fried Chicken',
  'Truffle Mayo', 'Whiskey Sauce', 'Portobello Market', 'Festival Catering', 'Wedding Catering',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#2B161B] overflow-hidden py-5 border-y-4 border-[#F5C518]" aria-hidden="true">
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap marquee-animate flex-shrink-0">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-[family-name:var(--font-playfair)] italic text-[#F5C518] px-6"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}>
                {item}
              </span>
              <span className="text-[#C0392B] text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
