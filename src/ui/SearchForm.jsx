import { BiCalendar } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdBedroomChild } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import FormSearchInput from "./FormSearchInput";
import FormSearchModal from "./FormSearchModal";
import { useSearchHotels } from "./HotelSearchContext";
export default function SearchForm() {
  // const [location, setLocation] = useState("Kabul,Afghanistan");
  // const [date, setDate] = useState(() => {
  //   const date = new Date();
  //   const day = date.getDate();
  //   const month = date.getMonth();
  //   const year = date.getFullYear();
  //   return `${year}-${month}-${day}`;
  // });
  // const [guest, setGuest] = useState({
  //   children: 0,
  //   adults: 0,
  //   rooms: 1,
  // });
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };
  // console.log(date)
  const {location, dates, travelers, dispatch} = useSearchHotels()
  return (
    <form
      className="flex gap-4 justify-around items-center w-full h-full"
      onSubmit={handleSubmitSearch}
    >
      {/* Location */}
      <FormSearchModal>
        <FormSearchModal.SearchToggle>
          <FormSearchInput
            label={"Where to?"}
            value={location}
            icon={<TiLocation size={25} color="#000" className="m-auto" />}
          />
        </FormSearchModal.SearchToggle>
        <FormSearchModal.SearchWindow>
          <input type="text" className="searchInput" placeholder="Where to?" onChange={(e) => dispatch({type:'location', payload:e.target.value})} />
        </FormSearchModal.SearchWindow>
      </FormSearchModal>
      {/* date  */}
      <FormSearchModal>
        <FormSearchModal.SearchToggle>
          <FormSearchInput
            label="dates"
            value={dates}
            icon={<BiCalendar size={25} className="m-auto" />}
          />
        </FormSearchModal.SearchToggle>
        <FormSearchModal.SelectDateWindow/>
      </FormSearchModal>
      {/* Travelers */}
      <FormSearchModal>
        <FormSearchModal.SearchToggle>
          <FormSearchInput
            label="Travelers"
            // value={`Travelers:   ${guest.adults+guest.children} rooms: ${guest.rooms}`}
            value={travelers}
            icon={<MdBedroomChild size={25} className="m-auto" />}
          />
        </FormSearchModal.SearchToggle>
        <FormSearchModal.SelectGuestWindow/>
      </FormSearchModal>

      <button className=" bg-orange-400 h-2/5 cursor-pointer w-10  rounded-full  flex items-center justify-center ">
        {<BsSearch className="fill-white" size={25} />}
      </button>
      
    </form>
  );
}
