import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";
import React from "react";

function UserHeader() {
  return (
    <tr className="table-row ">
      <th
        className=" table-cell   px-4 text-sm font-normal text-left rtl:text-right text-gray-500
        dark:text-gray-400"
      ></th>
      <th className=" table-cell  px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="cursor-pointer  border-gray-300" />
          <span>Name</span>
        </div>
      </th>
      <th className="  table-cell   px-12  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <button className="flex items-center gap-x-2">
          <AiOutlineSortAscending size={18} />
          <span>Status</span>
        </button>
      </th>
      <th className=" table-cell   px-4  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <button className="flex items-center gap-x-2">
          <BsQuestionCircle size={16} />
          <span>Role</span>
        </button>
      </th>
      <th className="  table-cell   px-4  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <button className=" flex items-center gap-x-2">
          <MdMarkEmailUnread size={16} />
          <span>Email address</span>
        </button>
      </th>
      <th className=" table-cell   px-4  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
        Provider
      </th>
      <th className=" table-cell  text-gray-500   px-4 h-18">
        Operations
      </th>
    </tr>
  );
}

export default UserHeader;
