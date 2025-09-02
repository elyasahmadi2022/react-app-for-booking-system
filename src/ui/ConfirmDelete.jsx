import { RiErrorWarningLine } from "react-icons/ri"; 
import { useModal } from "./NewModal";

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
 const {close} = useModal()
  return (
    <div className=" w-100 bg-white flex flex-col items-center p-3 gap-5 rounded-md">
     <RiErrorWarningLine  className=" mx-auto" size={50} color="red"/>
      <p className=" mb-5">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className=" flex justify-center gap-5  w-full ">
        <button  className="p-2 rounded-md transition-all duration-300  hover:border-2 cursor-pointer" disabled={disabled} onClick={close}>
          Cancel
        </button>
        <button onClick={() => {
          onConfirm()
          setTimeout(() => {
            close()
          }, 1000)
        }} className="p-3 transition-all duration-300 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-md"  disabled={disabled}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
