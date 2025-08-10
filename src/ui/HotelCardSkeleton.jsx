import HotelCardChild from "./HotelCardChild";
import ImageCover from "./ImageCover";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function HotelCardSkeleton() {
  return (
    <article className="grid grid-cols-[1fr_1fr_1fr]  w-full h-[270px]  cursor-pointer rounded-lg mt-2 shadow-lg my-2  overflow-hidden">
      <div>
        <Skeleton className="w-full h-full" />
      </div>
      <div className={` col-span-2 relative box-border p-2 grid grid-cols-[1fr_.7fr] grid-rows-[1fr_.8fr_auto]`}>
        <div
          className={`relative box-border p-2 grid grid-cols-[1fr_.7fr] grid-rows-[1fr_.8fr_auto]`}
        >
          <div className="flex flex-col gap-2 col-span-3">
            <Skeleton className="tracking-wider" count={1}></Skeleton>
            <Skeleton className="tracking-wider" count={1}></Skeleton>
            <Skeleton className="tracking-wider" count={1}></Skeleton>
          </div>
          <div className=" col-start-1 col-end-2 row-start-2 row-end-3">
            <Skeleton className="tracking-wider" count={1}></Skeleton>
          </div>
          <div className="col-start-1 col-end-2 row-start-3 flex items-end box-border pl-3 ">
            <div className=" w-2/4 h-20  grid grid-cols-[.5fr_auto] grid-rows-2 gap-1">
              <div className=" row-span-2 text-white  row-start-1 flex justify-center items-center ">
                <Skeleton className="px-3 py-2"></Skeleton>
              </div>
              <Skeleton className="col-start-2 row-start-1 flex items-end justify-start "></Skeleton>
              <Skeleton className="col-start-2 row-start-2 flex  justify-start "></Skeleton>
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-3 row-end-4 text-right pr-3">
            <Skeleton >
            </Skeleton>
            <p className=" text-orange-400 ">
              <Skeleton className="inline" count={1} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
