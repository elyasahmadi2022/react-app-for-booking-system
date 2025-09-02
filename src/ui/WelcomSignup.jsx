import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Box from "./Box";
import FormRow from "./FormRow";
import GroupInput from "./GroupInput";
import bg from "/3.jpg"
function WelcomSignup() {
  return (
    <article className=" grid grid-cols-1 md:grid-cols-2 w-full h-screen">
      <div className="w-full col-span-2 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-2">
        <form
          className="h-2/3 md:w-[90%] w-full mx-auto  lg:w-[70%] flex flex-col justify-center gap-4 font-poppins"

        >
          <Box>
            <h2 className=" mt-2  col-span-3 text-2xl max-lg:text-lg row-span-2 text-center font-semibold font-poppins">
              happy to see u back
            </h2>
          </Box>
          <FormRow label="email" className=' mx-auto md:w-[90%] w-[70%] '>
            <GroupInput
              id="email"
              type="email"
              placeholder="Enter Email"
              icon={<HiOutlineMail size={20} />}
            />
          </FormRow>
          <FormRow label="password" className=' mx-auto md:w-[90%] w-[70%]'>
            <GroupInput
              id="password"
              type="password"
              placeholder="Enter Password"
              icon={<RiLockPasswordLine size={20} />}
            />
          </FormRow>
          <Box>
            <div className="mx-auto md:w-[90%] w-[70%]">
              <button className="py-3 flex gap-2 justify-center items-center bg-orange-400 hover:bg-orange-500 cursor-pointer border-2 border-orange-400 px-3 text-lg font-bold text-white rounded-sm focus:outline-2 focus:outline-orange-400 outline-offset-2 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] w-full">
                {/* {isLoading && (
                  <span>
                    <CgSpinner className={`animate-spin`} />
                  </span>
                )} */}
                Login
              </button>
            </div>
          </Box>
          <Link
            to="/account/signup"
            className="text-center hover:underline text-lg"
          >
            create a new account
          </Link>
        </form>
        <div className=" flex items-center  mx-auto md:w-[90%] w-[70%] lg:w-[70%]">
            <div className=" flex-1 h-0.5 bg-stone-800/30"></div>
            <div className=" mx-3 font-medium">or continue with</div>
            <div className="flex-1 h-0.5 bg-stone-800/30"></div>
        </div>
        <div className="flex items-center justify-around md:w-[90%] w-[70%] lg:w-[70%]   py-3 mx-auto">
                <button className="border p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300"><span className=" font-medium capitalize tracking-wide">Google</span><FcGoogle  size={25}/></button>
                <button className="border p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300"><span className=" font-medium capitalize tracking-wide">Facebook</span><BsGithub size={25} /></button>
        </div>
      </div>
      <div className="col-span-1  hidden lg:flex justify-center items-center lg:col-start-2 lg:col-span-1   md:col-end-4">
        <img src={bg} alt='bg' className="w-full h-auto"/>
      </div>
    </article>
  );
}

export default WelcomSignup;
