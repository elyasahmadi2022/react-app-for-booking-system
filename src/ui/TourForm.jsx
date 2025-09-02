import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import AccountInfoForm from "../ui/AccountInfoForm";
import ContactForm from "../ui/ContactForm";
import EducationForm from "../ui/EducationForm";
import ExperinceForm from "../ui/ExperinceForm";
import PersonalForm from "../ui/PersonalForm";
import { SignupContainer } from "../ui/SignupContainer";
import SignupSteps from "../ui/SignupSteps";
import Steps from "../ui/Steps";
import { useSignup } from "./SignupContext";
import { AnimatePresence } from "framer-motion";
import VerfiyAccount from "./VerfiyAccount";
function TourForm() {
  const { dispatch, currentStep, lastStep, isloading, verfiy } = useSignup();
  const steps = [
    { step: "personal Information", status: "progress", form: {} },
    { step: "education", status: "compeleted" },
    { step: "experince", status: "waited" },
    { step: "contact Information", status: "waited" },
    { step: "account Information", status: "waited" },
  ];
  const [userEmail, setUserEmail] = useState("");
  const form = useForm({
    defaultValues: {
      userType: "tour",
    },
  });
  const { handleSubmit } = form;
  function handleNext(data) {
    if (currentStep === 1) {
      setUserEmail(() => data["email"]);
      dispatch({ type: "loadingNext" });
      localStorage.setItem("information", JSON.stringify(data));
      setTimeout(() => {
        dispatch({ type: "next", payload: true });
      }, 500);
    }
    if (currentStep === 2) {
      dispatch({ type: "loadingNext" });
      localStorage.setItem("information", JSON.stringify(data));
      setTimeout(() => {
        dispatch({ type: "next", payload: true });
      }, 500);
    }
    if (currentStep === 3) {
      dispatch({ type: "loadingNext" });
      localStorage.setItem("information", JSON.stringify(data));
      setTimeout(() => {
        dispatch({ type: "next", payload: true });
      }, 500);
    }
    if (currentStep === 4) {
      dispatch({ type: "loadingNext" });
      localStorage.setItem("information", JSON.stringify(data));
      setTimeout(() => {
        dispatch({ type: "next", payload: true });
      }, 500);
    }
    if (currentStep === 5) {
      dispatch({ type: "loadingNext" });
      localStorage.setItem("information", JSON.stringify(data));
      setTimeout(() => {
        dispatch({ type: "next", payload: true });
      }, 500);
    }
  }
  function handlePrev(e) {
    e.preventDefault();
    dispatch({ type: "prev" });
  }
  const variants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
        stiffness: 700,
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        stiffness: 700,
      },
    },
  };
  return (
    <>
      <div className="relative w-full h-screen bg-orange-300 bg-gradient-to-r from-pink-300 via-green-300 to-blue-400">
        <div className="w-full md:w-[90%]  h-[100%]  mx-auto  shadow-lg bg-stone-100 grid grid-cols-[.20fr_auto]">
          <div className="col-start-1 border  col-end-2  flex flex-col w-full   border-r border-orange-200 cursor-pointer mx-auto">
            {steps.map((step, index) => (
              <SignupSteps className={"group "} key={index}>
                <Steps
                  className={`grid grid-cols-[.05fr_auto] py-2   group-hover:[&>div>*]:fill-white capitalize`}
                  stepLabel={step.step}
                  stepNum={index + 1}
                  stepStatus={step.status}
                />
              </SignupSteps>
            ))}
          </div>
          <SignupContainer className={"h-[100%] overflow-y-auto col-start-2"}>
            <form
              onSubmit={handleSubmit(handleNext)}
              noValidate
              className="w-full md:w-[90%]   mx-auto h-full"
            >
              <AnimatePresence>
                {steps.map((elem, index) => {
                  if (
                    currentStep === index + 1 &&
                    elem.step.toUpperCase() ===
                      "personal information".toUpperCase()
                  ) {
                    return (
                      <PersonalForm
                        key={index}
                        form={form}
                        step={elem}
                        variants={variants}
                      />
                    );
                  }
                  if (
                    currentStep === index + 1 &&
                    elem.step.toUpperCase() === "Education".toUpperCase()
                  ) {
                    return (
                      <EducationForm
                        key={index}
                        form={form}
                        step={elem}
                        variants={variants}
                      />
                    );
                  }
                  if (
                    currentStep === index + 1 &&
                    elem.step.toUpperCase() === "experince".toUpperCase()
                  ) {
                    return (
                      <ExperinceForm
                        key={index}
                        form={form}
                        step={elem}
                        variants={variants}
                      />
                    );
                  }
                  if (
                    currentStep === index + 1 &&
                    elem.step.toUpperCase() ===
                      "Contact information".toUpperCase()
                  ) {
                    return (
                      <ContactForm
                        key={index}
                        form={form}
                        step={elem}
                        variants={variants}
                      />
                    );
                  }
                  if (
                    currentStep === index + 1 &&
                    elem.step.toUpperCase() ===
                      "account information".toUpperCase()
                  ) {
                    return (
                      <AccountInfoForm
                        variants={variants}
                        key={index}
                        form={form}
                        step={elem}
                        v
                      />
                    );
                  }
                })}
              </AnimatePresence>

              <div className=" w-full md:w-[90%] flex justify-between m-auto p-2">
                <button
                  className="bg-orange-300 text-white px-3 py-1 cursor-pointer"
                  onClick={(e) => handlePrev(e)}
                >
                  previous
                </button>
                <button
                  type="submit"
                  className="bg-orange-300 text-white px-3 py-1 cursor-pointer flex items-center gap-2"
                >
                  <span>
                    {currentStep === lastStep ? "Verfiy Your Account" : "Next"}
                  </span>
                  {isloading && (
                    <span>
                      <ImSpinner2 size={20} className=" animate-spin" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </SignupContainer>
        </div>
        <AnimatePresence>
          {verfiy && <VerfiyAccount email={userEmail} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default TourForm;
