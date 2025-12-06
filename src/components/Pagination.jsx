import Button from "./Button";

export default function Pagination({ page = 1, totalPages = 1, onPageChange }) {
  const current = Number(page) || 1;
  const total = Number(totalPages) || 1;
  const start = Math.max(1, current - 2);
  const end = Math.min(total, current + 2);
  const pages = [];
  for (let p = start; p <= end; p++) pages.push(p);

  const goTo = (p) => {
    if (!onPageChange) return;
    const next = Math.min(Math.max(1, p), total);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    onPageChange(next);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <div className="flex items-center gap-1.5">
        <button
          disabled={current === 1}
          onClick={() => goTo(1)}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 border border-white/10 hover:border-white/20 disabled:hover:bg-transparent disabled:hover:border-white/10"
          aria-label="Primeira página"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          disabled={current === 1}
          onClick={() => goTo(current - 1)}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 border border-white/10 hover:border-white/20 disabled:hover:bg-transparent disabled:hover:border-white/10"
          aria-label="Página anterior"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {start > 1 && (
          <span className="w-9 h-9 flex items-center justify-center text-white/40 text-sm">
            ...
          </span>
        )}

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 border ${
              p === current
                ? "bg-white text-black border-white shadow-lg shadow-white/20"
                : "border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
            aria-label={`Página ${p}`}
            aria-current={p === current ? "page" : undefined}
          >
            {p}
          </button>
        ))}

        {end < total && (
          <span className="w-9 h-9 flex items-center justify-center text-white/40 text-sm">
            ...
          </span>
        )}

        <button
          disabled={current === total}
          onClick={() => goTo(current + 1)}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 border border-white/10 hover:border-white/20 disabled:hover:bg-transparent disabled:hover:border-white/10"
          aria-label="Próxima página"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button
          disabled={current === total}
          onClick={() => goTo(total)}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 border border-white/10 hover:border-white/20 disabled:hover:bg-transparent disabled:hover:border-white/10"
          aria-label="Última página"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* <p className="text-xs text-white/50">
        Página {current} de {total}
      </p> */}
    </div>
  );
}
