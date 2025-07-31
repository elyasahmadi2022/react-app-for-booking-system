import { createContext, useContext } from "react";
import Mark from "../../ui/Mark";
import { formatCurrency } from "../../utils/helper";
import { IoTimerOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
const CardContext = createContext();
export default function Card({ item }) {
  const { id, discount, images, room_type, total_price, is_available, hotels } =
    item;
  const { address, description, hotel_name, star_rating } = hotels;
  const todayDiscount = total_price - discount;
  return (
    <CardContext.Provider value={{ id: id, hotel_name: hotel_name }}>
      <article className="rounded-sm cursor-pointer h-[400px]  hover:scale-y-105 hover:scale-x-105 transition-all duration-300 shadow-2xl shadow-stone-400/60 grid grid-cols-2 grid-rows-[1.5fr_auto] box-border">
        <CardImage>
          <img
            src={images}
            alt={`the image of hotel called ${hotel_name}`}
            className=" aspect-video"
          />
        </CardImage>
        <CardRow>
          <PriceAndName>
            <span className="font-bold text-lg font-poppins">{hotel_name}</span>
            <span className=" text-orange-400 font-semibold text-lg">
              {formatCurrency(todayDiscount)}
              <span className=" text-[10px] line-through px-1 text-stone-800">
                {formatCurrency(total_price)}
              </span>
              <span className="text-stone-800">/night</span>
            </span>
          </PriceAndName>
          <Description>{description}</Description>
          <Marks>
            <Mark icon={<IoTimerOutline size={16} />} text={is_available ? 'available': 'Booked'} />
            <Mark icon={<GoLocation size={16} />} text={address} />
            <Mark
              icon={<FaRegStar size={16} className=" fill-orange-400" />}
              text={`${star_rating} (130 reviewed)`}
            />
            <Mark
              icon={
                room_type === "double" ? (
                  <HiOutlineUsers size={16} />
                ) : (
                  <HiOutlineUser />
                )
              }
              text={room_type}
            />
          </Marks>
          <Button>check out</Button>
        </CardRow>
      </article>
    </CardContext.Provider>
  );
}
export function CardRow({ children }) {
  return (
    <div className=" col-span-2 row-span-2 p-2 flex flex-col">{children}</div>
  );
}
export function CardImage({ children }) {
  return (
    <div className=" overflow-hidden object-cover  p-0 m-0 w-full col-span-2 row-span-2">
      {children}
    </div>
  );
}
export function Description({ children }) {
  return (
    <p className="text-stone-500 p-1 text-[10px] font-poppins">{children}</p>
  );
}
export function PriceAndName({ children }) {
  return <div className="flex justify-between p-1">{children}</div>;
}
export function Marks({ children }) {
  return <div className="grid grid-cols-2 gap-3 p-1">{children}</div>;
}
export function Button({ children }) {
  const navigate = useNavigate();
  const { id, hotel_name } = useContext(CardContext);
  const [searchParmas, setSearchParams] = useSearchParams();
  return (
    <button
      onClick={() => {
        navigate(`/hotel/${id}`);
        searchParmas.set("hotel-name", hotel_name);
        setSearchParams(searchParmas);
      }}
      className="py-2 bg-orange-400 hover:bg-orange-500 cursor-pointer font-poppins  px-3 text-lg font-medium  text-white focus:outline-2 focus:outline-orange-400 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] w-full"
    >
      {children}
    </button>
  );
}
