import { useQuery } from "@tanstack/react-query";
import { fetchPostsByCategory } from "../services";

export const useCategoryPosts = (categoryId) => {
    return useQuery({
        queryKey: ['posts', 'category', categoryId],
        queryFn: () => fetchPostsByCategory(categoryId),
        enabled: !!categoryId,
    })
}