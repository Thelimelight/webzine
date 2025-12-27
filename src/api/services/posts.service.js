import apiClient from "../axiosInstance";

export const fetchPosts = async () => 
    apiClient.get(`/posts`).then(response => response.data.data);

export const fetchPostById = async (id) =>
    apiClient.get(`/posts/${id}`).then(response => response.data.data);

export const fetchPostsByAuthor = async (authorId) =>
    apiClient.get(`/posts/author/${authorId}`).then(response => response.data.data);

export const fetchPostsByCategory = async (categoryId) =>
    apiClient.get(`/posts/category/${categoryId}`).then(response => response.data.data);