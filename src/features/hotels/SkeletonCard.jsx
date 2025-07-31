import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Button, CardRow, Description, Marks, PriceAndName } from "./Card";
export default function SkeletonCard({ count }) {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="rounded-sm  h-[400px]  transition-all duration-300  grid grid-cols-2 grid-rows-[1.5fr_auto] box-border"
      >
        <div className="overflow-hidden object-cover  p-0 m-0 w-full col-span-2 row-span-2">
          <Skeleton  className=" aspect-video bg-orange-400" width='100%' height='100%'/>
        </div>
        <CardRow>
          <PriceAndName>
            <Skeleton width={100} height={30} />
            <Skeleton width={100} height={30} />
          </PriceAndName>
          <Description>
            <Skeleton count={1.5}/>
          </Description>
          <Marks>
            <Skeleton width={100} height={25} />
            <Skeleton width={100} height={25} />
            <Skeleton width={100} height={25} />
            <Skeleton width={100} height={25} />
          </Marks>
          <div>
            <Skeleton width='100%' height={40} />
          </div>
        </CardRow>
      </div>
    ));
}
