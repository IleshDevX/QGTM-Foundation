const logoUrl = "/__l5e/assets-v1/73e63555-2ff2-4a4d-8c62-9ae723eff09b/qgtm-logo-transparent.png";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`group inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="QGTM Consulting"
        className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </span>
  );
}
