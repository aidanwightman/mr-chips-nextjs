const items = [
  'Classic Chips', 'Halloumi Fries', 'Sweet Potato', 'Southern Fried Chicken',
  'Truffle Mayo', 'Whiskey Sauce', 'Portobello Market', 'Festival Catering', 'Wedding Catering',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#F5C518] overflow-hidden py-4" aria-hidden="true">
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap marquee-animate flex-shrink-0">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center font-[family-name:var(--font-bebas)] text-lg tracking-widest text-[#1A1A1A]">
              <span className="px-5">{item}</span>
              <span className="text-[#C0392B] px-1">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
