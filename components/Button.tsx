import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "black";
  //   size?: 'sm' | 'md' | 'lg';
  target?: string;
}

const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  //   size = 'md'
  target = "_self",
}: ButtonProps) => {
  const baseStyles =
    "px-[35px] h-[50px] md:h-[64px] flex items-center justify-center md:text-[20px] leading-[34.07px] rounded-[751.58px] transition-all duration-700 text-center w-fit whitespace-nowrap";

  const variants = {
    primary: "bg-primary text-black hover:bg-primary/60",
    secondary: "bg-secondary! text-black hover:bg-secondary/40",
    outline:
      "border border-black/10 bg-white/20 backdrop-blur-sm text-black hover:bg-white/30",
    black: "bg-black text-white hover:bg-black/90",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px] uppercase tracking-wider",
    md: "px-8 py-3 text-xs uppercase tracking-wider",
    lg: "px-14 py-5 text-sm uppercase tracking-wider hover:scale-105",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]}  ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
