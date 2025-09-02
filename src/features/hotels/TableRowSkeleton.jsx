import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function TableRowSkeleton() {
  return (
    <div className=" h-10 w-full table-row">
      <div className="table-cell w-full h-10">
        <Skeleton  className="w-full h-10 " />
      </div>
      <div className="table-cell w-full h-10">
        <Skeleton className="w-full h-10 " />
      </div>
      <div className="table-cell  w-full h-10">
        <Skeleton className="w-full h-10 " />
      </div>
      <div className="table-cell  w-full h-10">
        <Skeleton className="w-full h-10 " />
      </div>
      <div className="table-cell  w-full h-10">
        <Skeleton className="w-full h-10 " />
      </div>
      <div className="table-cell  w-full h-10">
        <Skeleton className="w-full h-10 " />
      </div>
    </div>
  );
}

export default TableRowSkeleton;
