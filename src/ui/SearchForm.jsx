import { BiCalendar } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdBedroomChild } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import FormSearchInput from "./FormSearchInput";
import FormSearchModal from "./FormSearchModal";
import { useSearchHotels } from "./HotelSearchContext";
import DatePickerCustom from "./CustomDateCalendar";
export default function SearchForm() {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };
  // console.log(date)
  const { location, dates, travelers, dispatch } = useSearchHotels();
  const guests = travelers.reduce((pre, curr) => {
    return pre + curr.children + curr.adults;
  }, 0);
  const rooms = travelers.reduce((pre, curr) => {
    return pre + curr.rooms;
  }, 0);

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
          <input
            type="text"
            className="searchInput"
            placeholder="Where to?"
            onChange={(e) =>
              dispatch({ type: "location", payload: e.target.value })
            }
          />
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
        <FormSearchModal.SelectDateWindow />
      </FormSearchModal>
      {/* Travelers */}
      <FormSearchModal>
        <FormSearchModal.SearchToggle>
          <FormSearchInput
            label="Travelers"
            // value={`Travelers:   ${guest.adults+guest.children} rooms: ${guest.rooms}`}
            value={`travelers: ${guests} rooms: ${rooms}`}
            icon={<MdBedroomChild size={25} className="m-auto" />}
          />
        </FormSearchModal.SearchToggle>
        <FormSearchModal.SelectGuestWindow />
      </FormSearchModal>

      <button className=" bg-orange-400 h-2/5 cursor-pointer w-10  rounded-full  flex items-center justify-center ">
        {<BsSearch className="fill-white" size={25} />}
      </button>
    </form>
  );
}
