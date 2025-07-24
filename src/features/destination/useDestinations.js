import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "../../services/apiDestinations";

export function useDestinations() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: getDestinations,
  });
  return { data, error, isLoading };
}
