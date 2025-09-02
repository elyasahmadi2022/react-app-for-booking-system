import React from "react";
//grid-cols-[0.3fr_0.3fr_0.7fr_0.2fr_0.6fr_0.4fr_0.3fr]
function TableHeader({ headerData }) {
  return (
    <div className={`  border-neutral-600 h-10 text-left bg-slate-950 table-header-group py-3`}>
      <div className=" table-row">
      {headerData.map((header) => (
        <div
          key={header.title}
          className={` box-border px-1.5 table-cell align-middle  text-[9px] md:text-[10px] font-medium  text-white uppercase tracking-wider`}
        >
          {header.title}
        </div>
      ))}
      </div>
    </div>
  );
}

export default TableHeader;
