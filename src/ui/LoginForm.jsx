import { BsFingerprint } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLogin } from "../features/auth/useAuth";
import Box from "./Box";
import FormRow from "./FormRow";
import Input from "./Input";
import Label from "./Label";
import Row from "./Row";
import { useForm } from "react-hook-form";
export default function LoginForm(){
  const {login, isPending :isLoading} = useLogin()
  const {register, handleSubmit} = useForm()
  function formSubmit(data ){
    const result = login(data)
    console.log(isLoading)
  }
  // setIsLoading(false)
  return (
    <form   className="h-[90%] w-[90%]  flex flex-col justify-center gap-4 font-poppins" onSubmit={handleSubmit(formSubmit)}>
      <Box>
        <h2 className=" mt-2 text-slate-700  col-span-3 text-2xl max-lg:text-lg row-span-2 text-center font-semibold font-poppins">
          happy to see u back
        </h2>
      </Box>
      <FormRow label="email">
        <Input register={register("email")} id="email" type="email"  placeholder="Enter Email" icon={<HiOutlineMail className=" text-slate-400" size={25} />} />
      </FormRow>
      <FormRow label="password">
        <Input id="password" register={register('password')} type="password" placeholder="Enter Password" icon={<BsFingerprint className=" text-slate-400" size={25} />} />
      </FormRow>
      <Row className=' justify-between px-4'>
        <div className="flex items-center gap-2 *:text-slate-600 ">
          <Input type="checkbox" id="remember-me"></Input>
          <Label htmlFor="remember-me">Remember Me</Label>
        </div>
        <Link to="#" className="  hover:underline text-slate-600">
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
      <Link to="/account/signup" className="text-center text-slate-600 hover:underline text-lg">create a new account</Link>
    </form>
  );
}
