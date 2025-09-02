import React from "react";
import { Heading } from "./Heading";
import { useSignup } from "./SignupContext";
import img from "/1.jpg";
import { motion  } from "framer-motion";
function Welcome() {
  const { dispatch } = useSignup();
  const setTour = () => {
    dispatch({ type: "tour" });
  };
  const setTourist = () => {
    dispatch({ type: "tourist" });
  };
  return (
    <div
      className={`bg-[url(${img})] bg-cover bg-top bg-no-repeat  w-full min-h-screen flex items-center gap-3 justify-center flex-col`}
    >
      <motion.div
        initial={{ opacity: 0 , scale: 0}}
        animate={{ opacity: 1 , scale: 1.1}}
        transition={{ delay: 0.1,duration: 1.2 ,type: "tween", stiffness: 400 }}
        className="flex flex-col gap-3 p-15 backdrop-blur-[4px] rounded-lg bg-orange-200/40"
      >
        <Heading as="h1" className=" text-neutral-600 text-center">
          Welcom{" "}
        </Heading>
        <p className=" tracking-wide font-medium text-neutral-600 text-lg">
          Let's know that Who are You ?
        </p>
        <div className="flex gap-2 flex-col">
          <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,255,255)"
              }}

            onClick={setTour}
            className="p-3 border cursor-pointer font-medium capitalize tracking-wide rounded-full border-orange-300 text-neutral-600 hover:bg-orange-400 hover:text-white hover:border-white transition-all duration-200 "
          >
            A Tour
          </motion.button>
          <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow:"0px 0px 8px rgb(255,255,255)"
              }}
            onClick={setTourist}
            className="p-3 border cursor-pointer font-medium capitalize tracking-wide rounded-full border-orange-300 text-neutral-600  hover:bg-orange-400 hover:text-white hover:border-white transition-all duration-200"
          >
            A Tourist
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;
