import { useCreatePost } from "../hooks/usePosts";
import PostForm from "../components/PostForm";
import Layout from "../components/Layout";

const Create = () => {
  const createPost = useCreatePost();
  return (
    <Layout>
      <PostForm onSubmit={(data) => createPost.mutate({ ...data, userId: 1 })} />
    </Layout>
  );
};
export default Create;