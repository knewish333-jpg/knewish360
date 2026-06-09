import logoImage from "@vasset/logo.tsx";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  iconOnly?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true, iconOnly = false }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-7 h-7 md:w-8 md:h-8", text: "text-lg md:text-xl" },
    md: { icon: "w-9 h-9 md:w-10 md:h-10", text: "text-xl md:text-2xl" },
    lg: { icon: "w-12 h-12 md:w-14 md:h-14", text: "text-2xl md:text-3xl" },
  };

  const { icon, text } = sizes[size];

  if (iconOnly) {
    return (
      <img 
        src={logoImage} 
        alt="Knewish360" 
        className={`${icon} object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoImage} 
        alt="Knewish360 Logo" 
        className={`${icon} object-contain flex-shrink-0`}
      />
      {showText && (
        <span className={`font-bold text-foreground ${text}`}>
          Knewish<span className="text-primary">360</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
