import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  name,
  value,
  showPassword,
  onToggle,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-white/90 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
          <Lock size={20} />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-white/5 border rounded-lg py-3 px-4 pl-12 pr-12 text-white placeholder-white/40 transition-all duração-300 focus:outline-none focus:border-neutral-500 focus:bg-white/10 ${
            error ? "border-red-500/50" : "border-white/10"
          }`}
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500/80 text-sm mt-2">{error}</p>}
    </div>
  );
}
