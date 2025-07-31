import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiHotels";

export function useRooms(){
    const {data, isLoading} = useQuery({
        queryKey: ['hotel-rooms'],
        queryFn: getRooms,
    })
    return {data, isLoading};
}