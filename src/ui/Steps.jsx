import { AiFillCheckCircle } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { useSignup } from "./SignupContext";
export default function Steps({ stepNum, stepLabel,className }) {
  const { currentStep, dispatch } = useSignup();
  function handleSelect(){
    dispatch({ type: "select", payload: stepNum })
  }
  return (
    <div
      className={`${className} transition-all duration-300 ${
        stepNum === currentStep
          ? "bg-orange-300 [&>div>*]:fill-white"
          : " [&>*]:fill-neutral-500 text-neutral-500"
      } hover:bg-orange-300`}
      onClick={handleSelect }
    >
      <div className="">
        {stepNum === currentStep && <BiCheckCircle size={30} className=" fill-orange-400" />}
        {stepNum > currentStep && <BiCheckCircle size={30} className=" fill-stone-400" />}
        {stepNum < currentStep && <AiFillCheckCircle  size={30} className=" fill-green-400" />}
      </div>
      <span className={`${stepNum < currentStep ? ' text-stone-900': ' text-stone-500' }`}>{stepLabel}</span>
    </div>
  );
}
