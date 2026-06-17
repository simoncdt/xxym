import { useLang } from "@/i18n/LangProvider";

export function ManifestoSection() {
  const { t } = useLang();
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
              — {t.home.manifestoTitle}
            </div>
            <div className="mt-6 hidden lg:block">
              <Sigil />
            </div>
          </div>
          <blockquote className="font-display text-3xl font-medium leading-[1.18] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-gradient-brand">«</span>{" "}
            {t.home.manifesto}{" "}
            <span className="text-gradient-brand">»</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Sigil() {
  const womenAngles = [0, 60, 120, 180, 240, 300];
  return (
    <svg viewBox="0 0 200 200" className="h-72 w-72" aria-hidden="true">
      <defs>
        <linearGradient id="grad-sigil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.56 0.24 350)" />
          <stop offset="100%" stopColor="oklch(0.38 0.18 300)" />
        </linearGradient>
      </defs>

      
      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad-sigil)" strokeWidth="1.2" opacity="0.35" />

      
      {womenAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 72 * Math.sin(rad);
        const cy = 100 - 72 * Math.cos(rad);
        return (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            
            <circle cx="0" cy="-9" r="4" fill="url(#grad-sigil)" opacity="0.9" />
            
            <path d="M0,-5 L-4,5 L4,5 Z" fill="url(#grad-sigil)" opacity="0.75" />
            
            <path d="M-4,4 L-7,13 L7,13 L4,4 Z" fill="url(#grad-sigil)" opacity="0.55" />
          </g>
        );
      })}

      
      <line x1="100" y1="128" x2="100" y2="88" stroke="url(#grad-sigil)" strokeWidth="2.2" strokeLinecap="round" />

      
      <path d="M100,112 Q82,96 88,78 Q97,92 100,104" fill="url(#grad-sigil)" opacity="0.85" />
      
      <path d="M100,106 Q118,90 112,72 Q103,86 100,98" fill="url(#grad-sigil)" opacity="0.85" />

      
      <ellipse cx="100" cy="130" rx="6" ry="4.5" fill="url(#grad-sigil)" opacity="0.95" />

      
      <path d="M100,134 Q93,141 89,148" stroke="url(#grad-sigil)" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M100,134 L100,150" stroke="url(#grad-sigil)" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M100,134 Q107,141 111,148" stroke="url(#grad-sigil)" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}


