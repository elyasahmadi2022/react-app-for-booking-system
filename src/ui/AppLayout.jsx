import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { TiWeatherNight } from "react-icons/ti";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import Menu from "./Menu";
import { NavListItem } from "./NavListItem";
import { useGlobalContext } from "./GlobalContext";
export default function AppLayout() {
  const { isLightMode, setIsLightMode } = useGlobalContext();
  const navList = [
    { label: "Home", path: "/" },
    { label: "Cities", path: "/cities" },
    { label: "Guide", path: "/guide" },
    { label: "payment", path: "/payment" },
    { label: "services", path: "/services" },
  ];
  return (
    <div>
      <Header className={'fixed top-0 z-20'}>
        <Header.Logo>
          <Logo className="max-sm:hidden" />
        </Header.Logo>
        <Header.Navs>
          {navList.map((item) => (
            <NavListItem
              key={item.label}
              navitem={item}
              className={
                "hover:text-stone-100 transition-all duration-200 h-full navItem"
              }
            />
          ))}
        </Header.Navs>
        <Menu>
          <Menu.Button />
          <Menu.NavList>
            {navList.map((item) => (
              <li key={item.label}>
                <NavListItem
                  navitem={item}
                  className={"w-full  block  text-left pl-2"}
                />
              </li>
            ))}
          </Menu.NavList>
        </Menu>
        <Header.ToolBar>
          <div className="flex gap-2">
            {isLightMode ? (
              <CiLight
                onClick={() => setIsLightMode((pre) => !pre)}
                color="white"
                size={30}
                className="p-1 fill-yellow-300 hover:fill-white  outline rounded-full cursor-pointer hover:bg-orange-300 transition-all duration-300"
              />
            ) : (
              <TiWeatherNight
                onClick={() => setIsLightMode((pre) => !pre)}
                color="white"
                size={30}
                className="p-1 outline rounded-full cursor-pointer hover:bg-orange-300 transition-all duration-300"
              />
            )}
            <span className="relative">
              <CgBell
                size={30}
                color="white"
                className="p-1 outline rounded-full cursor-pointer  hover:bg-orange-300 transition-all duration-300"
              />
              <span className=" w-3 h-3 rounded-full bg-green-400 absolute -top-1.5 right-0.5 animate-ping">
                <span className="w-1 h-1 rounded-full bg-green-500"></span>
              </span>
            </span>
            <div className="w-auto xl:w-12">
              <LoginModal>
                <LoginModal.Toggle id="login">
                  <AiOutlineUser
                    size={30}
                    className=" p-1 outline rounded-full cursor-pointer  hover:bg-orange-300 transition-all duration-300"
                    color="white"
                  />
                </LoginModal.Toggle>
                <LoginModal.Window name="login">
                  <LoginForm />
                </LoginModal.Window>
              </LoginModal>
            </div>
          </div>
        </Header.ToolBar>
      </Header>
      <main className=" scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
