import { useParams } from "react-router-dom";
import { usePost } from "../api/hooks/usePost";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading, isError } = usePost(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load post details
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">No post found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
        {post.image?.url && (
          <img
            src={post.image.url}
            alt={post.title}
            className="w-full h-80 object-cover"
            crossOrigin="anonymous"
          />
        )}

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center space-x-6 mb-6">
            <div className="flex items-center">
              <span className="ml-2 text-gray-700">
                {post.author?.name}
              </span>
            </div>

            <div className="flex items-center">
              <span className="ml-2 text-gray-700">
                {post.author?.institution}
              </span>
            </div>
          </div>

          <div
            className="prose max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Related Reads
        </h2>
      </aside>
    </div>
  );
}
