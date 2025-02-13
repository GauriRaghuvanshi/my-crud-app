import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";
import Loading from "../components/Loading";

const Home = () => {
  const { data: posts, isLoading } = usePosts();
  if (isLoading) return <Loading />;
  return (
    <Layout>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} onEdit={() => console.log("Edit", post.id)} />
      ))}
    </Layout>
  );
};
export default Home;