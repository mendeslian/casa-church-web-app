import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { findAllPosts } from "../services/posts/postsService";

const POSTS_PER_PAGE = 10;

export default function Social() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: () =>
      findAllPosts({
        page,
        limit: POSTS_PER_PAGE,
        orderBy: "createdAt",
        orderDirection: "DESC",
      }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: String(newPage) });
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Social</h1>
          <p className="text-white/60">
            Compartilhe momentos e conecte-se com a comunidade
          </p>
        </div>

        {/* Criar Post */}
        <div className="mb-6">
          <CreatePost />
        </div>

        {/* Feed de Posts */}
        {isLoading ? (
          <div className="w-full min-h-[400px] flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {data?.posts?.length > 0 ? (
              <div className="space-y-4 mb-8">
                {data.posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="w-full min-h-[400px] flex flex-col items-center justify-center">
                <p className="text-white/50 mb-4">
                  Nenhum post ainda. Seja o primeiro a postar!
                </p>
              </div>
            )}

            {data?.totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={data.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}