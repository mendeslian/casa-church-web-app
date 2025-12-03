import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Events() {
  const navigate = useNavigate();

  const churchImages = [
    "photo-1582731321099-ba22b05607c4",
    "photo-1508829040592-72f179f8a73f",
    "photo-1506905925346-21bda4d32df4",
    "photo-1478147427282-58a87a120781",
    "photo-1529070538774-1843cb3265df",
    "photo-1517837016564-bfc3ffd67455",
    "photo-1477672680933-0287a151330e",
    "photo-1491396023581-4344e51fec5c",
  ];

  const getImageUrl = (eventId) => {
    const randomIndex = eventId % churchImages.length;
    const imageId = churchImages[randomIndex];
    return `https://images.unsplash.com/${imageId}?w=600&h=400&fit=crop&q=80`;
  };

  const events = [
    {
      id: 1,
      title: "Culto de Adoração",
      description: "Adoração e intercessão",
      available: true,
      fullDescription:
        "Venha participar de um momento de profunda conexão espiritual com Deus através da adoração e intercessão.",
      day: "Quarta-feira",
      time: "19h30",
    },
    {
      id: 2,
      title: "Culto Dominical - Manhã",
      description: "Adoração e intercessão",
      available: true,
      fullDescription:
        "Domingo pela manhã com pregação da Palavra e comunhão fraterna.",
      day: "Domingo",
      time: "9h",
    },
    {
      id: 3,
      title: "Culto Dominical - Noite",
      description: "Adoração e intercessão",
      available: true,
      fullDescription: "Domingo à noite para repouso e renovação espiritual.",
      day: "Domingo",
      time: "18h",
    },
    {
      id: 4,
      title: "Grupo de Oração",
      description: "Adoração e intercessão",
      available: true,
      fullDescription:
        "Encontros intimistas para oração intercessória e busca da presença de Deus.",
      day: "Sob agendamento",
      time: "A combinar",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex flex-col">
      <main className="flex-1">
        <section className="max-w-screen-xl mx-auto px-4 mt-12 pb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Eventos</h1>
          <p className="mt-4 mb-8 text-white/80 text-sm sm:text-base">
            Confira nossos eventos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[600px]">
            {events.map((event) => (
              <div
                key={event.id}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 flex flex-col h-full"
              >
                <div
                  className="h-48 group-hover:scale-105 duration-300 transition-transform flex-shrink-0 bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${getImageUrl(event.id)}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-lg font-semibold group-hover:text-white transition-colors mb-2">
                    {event.title}
                  </p>
                  <p className="text-xs text-white/60 mb-4">
                    {event.description}
                  </p>
                  <div className="text-xs text-white/70 mb-4 flex-grow">
                    <p className="mb-1">
                      <span className="text-white/50">Dia:</span> {event.day}
                    </p>
                    <p>
                      <span className="text-white/50">Horário:</span>{" "}
                      {event.time}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate(`/evento/${event.id}`)}
                    size="sm"
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
