import { useSearchParams } from "react-router-dom";
import TabBar from "../ui/Tabbar";
import TabButton from "../ui/TabButton";
import SearchForm from "../ui/SearchForm";
import SearchProvider from "../ui/HotelSearchContext";

export default function HotelRooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const buttons = [
    { label: "Hotels", value: "Hotels" },
    { label: "Rooms", value: "Rooms" },
    { label: "Locations", value: "Locations" },
  ];
  const handleClick = (value) => {
    searchParams.set("searchFor", value);
    setSearchParams(searchParams);
  };
  return (
    <section className="w-full min-h-screen grid grid-cols-[.8fr_1fr_1fr_1fr] gap-1 grid-rows-[.7fr_1fr_1fr_1fr] ">
      <div className=" col-span-1 row-span-4  border-[1px]">side Bar</div>
      <div className=" col-span-3  row-span-1 ">
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
      </div>
    </section>
  );
}
