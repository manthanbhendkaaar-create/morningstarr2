import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/morningstarai-logo.png";
const LOGO_ALT = "MorningstarrAI Logo";

interface LogoMarkProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

/** Square logo mark — preserves aspect ratio, optimized for retina */
export function LogoMark({ size = 32, className, priority = false }: LogoMarkProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={cn("object-contain shrink-0", className)}
      style={{ width: size, height: size }}
    />
  );
}

interface BrandLogoProps {
  showWordmark?: boolean;
  markSize?: number;
  className?: string;
  wordmarkClassName?: string;
  priority?: boolean;
}

/** Header/footer brand lockup: logo mark + optional wordmark text */
export function BrandLogo({
  showWordmark = true,
  markSize = 32,
  className,
  wordmarkClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark size={markSize} priority={priority} />
      {showWordmark && (
        <span className={cn("font-bold text-lg tracking-tight", wordmarkClassName)}>
          MORNINGSTARR<span className="text-accent-blue">AI</span>
        </span>
      )}
    </span>
  );
}
