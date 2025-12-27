import { useQuery } from "@tanstack/react-query";
import { fetchAuthorById } from "../services";

export const useAuthor = (authorId) => {
    return useQuery({
        queryKey: ['author', authorId],
        queryFn: () => fetchAuthorById(authorId),
        enabled: !!authorId,
    })
}