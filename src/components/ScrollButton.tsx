'use client';

interface Props {
  targetId: string;
  variant: 'primary' | 'outline';
  children: React.ReactNode;
}

export default function ScrollButton({ targetId, variant, children }: Props) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const nav = document.querySelector('nav');
    const offset = (nav?.offsetHeight ?? 72) + 8;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  const base = 'inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl border-2';

  const variants = {
    primary: 'bg-[#F5C518] border-[#F5C518] text-[#1A1A1A] hover:bg-[#D4A017] hover:border-[#D4A017]',
    outline: 'bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]',
  };

  return (
    <button onClick={handleClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
