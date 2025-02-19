import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";
import Loading from "../components/Loading";

const Home = () => {
  const { data: posts, isLoading } = usePosts();
  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">All Posts</h2>
        {posts?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onEdit={() => console.log("Edit", post.id)} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
