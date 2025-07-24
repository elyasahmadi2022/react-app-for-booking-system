import { Link } from "react-router-dom";
import Box from "./Box";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Row from "./Row";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import FormRow  from "./FormRow";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(){
    setIsLoading(true)
  }
  // setIsLoading(false)
  return (
    <form className="h-full flex flex-col justify-center gap-4 w-full" onSubmit={handleSubmit}>
      <Box>
        <h1 className=" col-span-3 text-4xl row-span-2 text-center font-semibold font-poppins">
          Welcome Back
        </h1>
      </Box>
      <FormRow label="email">
        <Input id="email" type="email" placeholder="Enter Email" />
      </FormRow>
      <FormRow label="password">
        <Input id="password" type="password" placeholder="Enter Password" />
      </FormRow>
      <Row>
        <div className="flex items-center gap-2 ">
          <Input type="checkbox" id="remember-me"></Input>
          <Label htmlFor="remember-me">Remember Me</Label>
        </div>
        <Link to="#" className=" hover:underline">
          Forget Password?
        </Link>
      </Row>
      <Box>
        <div className="w-full">
          <button className="py-3 flex gap-2 justify-center items-center bg-orange-400 hover:bg-orange-500 cursor-pointer border-2 border-orange-400 px-3 text-lg font-bold text-white rounded-sm focus:outline-2 focus:outline-orange-400 outline-offset-2 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] w-full">
            {isLoading && (
              <span>
                <CgSpinner className={`animate-spin`} />
              </span>
            )}
            Login
          </button>
        </div>
      </Box>
      <Link to="/signup" className="text-center hover:underline text-lg">create a new account</Link>
    </form>
  );
}
