import { createContext, useContext, useState } from "react";
import { useOutSideClick } from "../hooks/useClickOutSide";
import DatePickerCustom from "./CustomDateCalendar";
import GuestSelector from "./GuestSelector";
import Button from "./Button";
import GuestOptions from "./GuestOptions";
import { useSearchHotels } from "./HotelSearchContext";
const SearchModalContext = createContext();

export default function FormSearchModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SearchModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <div className="w-2/7 h-10 border-orange-600 relative">{children}</div>
    </SearchModalContext.Provider>
  );
}

function SearchToggle({ children }) {
  const { setIsOpen } = useContext(SearchModalContext);
  function handleClick(event) {
    event.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className=" w-full h-full cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
}
function SearchWindow({ children }) {
  const { isOpen, setIsOpen } = useContext(SearchModalContext);
  const ref = useOutSideClick(setIsOpen);
  return isOpen ? (
    <div
      ref={ref}
      className="w-full shadow-2xl h-[300px] bg-white absolute top-0 z-50"
    >
      {children}
    </div>
  ) : null;
}
function SelectDateWindow() {
  const { isOpen, setIsOpen } = useContext(SearchModalContext);
  const ref = useOutSideClick(setIsOpen);
  return isOpen ? <DatePickerCustom ref={ref} open={isOpen} /> : null;
}
function SelectGuestWindow() {
  const { travelers, dispatch } = useSearchHotels();
  const { isOpen, setIsOpen } = useContext(SearchModalContext);

  const ref = useOutSideClick(setIsOpen);
  return isOpen ? (
    <div
      ref={ref}
      className="min-w-2xs shadow-2xl   bg-white absolute top-[130%] transition-all duration-200 z-50"
    >
      <div className=" overflow-auto scroll-auto h-[400px]  w-full grid grid-cols-2 gap-2">
        {travelers.map((traveler) => (
          <>
            <GuestOptions id={traveler.id} key={traveler.id} />
            {traveler.id > 1 && (
              <div className=" absolute bottom-1 w-2/4 right-1">
                <button
                  onClick={() =>
                    dispatch({ type: "create-room", payload: traveler.id })
                  }
                  className="rounded-full w-full bg-orange-400 text-white col-start-2 col-end-3 cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200"
                >
                  add room
                </button>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  ) : null;
}

FormSearchModal.SearchWindow = SearchWindow;
FormSearchModal.SelectDateWindow = SelectDateWindow;
FormSearchModal.SelectGuestWindow = SelectGuestWindow;
FormSearchModal.SearchToggle = SearchToggle;
