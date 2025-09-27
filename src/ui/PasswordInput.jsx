import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function PasswordInput({ id, register, error,value, placeholder }) {
  const [isVisable, setVisable] = useState(false);
  const toggle = () => {
    setVisable((visable) => !visable);
  };
  return (
    <div className=" w-full h-10 relative">
      <input
        {...register}
        placeholder={placeholder}
        value={value}
        id={id}
        type={`${isVisable ? "text" : "password"}`}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-[14px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
      <span
        className=" absolute top-2/3 -translate-y-2/4 right-3  cursor-pointer "
        onClick={toggle}
      >
        {isVisable ? (
          <AiOutlineEyeInvisible className=" text-slate-400" size={25} />
        ) : (
          <AiOutlineEye className="text-slate-400" size={25} />
        )}
      </span>
      {error && <p>{error}</p>}
    </div>
  );
}
