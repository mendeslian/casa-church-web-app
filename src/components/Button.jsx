export default function Button({
  children,
  onClick,
  style = 1,
  size = "md",
  disabled = false,
  className = "",
}) {
  const baseStyles =
    "font-medium transition-all duration-300 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

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

  const variantClass = variants[style] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
