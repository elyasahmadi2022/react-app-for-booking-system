/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();
const initaliState = {
  location: "",
  travelers: {children:0, adults: 0, rooms: 1},
  dates: "",
};
function reducer(state, action) {
    console.log(state, action)
    const type = state.type;
    switch(type){
        case 'location':
            return {...state}
        case 'date':
            return {...state}
        case 'travelers':
            return {...state}
        default:
            return {...state}
    }
}
export default function SearchProvider({ children }) {
  const [{travelers, dates, location}, dispatch] = useReducer(reducer, initaliState);
  return (
    <SearchContext.Provider value={{ dispatch, travelers, dates, location  }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchHotels() {
  const context = useContext(SearchContext);
  if (context === undefined) throw new Error("Error is outside the context");
  return context;
}
