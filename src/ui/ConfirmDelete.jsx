import { BsPatchQuestionFill } from "react-icons/bs"; 
import { RiErrorWarningLine } from "react-icons/ri";
import { useModal } from "./NewModal";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useOutSideClick } from "../hooks/useClickOutSide";
function ConfirmDelete({ resourceName, onConfirm, disabled, type="delete" }) {
  const { close } = useModal();
  const ref = useOutSideClick(close);
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: "12.5deg" }}
      animate={{ scale: 1, rotate: "0deg" }}
      exit={{ scale: 0, rotate: "0deg" }}
      onClick={(e) => e.stopPropagation()}
      className=" bg-white  text-slate-700 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
    >
      <FiAlertCircle className={`${type === 'delete' ? 'text-red-500' : 'text-green-500'} rotate-12 text-[250px] absolute z-0 -top-24 -left-24`} />
      <div className="relative z-10">
        <div className={`bg-white w-16 h-16 mb-2  rounded-full text-3xl  ${type === "delete" ? " text-red-500" : " text-green-500"} grid place-items-center mx-auto`}>
          <BsPatchQuestionFill size={30}/>
        </div>
        <h3 className="text-3xl font-bold text-center mb-2">{resourceName}</h3>
        <p className="text-center mb-6">
          Are you sure you want to <strong className=" capitalize"> {type}</strong> this record?
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              close();
            }}
            className="  transition-colors border  cursor-pointer  text-slate-700 font-semibold w-full py-2 rounded"
          >
            Nah, go back
          </button>
          <button
            onClick={() => {
               onConfirm()
               close()
            } }
            className={`text-white hover:opacity-90 transition-opacity ${type === "delete" ?  'bg-red-500 hover:bg-red-500/80'  : ' bg-green-500 hover:bg-green-500/80' }  font-semibold w-full py-2 rounded `}
          >
            Yes, I confirm
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ConfirmDelete;
