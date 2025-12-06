import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// components
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

// sevice
import { findAllEvents } from "../services/events/eventsService";

// utils
import { EventCard } from "../components/EventCard";

export default function Events() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const limit = 8;

  const { data, isLoading } = useQuery({
    queryKey: ["events", page, limit],
    queryFn: () => findAllEvents({ page, limit }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex flex-col">
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 mt-12 pb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Eventos</h1>
          <p className="mt-4 mb-8 text-white/80 text-sm sm:text-base">
            Confira nossos eventos
          </p>
          {isLoading ? (
            <div className="w-full min-h-[600px] flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[600px]">
                {data?.events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              <div className="mt-6">
                <Pagination
                  page={data?.page ?? page}
                  totalPages={data?.totalPages ?? 1}
                  onPageChange={(p) =>
                    setSearchParams((prev) => {
                      const sp = new URLSearchParams(prev);
                      sp.set("page", String(p));
                      return sp;
                    })
                  }
                />
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
