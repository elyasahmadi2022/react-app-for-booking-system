import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import Contact from "./Contact";
import Logo from "./Logo";
import User from "./User";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import Bar from "./Bar";
import Button from "./Button";
import LoginModal from "./LoginModal";
import LoginForm from "./LoginForm";
import { NavListItem } from "./NavListItem";
export default function AppLayout() {
  const navList = [
    { label: "Home", path: "/" },
    { label: "Cities", path: "/cities" },
    { label: "Guide", path: "/guide" },
    { label: "payment", path: "/payment" },
    { label: "services", path: "/services" },
  ];
  return (
    <div>
      <Header>
        <Header.Contacts>
          <div className="flex  items-center  w-2/4 justify-center gap-9 not-sm:justify-around ">
            <FaFacebook size={30} className="icons" />
            <Bar />
            <FaInstagramSquare size={30} className="icons" />
            <Bar />
            <FaXTwitter size={30} className="icons" />
            <Bar />
            <FaYoutubeSquare size={30} className="icons" />
          </div>
          <div className="flex gap-3 items-center  w-2/4 justify-around">
            <Contact>
              <HiOutlineMail size={30} />
              <span className="text-xl font-semibold">example@gmail.com</span>
            </Contact>
            <Bar />
            <Contact>
              <BiSolidPhoneCall size={30} />
              <span className="text-xl font-semibold">+93705441909</span>
            </Contact>
            <Bar />
            <SwitchButton>Dark Mode</SwitchButton>
          </div>
        </Header.Contacts>
        <Header.Navs>
          <Logo className="max-sm:hidden" />
          <div className="flex justify-around w-2/5 [&>a]:text-sm sm:font-semibold  min-w-2/4  max-sm:hidden">
            {navList.map((item) => (
              <NavListItem
                key={item.label}
                navitem={item}
                className={"navItem-hover hover:text-stone-100 transition-all duration-200"}
              />
            ))}
          </div>
          <div className="w-auto xl:w-12 max-sm:hidden">
            <LoginModal>
              <LoginModal.Toggle id="login">
                <Button type="login">Login</Button>
              </LoginModal.Toggle>
              <LoginModal.Window name="login">
                <LoginForm />
              </LoginModal.Window>
            </LoginModal>
          </div>
          <Menu>
            <Menu.Button />
            <Menu.NavList>
              {navList.map((item) => (
                <li key={item.label}>
                  <NavListItem navitem={item} className={"w-full  block  text-left pl-2"} />
                </li>
              ))}
              
                <LoginModal>
                  <LoginModal.Toggle>
                    <button className="bg-orange-400 hover:bg-orange-500 border-2 border-stone-800 cursor-pointer text-lg font-bold text-white rounded-sm  capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] w-full">
                      Login
                    </button>
                  </LoginModal.Toggle>
                  <LoginModal.Window>
                    <LoginForm />
                  </LoginModal.Window>
                </LoginModal>
              
            </Menu.NavList>
          </Menu>
        </Header.Navs>
      </Header>
      <main className=" scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
