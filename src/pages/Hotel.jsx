import { useSearchParams } from "react-router-dom";
import { useAllHotels } from "../features/hotels/useAllHotels";
import SingleHotel from "../ui/HotelCard";
import SearchProvider from "../ui/HotelSearchContext";
import SearchForm from "../ui/SearchForm";
import TabBar from "../ui/Tabbar";
import TabButton from "../ui/TabButton";
import HotelCardSkeleton from "../ui/HotelCardSkeleton";

export default function Hotel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const buttons = [
    { label: "Hotels", value: "Hotels" },
    { label: "Rooms", value: "Rooms" },
    { label: "Locations", value: "Locations" },
  ];
  const { data, isLoading } = useAllHotels();
  console.log(data);
  const handleClick = (value) => {
    searchParams.set("searchFor", value);
    setSearchParams(searchParams);
  };
  return (
    <section className="w-full min-h-screen grid grid-cols-[.7fr_1fr_1fr_1fr] gap-1 grid-rows-[.3fr_.4fr_1fr_1fr_1fr]">
      <div className=" col-span-1 row-span-3 row-start-2 row-end-6  border-[1px]">side Bar</div>
      <div className=" col-span-3 row-start-2 row-end-3  row-span-1 ">
        <SearchProvider>
          <SearchForm />
        </SearchProvider>
      </div>
      <div className=" col-span-3  border-[1px] row-span-3 p-1">
        <TabBar>
          {buttons.map((button) => (
            <TabButton
              key={button.label}
              onClick={() => handleClick(button.value)}
              label={button.label}
            ></TabButton>
          ))}
        </TabBar>
        <div className="w-full">
          {isLoading ? (
            <HotelCardSkeleton />
          ) : (
            data.map((hotel) => <SingleHotel key={hotel.id} hotel={hotel} />)
          )}
        </div>
      </div>
    </section>
  );
}
