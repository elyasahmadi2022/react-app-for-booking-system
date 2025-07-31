import Spinner from "../../ui/Spinner";
import { Suspense, useState } from "react";
import Button from "../../ui/Button";
import Card from "./Card";
import CardsParent from "./CardParent";
import { useRooms } from "./useRooms";
import SkeletonCard from "./SkeletonCard";
export default function CardRow() {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading } = useRooms();
  function handleClick() {
    setShowAll((showall) => !showall);
  }
  return (
    <>
      <div className="py-10 px-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 max-md:gap-2">
        {showAll ? (
          <CardsParent data={data} isLoading={isLoading} />
        ) : (
          <CardsParent data={data?.slice(0, 3)}  isLoading={isLoading}/>
        )}
      </div>
      <div className=" flex items-center justify-center">
        <Button type="primary" onClick={handleClick}>
          Find Out More
        </Button>
      </div>
    </>
  );
}
