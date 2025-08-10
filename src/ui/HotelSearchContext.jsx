/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { formatDates } from "../utils/helper";

const SearchContext = createContext();
const initaliState = {
  location: "Kabul, Afghanistan",
  travelers: [{ id: Date.now(), children: 0, adults: 0, rooms: 1 }],
  dates: formatDates(new Date()),
};
function reducer(state, action) {
  const type = action.type;
  switch (type) {
    case "location":
      return { ...state, location: action.payload };
    case "dates":
        console.log(action.payload)
      return { ...state, dates:formatDates(action.payload) };
    case "travelers":
      return { ...state };
    case "decrease/children": {
      return {
        ...state,
        travelers: state.travelers.map((traveler) =>
          traveler.id === action.payload
            ? {
                ...traveler,
                children: traveler.children === 0 ? 0 : traveler.children - 1,
              }
            : traveler
        ),
      };
    }
    case "increase/children": {
      return {
        ...state,
        travelers: state.travelers.map((traveler) =>
          traveler.id === action.payload
            ? {
                ...traveler,
                children: traveler.children === 5 ? 5 : traveler.children + 1,
              }
            : traveler
        ),
      };
    }

    case "increase/adults": {
      return {
        ...state,
        travelers: state.travelers.map((traveler) =>
          traveler.id === action.payload
            ? {
                ...traveler,
                adults: traveler.adults === 4 ? 4 : traveler.adults + 1,
              }
            : traveler
        ),
      };
    }
    case "decrease/adults": {
      return {
        ...state,
        travelers: state.travelers.map((traveler) =>
          traveler.id === action.payload
            ? {
                ...traveler,
                adults: traveler.adults === 0 ? 0 : traveler.adults - 1,
              }
            : traveler
        ),
      };
    }
    case "create-room":
      return {
        ...state,
        travelers: [
          ...state.travelers,
          {
            id: Date.now(),
            children: 0,
            adults: 0,
            rooms: 1,
          },
        ],
      };
    case "remove-room":
      return {
        ...state,
        travelers: state.travelers.length > 1 ? state.travelers.filter(
          (traveler) => traveler.id !== action.payload
        ) : state.travelers,
      };
    default:
      return { ...state };
  }
}
export default function SearchProvider({ children }) {
    
    
  const [{ travelers, dates, location, createRoom }, dispatch] = useReducer(
    reducer,
    initaliState
  );
  return (
    <SearchContext.Provider
      value={{ dispatch, travelers, dates, location, createRoom }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchHotels() {
  const context = useContext(SearchContext);
  if (context === undefined) throw new Error("Error is outside the context");
  return context;
}
