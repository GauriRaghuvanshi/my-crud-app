import { useDeletePost } from "../hooks/usePosts";

const PostCard = ({ post, onEdit }) => {
  const deletePost = useDeletePost();
  return (
    <div className="card bg-base-100 shadow-md p-4 my-2">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <div className="flex justify-between mt-2">
        <button className="btn btn-primary" onClick={() => onEdit(post)}>Edit</button>
        <button className="btn btn-error" onClick={() => deletePost.mutate(post.id)}>Delete</button>
      </div>
    </div>
  );
};
export default PostCard;