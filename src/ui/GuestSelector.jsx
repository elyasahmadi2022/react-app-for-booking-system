import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import CircleButton from "./CircleButton";
import { useSearchHotels } from "./HotelSearchContext";

export default function GuestSelector({
  label,
  className,
}) {

  const {dispatch, travelers} = useSearchHotels()
  // function handleIncrease() {
  //   if (label === "children") {
  //     setCounter((counter) => ({
  //       ...counter,
  //       children: counter.children < 4 ? counter.children + 1 : 4,
  //     }));
  //   } else {
  //     setCounter((counter) => ({ ...counter, adults: counter.adults < 4 ? counter.adults + 1: 4 }));
  //   }
  // }
  // function handleDecrease() {
  //   if (label === "children") {
  //     setCounter((counter) => ({ ...counter, children:counter.children === 0 ? 0 :  counter.children - 1 }));
  //   } else {
  //     setCounter((counter) => ({ ...counter, adults: counter.adults === 0 ? 0 :  counter.adults - 1 }));
  //   }
  // }
  return (
    <div className={`w-full grid grid-cols-[.6fr_auto] ${className}`}>
      <span className=" flex justify-center items-center">{label}</span>
      <div className="flex items-center justify-center gap-2">
        <CircleButton onClick={() => dispatch({type:'decrease-guest'}) }>
          <AiOutlineMinusCircle color="#fff" size={25} />
        </CircleButton>
        <span>{label === "children" ? travelers.children : travelers.adults}</span>
        <CircleButton onClick={() => dispatch({type:'increase-guest'})}>
          <AiFillPlusCircle color="#fff" size={25} />
        </CircleButton>
      </div>
    </div>
  );
}
