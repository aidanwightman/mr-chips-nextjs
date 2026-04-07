type DividerProps = {
  from: string; // colour of the section above
  to: string;   // colour of the section below
  flip?: boolean;
};

export default function Divider({ from, to, flip = false }: DividerProps) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: '72px', transform: flip ? 'scaleX(-1)' : undefined }}
        aria-hidden="true"
      >
        {/* Organic S-wave — bottom fill is the "to" colour */}
        <path
          d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
