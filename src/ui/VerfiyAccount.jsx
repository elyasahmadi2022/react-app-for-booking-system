import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { maskEmail } from "../utils/helper";
import { useOutSideClick } from "./../hooks/useClickOutSide";
import { useSignup } from "./SignupContext";
function VerfiyAccount({ email }) {
  const [count, setCount] = useState(59);
  useEffect(function () {
    const timeId = setInterval(function () {
      setCount((count) => count - 1);
    }, 1000);
    return () => clearInterval(timeId);
  }, []);
  const navigate = useNavigate();
  const { dispatch } = useSignup();
  const handleClose = () => {
    dispatch({ type: "close" });
    navigate("/account/signup");
  };
  const ref = useOutSideClick(() => dispatch({ type: "close" }));
  return (
    
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3,delay: 0.3 , stiffness: 300}}
        className="w-full absolute inset-0 min-h-screen backdrop-blur-xs bg-white/60 z-40 flex items-center justify-center"
      >
        <motion.div
        initial={{y: '-100vw'}}
        exit={{y: '-20vw', opacity: 0}}
        animate={{y:0}}
        transition={{duration: 0.3, delay: 0.3, stiffness: 600}}
          ref={ref}
          className="w-[300px] h-[260px] bg-white rounded-sm shadow-md relative"
        >
          <RxCross2
            size={20}
            onClick={handleClose}
            className=" absolute top-1 right-2 cursor-pointer hover:stroke-red-600"
          />
          <div className=" px-2 w-full h-[90%] absolute bottom-0 flex flex-col text-neutral-600 items-center gap-3 justify-around">
            <p className=" capitalize text-sm px-2 ">
              the code has been sent to email:
              <strong className=" lowercase"> {maskEmail(email)}</strong>
            </p>
            <input
              className="py-2 px-2 outline-1 rounded-sm w-[90%] focus:outline-orange-400"
              type="text"
              placeholder="###### digit"
            />
            <button className="p-3 border rounded-sm w-[90%] hover:bg-orange-400 hover:text-white transition-all duration-200 text-neutral-600">
              Verfiy Account
            </button>
            <Link className=" text-sm hover:underline hover:text-orange-300 transition-all duration-100">
              Resend The Code again
            </Link>
            <p className="text-red-600 text-right flex justify-between px-3   w-full gap-4 ">
              <span>remaining time</span>
              <span>00:{count}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
   
  );
}

export default VerfiyAccount;
