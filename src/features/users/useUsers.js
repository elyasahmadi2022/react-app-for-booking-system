import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../services/apiUser"

export const useAllUsers =() => {
    const {isLoading, data, error} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })
    if (error ) throw new Error(error)
    return {data, isLoading}
}