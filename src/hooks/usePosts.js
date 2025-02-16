import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, addPost, updatePost, deletePost } from "../utils/api";

export const usePosts = () => useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, post }) => updatePost(id, post),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};
