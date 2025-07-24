import { useQuery} from "@tanstack/react-query";
import { searchHotels } from "../../services/apiHotels";
import { useSearchParams } from "react-router-dom";
export function useSearch(){
    const [searchParams] = useSearchParams();
    
    const {data,isSearching,}  = useQuery({
        queryFn: () => searchHotels({fieldset:'address', value: searchParams.get("country")}), 
        queryKey: ['search-hotel'],
    })

    return {isSearching,data}
}