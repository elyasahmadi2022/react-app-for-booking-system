import { AnimatePresence } from "framer-motion";
import { RiAddCircleLine } from "react-icons/ri";
import AddHotelForm from "../features/hotels/AddHotelForm";
import HotelModal from "../features/hotels/HotelModal";
import HotelRow from "../features/hotels/HotelRow";
import HotelTable from "../features/hotels/HotelTable";
import TableHeader from "../features/hotels/TableHeader";
import TableRowSkeleton from "../features/hotels/TableRowSkeleton";
import { useAllHotels } from "../features/hotels/useAllHotels";
import TableBody from "./TableBody";

function Hotels() {
  const { data, isLoading } = useAllHotels();

  const headers = [
    { title: "name" },
    { title: "address" },
    { title: "type" },
    { title: "contact information" },
    { title: "per night" },
    { title: "operation" },
  ];
  return (
    <HotelTable>
      <TableHeader headerData={headers} />
      <TableBody>
        {isLoading
          ? Array.from("hhh").map((_, index) => (
              <TableRowSkeleton key={index} />
            ))
          : data?.map((row) => <HotelRow key={row.id} hotel={row} />)}
      </TableBody>
      <div className=" mt-1 absolute right-2 ">
        <HotelModal>
          <HotelModal.Toggle id="open-modal">
            <button className="p-2 outline-1 cursor-pointer bg-green-400 text-white hover:bg-green-400/80 text-shadow-md shadow-md transition-all duration-200 ease-out flex items-center gap-2">
              <span> Add New Hotel</span>
              <span>
                <RiAddCircleLine size={20} />
              </span>
            </button>
          </HotelModal.Toggle>
          <AnimatePresence>
            <HotelModal.Window id="open-modal">
              <AddHotelForm />
            </HotelModal.Window>
          </AnimatePresence>
        </HotelModal>
      </div>
    </HotelTable>
  );
}

export default Hotels;
