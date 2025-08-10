import { useQuery } from "@tanstack/react-query";
import { getAllHotels } from "../../services/apiHotels";

export function useAllHotels() {
  const {data, isLoading} = useQuery({
    queryKey: ['allHotels'],
    queryFn: getAllHotels,
  })

  return {data, isLoading}
}