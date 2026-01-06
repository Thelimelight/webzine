import { useQuery } from "@tanstack/react-query";
import { fetchPostsByAuthor } from "../services";

export const useAuthorPosts = (authorId) => {
    return useQuery({
        queryKey: ['posts', 'author', authorId],
        queryFn: () => fetchPostsByAuthor(authorId), 
        enabled: !!authorId,
    })
}