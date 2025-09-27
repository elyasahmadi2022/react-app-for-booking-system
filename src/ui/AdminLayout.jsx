import { AiFillGift } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { BsGear, BsPersonBoundingBox, BsPieChartFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaHotel, FaRegUser } from "react-icons/fa";
import { GiClosedDoors } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { SiShopee } from "react-icons/si";

import { TiWeatherNight } from "react-icons/ti";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import { useGlobalContext } from "./GlobalContext";
import Header from "./Header";
import Logo from "./Logo";
import { SideBarItem } from "./SideBarItem";

export default function AdminLayout() {
  const { isLightMode, setIsLightMode } = useGlobalContext();
  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/users", label: "user" },
    { path: "/admin/activities", label: "activities" },
    { path: "/admin/manage", label: "manage" },
    { path: "/admin/payments", label: "payment" },
    { path: "/admin/shopping", label: "shopping" },
    { path: "/admin/bookings", label: "bookings" },
    { path: "/admin/hotels", label: "Hotels" },
    { path: "/admin/rooms", label: "rooms" },
  ];
  return (
    <section className="peer container mx-auto bg-blue-300/30 w-full min-h-screen grid   grid-cols-[0.12fr_.19fr_1fr_auto] sm:grid-cols-[0.06fr_.15fr_1fr_auto] md:grid-cols-[0.04fr_.12fr_1fr_auto] lg:grid-cols-[0.03fr_.10fr_1fr_auto]  grid-rows-[46px_auto] ">
      <Header className="col-start-2 -col-end-3 row-start-1 row-end-2 fixed  border-b border-slate-300  z-50">
        <Header.ToolBar className={"flex gap-2"}>
          <FaRegUser
            size={30}
            color="white"
            className="rounded-full hover:bg-orange-300 p-1 outline"
          />
          <div className="flex gap-2">
            {isLightMode ? (
              <CiLight
                onClick={() => setIsLightMode((pre) => !pre)}
                color="white"
                size={30}
                className="p-1 outline rounded-full cursor-pointer hover:bg-orange-300 hover:fill-white transition-all duration-300 fill-yellow-400"
              />
            ) : (
              <TiWeatherNight
                onClick={() => setIsLightMode((pre) => !pre)}
                color="white"
                size={30}
                className="p-1 outline rounded-full cursor-pointer hover:bg-orange-300 transition-all duration-300"
              />
            )}
          </div>

          <span className="relative group p-0.5">
            <BiBell
              size={30}
              color="white"
              className="p-1 outline rounded-full cursor-pointer  group-hover:bg-orange-300 transition-all duration-300"
            />
            <span className=" w-4 h-4 rounded-full bg-red-600 absolute -top-1.5 right-0.5 p-0.5 text-[12px] text-white flex items-center justify-center font-poppins font-medium">
              6
            </span>
          </span>
        </Header.ToolBar>
        <Header.Navs className="px-2">
        </Header.Navs>
        <Header.Logo>
          <Logo />
        </Header.Logo>
      </Header>
      <AdminSideBar className="peer container hover:col-end-3  col-start-1 col-end-2 row-start-2 row-end-4  flex flex-col gap-2  cursor-pointer transition-all duration-1000 shadow-lg shadow-stone-700/30">
        <div className="mt-3  relative  w-full h-full group">
          <div className="absolute left-0 h-full flex flex-col  w-full group sidebar ">
            <SideBarItem
              navitem={navItems[0]}
              icon={
                <MdOutlineAccountBalance
                  size={30}
                  className="p-1 fill-slate-700 "
                />
              }
            />
            <SideBarItem
              navitem={navItems[1]}
              icon={
                <BsPersonBoundingBox size={30} className="p-1 fill-slate-700" />
              }
            />
            <SideBarItem
              navitem={navItems[2]}
              icon={<AiFillGift size={30} className="p-1 fill-slate-700" />}
            />
            <SideBarItem
              navitem={navItems[3]}
              icon={<BsPieChartFill size={30} className="p-1 fill-slate-700" />}
            />
            <SideBarItem
              navitem={navItems[4]}
              icon={<RiWallet3Fill size={30} className="p-1 fill-slate-700 " />}
            />
            <SideBarItem
              navitem={navItems[5]}
              icon={<SiShopee size={30} className="p-1 fill-slate-700" />}
            />
            <SideBarItem
              navitem={navItems[6]}
              icon={<FaHotel size={30} className="p-1 fill-slate-700" />}
            />
            <SideBarItem
              navitem={navItems[7]}
              icon={<GiClosedDoors size={30} className="p-1 fill-slate-700" />}
            />
          </div>
          <div className=" absolute  bottom-0 group flex items-center w-full group-hover:bg-orange-300  transition-all duration-300">
            <BsGear
              size={30}
              color="black"
              className="group-hover:bg-orange-300  group-hover:fill-white p-1 "
            />
            <span className="hidden group-hover:block text-[14px] group-hover:text-white">
              logout
            </span>
          </div>
        </div>
      </AdminSideBar>
      <main className="container peer-hover:col-start-3 transition-all  duration-1000  col-start-2 col-end-4 row-start-2 row-end-4 h-auto  w-[95%]  mx-auto  overflow-auto py-4">
        <Outlet />
      </main>
    </section>
  );
}
