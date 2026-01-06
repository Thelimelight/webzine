import { useParams } from "react-router-dom"
import { useAuthor, useAuthorPosts } from "../api/hooks"
// import { useAuthor, usePostsByAuthor } from "../api/hooks"
import PostCard from "../components/PostCard"

export default function AuthorDetails() {
    const { id } = useParams()

    const { data: author, isLoading: authorLoading, isError: authorError } = useAuthor(id)
    const { data: posts = [], isLoading: postsLoading } = useAuthorPosts(id)

    if (authorLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#a01446]"></div>
            </div>
        )
    }

    if (authorError || !author) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-600">
                Failed to load author details
            </div>
        )
    }

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <section className="flex flex-col items-center text-center mb-16">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img
                        src={author.image?.url || "https://placehold.co/300x300?text=Author"}
                        alt={author.name}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                    />
                </div>

                <h1 className="text-3xl font-bold text-[#a01446]">
                    {author.name}
                </h1>

                <p className="mt-2 text-gray-600 max-w-2xl">
                    {author.institution || "Contributor at The Limelight"}
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Writings by {author.name}
                </h2>

                {postsLoading ? (
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No writings found for this author
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map(post => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}
