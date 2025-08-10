import GuestSelector from "./GuestSelector";
import { useSearchHotels } from "./HotelSearchContext";
export default function GuestOptions({ id }) {
  const { travelers, dispatch } = useSearchHotels();
  return (
    <div className=" col-span-2 h-[190px]  grid grid-cols-[.5fr_auto] grid-rows-[.2fr_.6fr_auto] gap-3 border-b py-2 border-orange-200">
      <span className=" text-center font-medium">Room {travelers.findIndex(traveler => traveler.id === id)+1}</span>
      <GuestSelector id={id} label="children" className=" col-span-2" />
      <GuestSelector id={id} label="adults" className=" col-span-2" />
      {travelers.length ===1 ? (
        <button
          onClick={() => dispatch({ type: "create-room", payload: 1 })}
          className="rounded-full bg-orange-400 text-white col-start-2 col-end-3 cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200"
        >
          add room
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "remove-room", payload: id })}
          className="rounded-full text-blue-400 col-start-2 col-end-3 cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200"
        >
          remove room
        </button>
      )}
    </div>
  );
}
