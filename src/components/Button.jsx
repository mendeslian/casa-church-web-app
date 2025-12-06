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
        {/* Primeira página */}
        <Button
          size="sm"
          style={2}
          disabled={current === 1}
          onClick={() => goTo(1)}
          icon="ChevronsLeft"
          iconSize={16}
          className="w-9! h-9! p-0!"
        />

        {/* Página anterior */}
        <Button
          size="sm"
          style={2}
          disabled={current === 1}
          onClick={() => goTo(current - 1)}
          icon="ChevronLeft"
          iconSize={16}
          className="w-9! h-9! p-0!"
        />

        {/* Reticências inicial */}
        {start > 1 && (
          <span className="w-9 h-9 flex items-center justify-center text-white/40 text-sm">
            ...
          </span>
        )}

        {/* Números das páginas */}
        {pages.map((p) => (
          <Button
            key={p}
            size="sm"
            style={p === current ? 1 : 2}
            onClick={() => goTo(p)}
            className={`w-9! h-9! p-0! ${
              p === current ? "shadow-lg shadow-white/20" : ""
            }`}
          >
            {p}
          </Button>
        ))}

        {/* Reticências final */}
        {end < total && (
          <span className="w-9 h-9 flex items-center justify-center text-white/40 text-sm">
            ...
          </span>
        )}

        {/* Próxima página */}
        <Button
          size="sm"
          style={2}
          disabled={current === total}
          onClick={() => goTo(current + 1)}
          icon="ChevronRight"
          iconSize={16}
          className="w-9! h-9! p-0!"
        />

        {/* Última página */}
        <Button
          size="sm"
          style={2}
          disabled={current === total}
          onClick={() => goTo(total)}
          icon="ChevronsRight"
          iconSize={16}
          className="w-9! h-9! p-0!"
        />
      </div>

      {/* <p className="text-xs text-white/50">
        Página {current} de {total}
      </p> */}
    </div>
  );
}
