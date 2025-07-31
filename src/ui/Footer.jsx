import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FooterRow } from "./FooterRow";
import { FooterList } from "./FooterList";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full mt-3 grid grid-cols-3 grid-rows-3 h-[500px] py-3 px-3 shadow-2xl shadow-stone-500 ">
      <div className=" basis-2/6 row-span-3">
        <div className="flex flex-col gap-2 ">
          <img src="./logo.png" alt="logo" className=" w-30" />
          <p className=" text-lg py-3 max-md:text-sm">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>
        <div className="flex gap-2">
          <FaFacebook size={20} />
          <FaInstagramSquare size={20} />
          <FaXTwitter size={20} />
          <FaYoutubeSquare size={20} />
          <CiLinkedin size={20} />
          <FaGithub size={20} />
        </div>
        <span className="flex items-center gap-2 max-sm:hidden my-4 px-2   cursor-pointer border-[1px] w-max rounded-sm max-sm:text-sm">
          <GoDotFill  className="  fill-green-700" /> All System
          operational
        </span>
      </div>
      <ul className=" basis-2/3 h-full col-span-2 row-span-3 grid grid-cols-3 pl-10 max-sm:grid-cols-2   pt-4">
        <FooterList title="Prodcut">
          <li>Headles CMS</li>
          <li>Pricing</li>
          <li>GraphQL API</li>
          <li>Open Source</li>
        </FooterList>
        <FooterList title="Company">
          <li>About HashCode</li>
          <li>Careers</li>
          <li>Logs and Media</li>
          <li>Changing</li>
          <li>Features Request</li>
        </FooterList>

        <FooterList title="Partners With Us">
          <li>Host a Website</li>
        </FooterList>
        <FooterList title="Explore">
          <li>Careers</li>
          <li>Logs and Media</li>
          <li>Changing</li>
          <li>Features Request</li>
        </FooterList>

        <FooterList title="Blogs">
          <li>Careers</li>
          <li>Logs and Media</li>
          <li>Changing</li>
          <li>Features Request</li>
        </FooterList>
        <FooterList title="Support">
          <li>Careers</li>
          <li>Logs and Media</li>
          <li>Changing</li>
          <li>Features Request</li>
        </FooterList>
      </ul>
      <div className=" border-t-[1px] col-span-3 min-h-16 flex justify-between items-center text-stone-400 bg-stone-100">
        <div className="max-sm:text-sm ">
          &copy; 2025 all the rights are reseved by Big-Dream.Co
        </div>
        <div className="flex gap-6 items-center [&>a]:max-sm:text-sm  [&>a]:cursor-pointer">
          <Link>Privacy Policy</Link>
          <Link>Terms</Link>
          <Link>Code of Contact</Link>
        </div>
      </div>
    </footer>
  );
}
