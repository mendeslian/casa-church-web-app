import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import Button from "./Button";
import Avatar from "./Avatar";

// assets
import LogoName from "../assets/logo-name.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="min-h-16 border-b border-white/10 bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <img
            src={LogoName}
            alt="Logo Casa Church"
            width={120}
            draggable={false}
            className="select-none"
          />
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
          <Button onClick={() => navigate("/login")}>Entrar</Button>
          <Avatar name="Diego Borda Castro" size="sm" />
        </div>
      </div>
    </header>
  );
}
