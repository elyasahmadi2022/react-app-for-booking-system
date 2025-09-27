import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState } from "react";
import Filter from "./Filter";
import { Select } from "./Select";
import { useSearchParams } from "react-router-dom";

export default function Pagination({
  totalPage,
}) {
  const [currPage, setCurrPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  searchParams.set("currentPage", currPage)
  const perPage = searchParams.get("perPage") || 8;
  setSearchParams(searchParams)
  const handlePage = () => {
    const to = currPage * perPage;
    const from = currPage + perPage;
    return {to, from}
  }
  const handlePrev = () => {
      // if (currPage >= 1){
      //   currPage ++;
      // }

  }
  const handleNext = () => {
    // if (currPage >= 1){
    //   currPage--;
    // }
  }
  return (
    <ul className="flex w-[400px]  items-center justify-between">
      <li>
        <button
          onClick={handlePrev}
          className="inline-flex h-10 cursor-pointer  items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-400 hover:text-white transition-all duration-200  dark:hover:bg-white/5"
        >
          <span>
            <IoIosArrowBack />
          </span>
          <span className="max-sm:hidden"> Previous </span>
        </button>
      </li>
      <p className="text-base font-medium text-slate-500 dark:text-white">
        Page {currPage} to {totalPage}
      </p>
      <li>
        <button
          onClick={handleNext}
          className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-400 hover:text-white transition-all duration-200 dark:text-white dark:hover:bg-white/5"
        >
          <span className="max-sm:hidden"> Next </span>
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </li>
    </ul>
  );
}
