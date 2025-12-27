import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../services";

export const usePost = (postId) => {
    return useQuery({
        queryKey: ['post', postId],
        queryFn: () => fetchPostById(postId),
        enabled: !!postId,
    })
}