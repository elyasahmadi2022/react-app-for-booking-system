import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  `${import.meta.env.VITE_API_KEY}`
);
const requestOption = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};
export async function getCount() {
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL,
      requestOption
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export function useCountries() {
  const { data, isLoading } = useQuery({
    queryKey: ["count"],
    queryFn: getCount,
  });
  return { isLoading, data };
}
async function getStates(iso2){
    try{
      const res = await fetch(`https://api.countrystatecity.in/v1/countries/${iso2}/states`, requestOption)
      const data = await res.json()
      return data
    }catch(err){
      console.log(err)
      throw new Error(err)
    }
    
}
 const  getCities =async(countryISO2,stateISO2)  => {
  try{
    const res = await fetch(`https://api.countrystatecity.in/v1/countries/${countryISO2}/states/${stateISO2}/cities`, requestOption)
    const data = await res.json()
    return data;
  }catch(error){
    console.log(error)
    throw new Error(error)
  }
}

export function useStateCities(){
  const [searchparams] = useSearchParams()
  const countryISO2 = searchparams.get("iso2") || 'AFG'
  const stateISO2 = searchparams.get("stateISO2") || 'KAB'
  const {data:cities, isLoading} = useQuery({
    queryKey: ['cities', countryISO2, stateISO2],
    queryFn: () => getCities(countryISO2,stateISO2)
  })
  console.log(cities)
  return {cities, isLoading}
}
export function useStateByCountry(){
  const [searchParams] = useSearchParams()
  const iso2 = searchParams.get('iso2') || 'AFG'
  const {data} = useQuery({
    queryKey:['states', iso2],
    queryFn:() => getStates(iso2),
   
  })

  return {data}
}