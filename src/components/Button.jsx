import * as LucideIcons from "lucide-react";

export default function Button({
  children,
  onClick,
  style = 1,
  size = "md",
  disabled = false,
  className = "",
  icon = null,
  iconPosition = "left",
  iconSize = 18,
  iconStrokeWidth = 2,
  fullWidth = false,
}) {
  const baseStyles =
    "font-medium transition-all duration-300 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

  const variants = {
    1: "bg-white text-black hover:bg-gray-100 focus:ring-white",
    2: "bg-white/10 text-white hover:bg-white/20",
    3: "text-white hover:text-gray-300 underline focus:ring-white",
  };

  const sizes = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const iconOnlySizes = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const variantClass = variants[style] || variants.primary;
  const sizeClass = children ? sizes[size] || sizes.md : iconOnlySizes[size];

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      const IconComponent = LucideIcons[icon];
      if (!IconComponent) {
        console.warn(`Ícone "${icon}" não encontrado no lucide-react`);
        return null;
      }
      return <IconComponent size={iconSize} strokeWidth={iconStrokeWidth} />;
    }

    return icon;
  };

  const iconElement = renderIcon();

  const renderContent = () => {
    if (!children) {
      return iconElement;
    }

    if (iconElement) {
      return iconPosition === "left" ? (
        <>
          {iconElement}
          {children}
        </>
      ) : (
        <>
          {children}
          {iconElement}
        </>
      );
    }

    return children;
  };

  return (
    <button
      className={`${baseStyles} ${variantClass} ${sizeClass} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={!children && icon ? `${icon} button` : ""}
    >
      {renderContent()}
    </button>
  );
}
