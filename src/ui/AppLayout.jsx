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
export default function AppLayout() {
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
          <Logo />
          <div className="flex justify-around w-2/5 [&>a]:text-sm sm:font-semibold  max-sm:hidden">
            <NavLink className="navItem navItem-hover" to="/">
              Home
            </NavLink>
            <NavLink className="navItem navItem-hover" to="/cities">
              Cities
            </NavLink>
            <NavLink className="navItem navItem-hover" to="/guide">
              Guide
            </NavLink>
            <NavLink className="navItem navItem-hover" to="/payment">
              Payment
            </NavLink>
            <NavLink className="navItem navItem-hover" to="/services">
              Services
            </NavLink>
          </div>
          <div className="w-10 xl:w-12 max-sm:hidden">
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
              <li>
                <NavLink className="navItem w-full  block" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navItem w-full  block" to="/cities">
                  Cities
                </NavLink>
              </li>
              <li>
                <NavLink className="navItem w-full  block" to="/guide">
                  Guide
                </NavLink>
              </li>
              <li>
                <NavLink className="navItem w-full  block" to="/payment">
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink className="navItem w-full  block" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="bg-stone-950 w-full mb-0 text-white">
                <NavLink to="/login">Login</NavLink>
              </li>
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
