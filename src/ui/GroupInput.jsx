import React from "react";

function GroupInput({register, type,id,placeholder,value ,icon}) {
  return (
    <div className="relative w-[100%] mx-auto">
      <input
        {...register}
        type={type}
        id={id}
        className="text-stone-800 h-12 border-2  w-full  pl-9 rounded-sm font-semibold placeholder:font-medium relative  focus:outline-orange-400 focus:border-none invalid:outline-red-400"
        required
        placeholder={placeholder}
        value={value}
      />
      {icon && <span className=" absolute top-2/4 -translate-y-2/4 left-2  text-stone-500">{icon}</span>}
    </div>
  );
}

export default GroupInput;
