import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// components
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { EventCard } from "../components/EventCard";

// service
import { findAllEvents } from "../services/events/eventsService";

const EVENTS_PER_PAGE = 8;

export default function Events() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["events", page],
    queryFn: () => findAllEvents({ page, limit: EVENTS_PER_PAGE }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageChange = (newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

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

              <Pagination
                currentPage={page}
                totalPages={data?.totalPages ?? 1}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
