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
import Breadcrumb6 from "../ui/BreadCum";
import Pigination from "../ui/Pigination";
import Pagination from "../ui/Pigination";
import { CustomSelect } from "../ui/Select";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useOutSideClick } from "../hooks/useClickOutSide";

function Hotels() {
  const { data, isLoading } = useAllHotels();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState("select");
  const [open, setOpen] = useState(false);
  const ref = useOutSideClick(() => setOpen(false));
  const numPage = Math.floor(data?.length / import.meta.env.VITE_PAGE_NUM) + 1
  const handleChange = (option) => {
    setSelected(option);
    searchParams.set("perPage", option);
    setSearchParams(searchParams);
    setOpen(false);
  };
  const headers = [
    { title: "name" },
    { title: "address" },
    { title: "type" },
    { title: "contact information" },
    { title: "per night" },
    { title: "operation" },
  ];
  return (
    <>
      <div className="md:ml-7  pb-2 w-[85%] md:w-[90%] lg:w-[95%]">
        <Breadcrumb6 />
      </div>
      <HotelModal>
        <HotelModal.Window id="open-modal">
          <AddHotelForm />
        </HotelModal.Window>

        <HotelTable
          // pagination={<Pagination />}
          topHeader={
            <div className=" flex justify-between  w-full  ">
              <div className=" flex justify-start  items-center flex-3 ">
                <div className="relative flex h-10 lg:w-[300px] md:w-[250px] w-[200px] bg-transparent rounded-lg shadow-[20px_20px_30px_rgba(0,0,0,0.05)]">
                  <input
                    type="email"
                    placeholder="Search"
                    required
                    className="peer h-full w-full rounded-md border border-slate-300 bg-transparent px-3 pr-[70px] text-sm font-normal text-slate-700 outline-none transition focus:border-slate-400"
                  />
                  <button
                    type="button"
                    className="absolute  cursor-pointer right-1 top-1 bottom-1  w-[65px] rounded-md bg-green-500 px-2 py-1 text-[12px] font-semibold uppercase text-white transition-all duration-500 peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-gray-400 peer-placeholder-shown:opacity-50 hover:right-0.5 hover:top-0.5 hover:bottom-0.5 hover:rounded-lg"
                  >
                    search
                  </button>
                </div>
                <div>
                  <CustomSelect
                    options={[10, 14, 17, 20, 25]}
                    placeholder=""
                    selected={selected}
                    setSelected={setSelected}
                    ref={ref}
                    open={open}
                    setOpen={setOpen}
                    onChange={handleChange}
                    label="Row in Page"
                  />
                </div>
              </div>

              <div className="">
                <HotelModal.Toggle id="open-modal">
                  <button className="flex relative items-center  justify-center rounded-md bg-green-500 shadow-[0_6px_24px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer border-0 group">
                    <span className="absolute inset-0 w-0 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
                    <span className="relative z-10 lg:px-6 py-2 md:px-3  px-2  text-white text-lg font-bold  transition-all duration-300 ease-in-out group-hover:text-[#183153] group-hover:scale-95 group-hover:animate-pulse">
                      add new record
                    </span>
                  </button>
                </HotelModal.Toggle>
              </div>
            </div>
          }
        >
          <TableHeader headerData={headers} />
          <TableBody>
            {isLoading
              ? Array.from("hhh").map((_, index) => (
                  <TableRowSkeleton key={index} />
                ))
              : data?.map((row) => <HotelRow key={row.id} hotel={row} />)}
          </TableBody>
          <div className=" mt-1 absolute right-2 "></div>
        </HotelTable>
      </HotelModal>
    </>
  );
}

export default Hotels;
