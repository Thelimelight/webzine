import { useNavigate } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export default function PostCard({ post }) {
  const navigate = useNavigate(); 
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 mb-4 lg:mb-6">

      {/* Image */}
      {post.image && (
        <img
          src={`${API_BASE_URL}/uploads/${post.image}`}
          alt={post.title}
          crossOrigin="anonymous"
          className="h-48 w-full  transition-transform duration-300 hover:scale-105"
        />
      )}

      {/* Content */}
      <div className="p-5">
        {/* Category Tag */}
        {post.category?.name && ( 
        <span className="inline-block bg-[#a01446]/10 text-[#a01446] text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          {post.category.name}
        </span>
        )}

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2 hover:text-[#a01446] transition-colors duration-200">
          {post.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-4">By {post.author}</p>

        {/* Button */}
        <button
          className="w-full bg-[#a01446] hover:bg-[#851039] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          onClick={() => navigate(`/post/${post._id}`)}
        >
          Read More →
        </button>
      </div>
    </div>

  )
}