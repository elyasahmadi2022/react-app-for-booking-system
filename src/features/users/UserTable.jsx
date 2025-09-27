import React from "react";
import Pagination from './../../ui/Pigination';

function UserTable({tableBody, tableHeader}) {
  return (
    <>
      <table  className=" min-w-full divide-y divide-slate-200 dark:divide-gray-700 table ">
      <thead className="  bg-gray-100/80 dark:bg-gray-800 table-header-group">
        {tableHeader}
      </thead>
      <tbody className=" table-row-group   bg-white/80  divide-y  divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {tableBody}
      </tbody>
    </table>
    <div className=" flex justify-end  items-center gap-3 py-3">
      <Pagination />
    </div>
    </>
  );
}

export default UserTable;
