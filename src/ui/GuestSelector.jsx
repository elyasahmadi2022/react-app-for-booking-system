import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import CircleButton from "./CircleButton";
import { useSearchHotels } from "./HotelSearchContext";
import { findElement } from "../utils/helper";

export default function GuestSelector({ label, className, id }) {
  const { dispatch, travelers } = useSearchHotels();

 
  const element = findElement(id, travelers); 
  return (
    <div className={`w-full max-h-[80px] grid grid-cols-[.6fr_auto] ${className}`}>
      <span className=" flex justify-center items-center">{label}</span>
      <div className="flex items-center justify-center gap-2">
        <CircleButton
          onClick={() => dispatch({ type: `decrease/${label}`, payload: id })}
        >
          <AiOutlineMinusCircle color="#fff" size={25} />
        </CircleButton>
        <span>
          {label === "children" ? element.children : element.adults}
        </span>
        <CircleButton
          onClick={() => dispatch({ type: `increase/${label}`, payload: id })}
        >
          <AiFillPlusCircle color="#fff" size={25} />
        </CircleButton>
      </div>
    </div>
  );
}
