import { createContext, useContext, useState } from "react";
import { useOutSideClick } from "../hooks/useClickOutSide";
import DatePickerCustom from "./DatePickerCustom";
import GuestSelector from "./GuestSelector";
import Button from "./Button"
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
      className="w-full shadow-2xl h-[300px] bg-white absolute top-0"
    >
      {children}
    </div>
  ) : null;
}
function SelectDateWindow() {

  const { isOpen, setIsOpen } = useContext(SearchModalContext);
  const ref = useOutSideClick(setIsOpen);
  return isOpen ? (
    <DatePickerCustom />
  ) : null;
}
function SelectGuestWindow() {

  const { isOpen, setIsOpen } = useContext(SearchModalContext);
  const [increaseRoom, setIncreaseRoom] = useState(false);

  const ref = useOutSideClick(setIsOpen);
  // function handleIncreaseRoom(){
  //   setIncreaseRoom((increase) => !increase)
   
  // }
  return isOpen ? (
    <div
      ref={ref}
      className=" min-w-2xs shadow-2xl min-h-[400px] scroll-auto bg-white absolute top-0"
    >
      <div className=" w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
        <GuestOptions />
        {increaseRoom && <GuestOptions />}

      </div>
    </div>
  ) : null;

}

FormSearchModal.SearchWindow = SearchWindow;
FormSearchModal.SelectDateWindow = SelectDateWindow;
FormSearchModal.SelectGuestWindow = SelectGuestWindow;
FormSearchModal.SearchToggle = SearchToggle;
