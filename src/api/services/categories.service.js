import apiClient from "../axiosInstance";

export const fetchCategories = async () => 
    apiClient.get(`/categories`).then(response => response.data.data);