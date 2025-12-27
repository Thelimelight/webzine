import { useQuery } from "@tanstack/react-query";
import { fetchAuthors } from "../services";

export const useAuthors = () => {
    return useQuery({
        queryKey: ['authors'],
        queryFn: fetchAuthors,
    })
}