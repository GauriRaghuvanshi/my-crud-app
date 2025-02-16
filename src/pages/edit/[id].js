import { useRouter } from "next/router";
import { usePosts, useUpdatePost } from "../../hooks/usePosts";
import PostForm from "../../components/PostForm";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: posts, isLoading } = usePosts();
  const updatePost = useUpdatePost();

  if (isLoading) return <Loading />;
  if (!posts) return <p className="text-center">Post not found</p>;

  const post = posts.find((p) => p.id == id);
  if (!post) return <p className="text-center">Post not found</p>;

  return (
    <Layout>
      <PostForm onSubmit={(data) => updatePost.mutate({ id, post: data })} defaultValues={post} />
    </Layout>
  );
};
export default EditPost;
