import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0f1115] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          CAS&gt;
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="text-white/80 hover:text-white">
            Início
          </Link>
          <Link to="/sobre" className="text-white/80 hover:text-white">
            Sobre Nós
          </Link>
          <Link to="/social" className="text-white/80 hover:text-white">
            Social
          </Link>
          <Link to="/sermoes" className="text-white/80 hover:text-white">
            Sermões
          </Link>
          <Link to="/eventos" className="text-white/80 hover:text-white">
            Eventos
          </Link>
          <Link to="/contato" className="text-white/80 hover:text-white">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-medium"
          >
            Entrar
          </Link>
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5" />
        </div>
      </div>
    </header>
  );
}
