import PostCard from "../components/PostCard";
import BannerSlider from "../components/Banner";
import { usePosts } from "../api/hooks/usePosts";

export default function Home() {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) {
    return (
      <main>
        <BannerSlider />
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-80 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <BannerSlider />
        <div className="max-w-7xl mx-auto px-4 py-10 text-red-500">
          Failed to load posts
        </div>
      </main>
    );
  }

  return (
    <main>
      <BannerSlider />

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl lg:m-5 m-4 font-bold text-gray-900">
          Latest Writings
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
