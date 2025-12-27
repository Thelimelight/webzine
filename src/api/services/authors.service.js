import apiClient from "../axiosInstance";

export const fetchAuthors = async () =>
    apiClient.get(`/authors`).then(response => response.data.data);

export const fetchAuthorById = async (id) =>
    apiClient.get(`/authors/${id}`).then(response => response.data.data);