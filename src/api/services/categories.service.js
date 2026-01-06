import apiClient from "../axiosInstance";

export const fetchCategories = async () => 
    apiClient.get(`/categories/tree`).then(response => response.data.data);