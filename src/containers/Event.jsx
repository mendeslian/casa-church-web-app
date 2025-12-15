import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Info,
  Tag,
} from "lucide-react";

// services
import { findEventById } from "../services/events/eventsService";

// components
import Button from "../components/Button";
import Loader from "../components/Loader";

export default function Event() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: () => findEventById(id),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const event = data || null;

  const handleBack = () => {
    window.history.back();
  };

  const getEventDuration = () => {
    if (!event?.startDate || !event?.endDate) return null;
    if (event.startDate === event.endDate) return "1 dia";
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0
      ? `${diffDays} ${diffDays === 1 ? "dia" : "dias"}`
      : "Mesmo dia";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f1115] text-white flex items-center justify-center">
        <Loader type="ClipLoader" size={48} loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <main>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button icon="ArrowLeft" iconSize={16} onClick={handleBack} style={1}>
            Voltar
          </Button>
          <p className="text-white/60 text-sm mt-4 select-none">
            <span className="cursor-default transition-colors">Eventos</span>
            {" / "}
            <span className="text-white">{event?.title}</span>
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-0 items-start">
            <div className="relative">
              <div
                className="w-full h-80 rounded-xl overflow-hidden border border-white/10"
                style={{
                  backgroundImage: `url('${(event?.image || "")
                    .replace(/[`"]/g, "")
                    .trim()}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="absolute top-4 right-4 bg-[#0f1115]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="text-sm font-medium text-white">
                  Inscrições Abertas
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={16} className="text-white/60" />
                  <span className="text-sm text-white/60">
                    Categoria: Evento Geral
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  {event?.title}
                </h1>

                <p className="text-white/70 text-base mb-6 leading-relaxed">
                  {event?.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={18} className="text-white/60" />
                      <span className="text-xs text-white/60 uppercase tracking-wider">
                        Data
                      </span>
                    </div>
                    <p className="text-sm text-white font-medium">
                      {event?.startDate}
                    </p>
                    {event?.endDate && event?.endDate !== event?.startDate && (
                      <p className="text-xs text-white/60 mt-1">
                        até {event?.endDate}
                      </p>
                    )}
                  </div>

                  {getEventDuration() && (
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-white/60" />
                        <span className="text-xs text-white/60 uppercase tracking-wider">
                          Duração
                        </span>
                      </div>
                      <p className="text-sm text-white font-medium">
                        {getEventDuration()}
                      </p>
                    </div>
                  )}
                </div>

                <Button size="lg" className="w-full">
                  Inscrever-se no Evento
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 mt-6 flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg p-4">
              <Info size={16} className="text-white/60 mt-0.5 shrink-0" />
              <p className="text-xs text-white/70">
                Ao se inscrever, você receberá confirmação por email com mais
                detalhes sobre o evento.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              Sobre o Evento
            </h2>
            <p className="text-white/80 leading-relaxed">
              {event?.description}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              Localização
            </h2>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-white/60 mt-1 shrink-0" />
              <div>
                <p className="text-white/80">
                  Informações de localização indisponíveis.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  As informações de local serão enviadas após a confirmação da
                  inscrição.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29463.606992865807!2d-43.2461818!3d-22.6183096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990b83903f4529%3A0x913b11ec1f7eee0b!2sTaquara%2C%20Duque%20de%20Caxias%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1765671518718!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            Detalhes do Evento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Criado em
              </p>
              <p className="text-white text-lg font-medium">
                {event?.createdAt
                  ? new Date(event.createdAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "-"}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Última atualização
              </p>
              <p className="text-white text-lg font-medium">
                {event?.updatedAt
                  ? new Date(event.updatedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "-"}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Participantes
              </p>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-white/60" />
                <p className="text-white text-lg font-medium">Em breve</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para participar?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de participar deste evento. Inscreva-se
              agora e garanta sua vaga!
            </p>
            <Button size="lg">Inscrever-se no Evento</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
