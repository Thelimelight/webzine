import { useState, useEffect } from "react"
import { fetchPosts } from "../api/services/api"
import PostCard from "../components/PostCard"
import BannerSlider from "../components/Banner";

export default function Home() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const data = await fetchPosts();
                console.log('Fetched posts: ', data)
                setPosts(data);
            }
            catch(error) {
                console.error('Failed to fetch posts: ', error); 
            }
        }
        loadPost();
    }, []);

    return (
        <main>
        <BannerSlider />
        <div className="max-w-7xl mx-auto px-4 ">
            <h1 className="text-3xl lg:m-5 m-4 font-bold text-gray-900">
                Latest Writings 
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => {
                    try {
                        return <PostCard key={post._id} post={post} />;
                    } catch (err) {
                        console.error("PostCard error:", err);
                        return null;
                    }
                })}

            </div>
        </div>
        </main>
    )
}

// className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4"