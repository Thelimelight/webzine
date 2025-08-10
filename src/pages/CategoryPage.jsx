import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchPosts } from "../services/api"
import PostCard from "../components/PostCard"

export default function CategoryPage() {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const data = await fetchPosts(id);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching category posts: ', err);
                setPosts([]);
            } finally {
                setLoading(false)
            }
        };
        getPosts();
    }, [id]);

    return (
<div className="max-w-6xl mx-auto px-6 py-10">
  {/* Header */}
  <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    📚 <span>Category Writings</span>
  </h1>

  {/* Loader */}
  {loading ? (
    <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg shadow-sm">
      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></span>
      <p className="text-lg">Loading posts...</p>
    </div>
  ) : posts.length === 0 ? (
    /* Empty State */
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center shadow-sm">
      <span className="text-3xl">📝</span>
      <p className="text-gray-800 mt-2 font-semibold">No posts found in this category</p>
      <p className="text-gray-500 text-sm">Check back later for new articles.</p>
    </div>
  ) : (
    /* Posts Grid */
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )}
</div>

    )
}

    // useEffect(() => {
    //     fetchPosts(id).then(setPosts);
    // }, [])

            //   <div className="grid gap-4">
            //     {posts.map((post) => (
            //         <PostCard key={post._id} post={post} />
            //     ))}
            // </div>