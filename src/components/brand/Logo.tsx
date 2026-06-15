import { Link } from "@tanstack/react-router";
import logoNoir from "@/assets/logo-noir.png";
import logoBlanc from "@/assets/logo-blanc.png";
import logoViolet from "@/assets/logo-violet.png";
import logoJaune from "@/assets/logo-jaune.png";

type Variant = "dark" | "light" | "violet" | "gold";
type Props = { variant?: Variant; compact?: boolean; className?: string; noLink?: boolean };

const srcMap: Record<Variant, string> = {
  dark: logoNoir,
  light: logoBlanc,
  violet: logoViolet,
  gold: logoJaune,
};


export function Logo({ variant = "dark", compact = false, className = "" }: Props) {
  const src = srcMap[variant];
  const h = compact ? "h-8" : "h-10 sm:h-11";

  return (
    <Link to="/" className={`group inline-block ${className}`} aria-label="XOYAM — Afro Women Workshops">
      <img
        src={src}
        alt="XOYAM — Afro Women Workshops"
        className={`${h} w-auto object-contain transition-opacity group-hover:opacity-85`}
      />
    </Link>
  );
}


