export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-white/90 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-white/5 border rounded-lg py-3 px-4 ${
            Icon ? "pl-12" : ""
          } text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:border-neutral-500 focus:bg-white/10 ${
            error ? "border-red-500/50" : "border-white/10"
          }`}
        />
      </div>
      {error && <p className="text-red-500/80 text-sm mt-2">{error}</p>}
    </div>
  );
}
