import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../services/apiHotels";

export function useHotels(){
    const {data , isLoading} = useQuery({
        queryFn: getHotels,
        queryKey: ['hotels']
    })

    return {data, isLoading}
}