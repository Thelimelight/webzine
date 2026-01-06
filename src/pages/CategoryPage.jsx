import { useParams } from "react-router-dom"
import { useCategoryPosts } from "../api/hooks"
import PostCard from "../components/PostCard"

export default function CategoryPage() {
  const { slug } = useParams()

  const {
    data,
    isLoading,
    isError
  } = useCategoryPosts(slug)

  const posts = data?.posts || []
  const categoryName = data?.category?.name || "Category"

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        📚 <span>{categoryName} Writings</span>
      </h1>

      {isLoading && (
        <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg shadow-sm">
          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></span>
          <p className="text-lg">Loading posts...</p>
        </div>
      )}

      {!isLoading && isError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center shadow-sm">
          <p className="text-red-700 font-semibold">
            Failed to load category
          </p>
        </div>
      )}
      

      {!isLoading && !isError && posts.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center shadow-sm">
          <span className="text-3xl">📝</span>
          <p className="text-gray-800 mt-2 font-semibold">
            No posts found in this category
          </p>
          <p className="text-gray-500 text-sm">
            Check back later for new articles.
          </p>
        </div>
      )}

      {!isLoading && !isError && posts.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
