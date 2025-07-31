import GuestSelector from "./GuestSelector";
import { useSearchHotels } from "./HotelSearchContext";
export default function GuestOptions() {
  const {travelers} = useSearchHotels()
  return <div className=" col-span-2 grid grid-cols-[.6fr_auto] grid-rows-[.6fr_.6fr_auto] gap-3 border-b py-2 border-orange-200 ">
          <span className=" text-center font-medium">Room {travelers.rooms}</span>
          <GuestSelector
            label={"children"}
            className=" col-span-2"
          />
          <GuestSelector
            label={"adult"}
            className=" col-span-2"
          />
         {!createNew ?  <button onClick={onClick} className='rounded-full bg-orange-400 text-white col-start-2 col-end-3 cursor-pointer hover:bg-orange-300'>Add Rooms</button> : <button onClick={onClick} className='rounded-full bg-orange-400 text-white col-start-2 col-end-3 cursor-pointer hover:bg-orange-300'>Remove Room</button>}
        </div>;
}