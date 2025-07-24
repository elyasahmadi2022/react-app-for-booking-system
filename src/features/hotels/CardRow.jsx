import { formatCurrency } from "../../utils/helper";
import { useHotels } from "./useHotels";
import { FaRegStar } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import Card from "./Card";
import Mark from "../../ui/Mark";
import { GoLocation } from "react-icons/go";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useState } from "react";
export default function CardRow() {
  const [showAll, setShowAll] = useState(false);
  let { data, isLoading } = useHotels();
  function handleClick() {
    setShowAll((showall) => !showall);
  }

  if (isLoading) return;
  return (
    <div>
      <div className="py-10 px-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {showAll
          ? data?.map((hotel) => (
              <Card key={hotel.hotel_name}>
                <Card.CardImage>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <img
                      src={hotel.image}
                      alt=""
                      className=" w-full  hover:scale-x-105 hover:scale-y-105 transition-transform duration-300"
                    />
                  )}
                </Card.CardImage>
                <Card.CardRow>
                  <Card.PriceAndName>
                    <span className="font-bold text-2xl">
                      {hotel.hotel_name}
                    </span>
                    <span className=" text-orange-400 font-semibold text-2xl">
                      {formatCurrency(hotel.price)}
                    </span>
                  </Card.PriceAndName>
                  <Card.Description>
                    {hotel.destinations["description"]}
                  </Card.Description>
                  <Card.Marks>
                    <Mark icon={<IoTimerOutline size={20} />} text="3 days" />
                    <Mark
                      icon={<GoLocation size={20} />}
                      text={hotel.address}
                    />
                    <Mark
                      icon={
                        <FaRegStar size={20} className=" fill-orange-400" />
                      }
                      text={`${hotel.rating} (130 reviewed)`}
                    />
                    <Mark
                      icon={<HiOutlineUsers size={20} />}
                      text={"2-5 people"}
                    />
                  </Card.Marks>
                  <Card.Button>Book Adventur</Card.Button>
                </Card.CardRow>
              </Card>
            ))
          : data?.slice(0, 3).map((hotel) => (
              <Card key={hotel.hotel_name}>
                <Card.CardImage>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <img
                      src={hotel.image}
                      alt=""
                      className=" w-full  hover:scale-x-105 hover:scale-y-105 transition-transform duration-300"
                    />
                  )}
                </Card.CardImage>
                <Card.CardRow>
                  <Card.PriceAndName>
                    <span className="font-bold text-2xl">
                      {hotel.hotel_name}
                    </span>
                    <span className=" text-orange-400 font-semibold text-2xl">
                      {formatCurrency(hotel.price)}
                    </span>
                  </Card.PriceAndName>
                  <Card.Description>
                    {hotel.destinations["description"]}
                  </Card.Description>
                  <Card.Marks>
                    <Mark icon={<IoTimerOutline size={20} />} text="3 days" />
                    <Mark
                      icon={<GoLocation size={20} />}
                      text={hotel.address}
                    />
                    <Mark
                      icon={
                        <FaRegStar size={20} className=" fill-orange-400" />
                      }
                      text={`${hotel.rating} (130 reviewed)`}
                    />
                    <Mark
                      icon={<HiOutlineUsers size={20} />}
                      text={"2-5 people"}
                    />
                  </Card.Marks>
                  <Card.Button>Book Adventur</Card.Button>
                </Card.CardRow>
              </Card>
            ))}
      </div>
      <div className=" flex items-center justify-center">
        <Button type="primary" onClick={handleClick}>
          Find Out More
        </Button>
      </div>
    </div>
  );
}
