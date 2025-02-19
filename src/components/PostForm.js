import { useCreatePost } from "../hooks/usePosts";
import Layout from "../components/Layout";
import { useState } from "react";

const Create = () => {
  const createPost = useCreatePost();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost.mutate({ title, body, userId: 1 });
    setTitle("");
    setBody("");
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input input-bordered w-full"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <button type="submit" className="btn btn-success w-full">Add Post</button>
        </form>
      </div>
    </Layout>
  );
};
export default Create;