import { useState } from "react";
import { Heart, MessageCircle, Trash2, Send } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Avatar from "./Avatar";
import Button from "./Button";
import { createLike, deleteLike, findAllLikes } from "../services/likes/likesService";
import { createComment, findAllComments, deleteComment } from "../services/comments/commentsService";
import { deletePost } from "../services/posts/postsService";
import { toastSuccess, toastError } from "../utils/toastHelper";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Post({ post, onDelete, now}) {
  const [showComments, setShowComments] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const queryClient = useQueryClient();
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // Buscar likes
  const { data: likesData } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () => findAllLikes({ postId: post.id, limit: 100 }),
  });

  // Buscar comentários
  const { data: commentsData } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => findAllComments({ postId: post.id, limit: 100 }),
    enabled: showComments,
  });

  const userLike = likesData?.likes?.find(like => like.userId === currentUser.id);
  const isLiked = !!userLike;
  const likesCount = likesData?.likes?.length || 0;
  const commentsCount = commentsData?.comments?.length || 0;

  // Mutations
  const likeMutation = useMutation({
    mutationFn: createLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["likes", post.id]);
    },
    onError: (error) => {
      toastError(error?.response?.data?.message || "Erro ao curtir");
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: deleteLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["likes", post.id]);
    },
    onError: (error) => {
      toastError(error?.response?.data?.message || "Erro ao descurtir");
    },
  });

  const commentMutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", post.id]);
      setCommentContent("");
      toastSuccess("Comentário adicionado!");
    },
    onError: (error) => {
      toastError(error?.response?.data?.message || "Erro ao comentar");
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", post.id]);
      toastSuccess("Comentário excluído!");
    },
    onError: (error) => {
      toastError(error?.response?.data?.message || "Erro ao excluir");
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      toastSuccess("Post excluído com sucesso!");
      if (onDelete) onDelete();
    },
    onError: (error) => {
      toastError(error?.response?.data?.message || "Erro ao excluir post");
    },
  });

  const handleLike = () => {
    if (isLiked) {
      unlikeMutation.mutate(userLike.id);
    } else {
      likeMutation.mutate({ postId: post.id });
    }
  };

  const handleComment = () => {
    if (!commentContent.trim()) return;
    commentMutation.mutate({
      postId: post.id,
      content: commentContent.trim(),
    });
  };

  const handleDeletePost = () => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      deletePostMutation.mutate(post.id);
    }
  };

  const handleDeleteComment = (commentId) => {
    if (window.confirm("Tem certeza que deseja excluir este comentário?")) {
      deleteCommentMutation.mutate(commentId);
    }
  };

  const formatTime = (date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
    baseDate: new Date(now),
  });
};


  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
      {/* Header do Post */}
      <div className="flex items-start gap-3 mb-3">
        <Avatar name={post.user?.name || "Usuário"} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">{post.user?.name || "Usuário"}</p>
              <p className="text-xs text-white/50">{formatTime(post.createdAt)}</p>
            </div>
            {post.userId === currentUser.id && (
              <button
                onClick={handleDeletePost}
                className="text-white/50 hover:text-red-500 transition-colors p-2"
                disabled={deletePostMutation.isPending}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo do Post */}
      <p className="text-white/90 mb-4 whitespace-pre-wrap break-words">{post.content}</p>

      {/* Ações */}
      <div className="flex items-center gap-4 pt-3 border-t border-white/10">
        <button
          onClick={handleLike}
          disabled={likeMutation.isPending || unlikeMutation.isPending}
          className={`flex items-center gap-2 text-sm transition-colors ${
            isLiked ? "text-red-500" : "text-white/60 hover:text-red-500"
          }`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          <span>{likesCount}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-500 transition-colors"
        >
          <MessageCircle size={18} />
          <span>{commentsCount}</span>
        </button>
      </div>

      {/* Seção de Comentários */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
          {/* Campo para adicionar comentário */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Escreva um comentário..."
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleComment()}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
              maxLength={300}
            />
            <Button
              onClick={handleComment}
              loading={commentMutation.isPending}
              disabled={!commentContent.trim() || commentMutation.isPending}
              size="sm"
              icon="Send"
              iconSize={14}
            />
          </div>

          {/* Lista de Comentários */}
          {commentsData?.comments?.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <Avatar name={comment.user?.name || "Usuário"} size="sm" />
              <div className="flex-1 bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-white">
                    {comment.user?.name || "Usuário"}
                  </p>
                  {comment.userId === currentUser.id && (
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="text-white/50 hover:text-red-500 transition-colors"
                      disabled={deleteCommentMutation.isPending}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <p className="text-sm text-white/80 break-words">{comment.content}</p>
                <p className="text-xs text-white/40 mt-1">{formatTime(comment.createdAt)}</p>
              </div>
            </div>
          ))}

          {commentsData?.comments?.length === 0 && (
            <p className="text-sm text-white/40 text-center py-4">
              Nenhum comentário ainda. Seja o primeiro!
            </p>
          )}
        </div>
      )}
    </div>
  );
}