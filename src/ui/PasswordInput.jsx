import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function PasswordInput({ id, register, error,value }) {
  const [isVisable, setVisable] = useState(false);
  const toggle = () => {
    setVisable((visable) => !visable);
  };
  return (
    <div className=" w-full h-10 relative">
      <input
        {...register}
        value={value}
        id={id}
        type={`${isVisable ? "text" : "password"}`}
        className="w-full h-full rounded-sm pl-7 outline-2 focus:outline-orange-400 "
      />
      <span
        className=" absolute top-2/4 -translate-y-2/4 right-2  cursor-pointer "
        onClick={toggle}
      >
        {isVisable ? (
          <AiOutlineEyeInvisible className="" size={25} />
        ) : (
          <AiOutlineEye className="" size={25} />
        )}
      </span>
      {error && <p>{error}</p>}
    </div>
  );
}
