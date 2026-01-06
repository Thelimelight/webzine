import { useAuthors } from "../api/hooks"
import { useNavigate } from "react-router-dom"

export default function Authors() {
    const { data: authors = [], isLoading, isError } = useAuthors()
    const navigate = useNavigate()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#a01446]"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-600">
                Failed to load authors
            </div>
        )
    }

    return (
        <div className="flex items-start justify-center">
            <div className="grid grid-cols-12 gap-8 max-w-7xl w-full">
                <h1 className="text-center col-span-12 m-12 text-[#a01446] text-4xl font-bold">
                    The Limelight Authors
                </h1>

                <p className="col-span-12 text-lg max-w-2xl mx-auto text-center">
                    Meet the talented writers who contribute to The Limelight with their unique perspectives and insightful content.
                </p>

                {authors.map(author => (
                    <article
                        key={author._id}
                        onClick={() => navigate(`/authors/${author._id}`)}
                        className="cursor-pointer col-span-12 md:col-span-4 max-w-md m-5 md:m-8 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-700 ease-out hover:-translate-y-1"
                    >
                        <div className="h-40 bg-gray-100 relative flex justify-center">
                            <div className="absolute -bottom-14">
                                <div className="w-28 h-28 rounded-full border-4 transition-transform ease-out duration-700 hover:scale-115 border-white overflow-hidden shadow-md">
                                    <img
                                        src={
                                            author.image?.url ||
                                            "https://placehold.co/200x200?text=Author"
                                        }
                                        alt={author.name}
                                        className="w-full h-full object-cover"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-16 pb-6 px-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-700">
                                {author.name}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {author.institution || "Contributor at The Limelight"}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
