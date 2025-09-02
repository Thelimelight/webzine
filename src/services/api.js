import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

const api = axios.create({
    baseURL: API_BASE_URL,
})


// fetch all categories
export async function fetchCategories() {
    try {
        const response = await api.get("/categories"); 
        return response.data.categories || [];
    }
    catch(error) {
        console.error('Error fetching categories: ', error);
        throw error;
    }
}

// fetch hierarchial categories 
export async function fetchStructuredCategories() {
    try {
        const response = await api.get("/structured");
        return response.data.categories;
    }
    catch(error) {
        console.error("Error fetching structured categories:", error)
        throw error;
    }
}

// Fetch posts (filtered by category)
export async function fetchPosts(categoryId = null) {
    try {
        const url = categoryId
            ? `/posts/filter?category=${categoryId}`
            : '/posts';
        
        const response = await api.get(url);
        return response.data;
    }
    catch(error) {
        console.error('Error fetching posts: ', error);
        throw error;
    }
}

export async function fetchLatestPosts() {
    try {
        const response = await api.get('/posts/latest');
        return response.data;
    }
    catch(error) {
        console.error('Error while fetch latest posts: ', err);
        throw error;
    }
}