import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const imageUrl =
    post.image?.url ||
    post.image?.secure_url ||
    "https://placehold.co/600x400?text=No+Image";

  return (
    <article className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={
            post.image?.url ||
            "https://placehold.co/600x400?text=No+Image"
          }
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          crossOrigin="anonymous"
        />

        {/* Category Badge */}
        {post.category?.name && (
          <span className="absolute top-4 left-4 bg-[#a01446] text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide shadow">
            {post.category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2
          className="text-xl font-bold text-gray-900 leading-snug mb-3 hover:text-[#a01446] transition-colors cursor-pointer"
          onClick={() => navigate(`/post/${post._id}`)}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.content && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
            {post.content.replace(/<[^>]+>/g, "")}
          </p>
        )}

        <hr className="mb-4" />

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {post.author?.image?.url ? (
              <img
                src={post.author.image.url}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            )}

            <span className="font-medium text-gray-700">
              {post.author?.name}
            </span>
          </div>

          {post.createdAt && (
            <span>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
