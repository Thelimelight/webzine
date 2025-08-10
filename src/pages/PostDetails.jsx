import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function PostDetails () {
    const { id } = useParams();
    const [ post, setPost ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoading(true);
        setError(null)

        axios.get(`http://localhost:4000/post/${id}`)
           .then(res => {
               setPost(res.data);
               setIsLoading(false);
           })
           .catch(err => {
               console.error(err);
               setError('Failed to load post details.')
               setIsLoading(false)
           })
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        )
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600">No post found.</p>
            </div>
        )
    }
    
    return (
<div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {post.image && (
            <img
                src={`http://localhost:4000/uploads/${post.image}`}
                alt={post.title}
                className="w-full h-80 object-cover"
            />
        )}

        <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">{post.title}</h1>

            {/* Author & Institution */}
            <div className="flex flex-wrap items-center space-x-6 mb-6">
                
                {/* Author */}
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    <span className="ml-2 text-gray-700">{post.author}</span>
                </div>

                {/* Institution */}
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                    </svg>
                    <span className="ml-2 text-gray-700">{post.institution}</span>
                </div>
            </div>

            {/* Body */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        </div>
    </article>

    {/* Sidebar - can be used for related posts, ads, table of contents */}
    <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Reads</h2>
        <ul className="space-y-3 text-gray-600">
            
        </ul>
    </aside>
</div>

    )
}