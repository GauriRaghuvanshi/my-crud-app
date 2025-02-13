import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchPosts, addPost, updatePost, deletePost } from "../utils/api";

export const usePosts = () => useQuery("posts", fetchPosts);

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, post }) => updatePost(id, post), {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });
};
