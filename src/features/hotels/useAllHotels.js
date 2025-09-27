import { useQuery } from "@tanstack/react-query";
import { getAllHotels } from "../../services/apiHotels";
import { useSearchParams } from "react-router-dom";

export function useAllHotels() {
  const {data, isLoading} = useQuery({
    queryKey: ['allHotels'],
    queryFn:  getAllHotels,
  })

  return {data, isLoading}
}