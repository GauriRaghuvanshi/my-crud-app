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
  const post = posts?.find((p) => p.id == id);

  if (isLoading || !post) return <Loading />;

  return (
    <Layout>
      <PostForm onSubmit={(data) => updatePost.mutate({ id, post: data })} defaultValues={post} />
    </Layout>
  );
};
export default EditPost;