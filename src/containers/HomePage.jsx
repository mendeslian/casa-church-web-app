import { Link } from "react-router-dom";

export default function HomePage() {
  const tiles = [
    {
      title: "Nossa História",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      to: "/sobre",
    },
    {
      title: "Nossa Comunidade",
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      to: "/social",
    },
    {
      title: "Contato",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
      to: "/contato",
    },
    {
      title: "Localização",
      image:
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      to: "/localizacao",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <header className="border-b border-white/10 bg-[#0f1115]">
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

      <main>
        <section className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1706109576976-361ba78dcb56?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Interior de igreja"
              className="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Bem-vindo à Casa Church Global
              </h1>
              <p className="mt-3 text-white/80 text-sm sm:text-base">
                Você é bem-vindo aqui.
              </p>
              <Link
                to="/sobre"
                className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-semibold"
              >
                Junte-se a nós
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-white/80 text-sm">Próximo evento</p>
              <h3 className="mt-2 text-lg font-semibold">
                Descubra o que está acontecendo
              </h3>
              <Link
                to="/eventos"
                className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-medium"
              >
                Ver detalhes
              </Link>
            </div>

            <div className="md:col-span-2 rounded-xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
                alt="Convite de evento"
                className="w-full h-56 md:h-48 lg:h-56 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiles.map((t) => (
              <Link
                key={t.title}
                to={t.to}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="h-40">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium group-hover:text-white">
                    {t.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-base font-semibold">Dias de Culto</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Quarta-feira — 19h30</li>
              <li>Domingo — 9h e 18h</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold">Localização</h4>
            <p className="mt-3 text-white/80">Taquara — Duque de Caxias, RJ</p>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 mt-12">
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
      </main>
    </div>
  );
}
