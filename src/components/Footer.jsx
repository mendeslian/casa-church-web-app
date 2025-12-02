import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-12 text-white">
      <div className="flex flex-col items-center gap-8">
        <Link
          to="#top"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5"
        >
          ↑
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-white/80">
          <Link to="/sobre" className="hover:text-white">
            Sobre Nós
          </Link>
          <Link to="/eventos" className="hover:text-white">
            Eventos
          </Link>
          <Link to="/sermoes" className="hover:text-white">
            Sermões
          </Link>
          <Link to="/contato" className="hover:text-white">
            Contato
          </Link>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p className="text-xs text-white/60">
          Casa Church Global — Todos os direitos reservados
        </p>
      </div>
    </section>
  );
}
