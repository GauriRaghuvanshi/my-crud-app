import Layout from "../components/Layout";
import { usePosts } from "../hooks/usePosts";
import Loading from "../components/Loading";

const Home = () => {
  const { data: posts, isLoading } = usePosts();
  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">All Posts</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Body</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post) => (
                <tr key={post.id} className="text-center border">
                  <td className="border px-4 py-2">{post.id}</td>
                  <td className="border px-4 py-2">{post.title}</td>
                  <td className="border px-4 py-2">{post.body}</td>
                  <td className="border px-4 py-2">
                    <button className="btn btn-primary mx-2">Edit</button>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Home;