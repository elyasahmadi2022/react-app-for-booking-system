import { BiRightArrowCircle } from "react-icons/bi"; 
import { BiRightTopArrowCircle } from "react-icons/bi"; 
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaRegStar, FaUserFriends } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Card from "../features/hotels/Card";
import Search from "../features/hotels/Search";
import Button from "../ui/Button";
import { GroupButton } from "../ui/GroupButton";
import StaggerText from "../ui/StaggerText";
import { useRooms } from "./../features/hotels/useRooms";
import Modal from "./../ui/Modal";
import Acheive from "./Acheive";
import {motion} from "framer-motion"
export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const { data: hotels, isLoading } = useRooms();
  function handleClick() {
    setShowAll((showall) => !showall);
  }
  return (
    <>
      <section className="w-full min-h-screen">
        <div className="bg-[url(/home-landing.jpg)] bg-cover bg-top bg-no-repeat min-h-screen relative object-cover inset-0">
          <div className="absolute inset-0 bg-black/50 object-cover" />
          <div className=" flex flex-col items-center justify-around  absolute top-2/20 max-sm:top-2/14 left-2/4 text-center -translate-x-2/4 w-full">
            <StaggerText>Discover Your Next</StaggerText>
            <StaggerText>Adventur</StaggerText>
            <p className="text-white text-lg tracking-wide mx-2 md:max-w-2/4 text-shadow-2xs ">
              Embark on unforgettable journeys through breathtaking landscapes.
              From mountain peaks to hidden valleys, create memories that last a
              lifetime.
            </p>
            <GroupButton>
              <Modal>
                <Modal.Toggle>
                  <motion.button
                  whileHover="hover"
                    onClick={handleClick}
                    className="relative flex group items-center justify-around rounded-md bg-orange-400 font-montserrat shadow-[0_6px_24px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer border-0 group"
                  >
                    <span className="absolute inset-0 w-0 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
                    <span className="relative flex  gap-2 items-center z-10 px-6 py-4 text-white text-lg font-bold tracking-wide  transition-all duration-300 ease-in-out group-hover:text-[#183153] group-hover:scale-95 group-hover:animate-pulse">
                      <span>Start You Journey</span>
                      <motion.span variants={{initial: {rotate: -45}, hover: {rotate: 0}}} initial="initial" transition={{type: "spring", stiffness: 300}}><BiRightArrowCircle  size={30} className=" text-white  z-10 group-hover:text-slate-500 " /></motion.span>
                    </span>
                  </motion.button>
                </Modal.Toggle>
                <AnimatePresence>
                  <Modal.Window>
                    <Search />
                  </Modal.Window>
                </AnimatePresence>
              </Modal>
              
            </GroupButton>
            <div className="w-2/4 max-sm:w-full flex justify-around mt-4">
              <Acheive
                icon={<FaRegStar size={30} className=" fill-orange-400" />}
                title="Average Rating"
                num="4.3"
              />
              <Acheive
                icon={<FaUserFriends size={30} className=" fill-orange-400" />}
                title="Happy Travelers"
                num="500K+"
              />
              <Acheive
                icon={<GoLocation size={30} className=" fill-orange-400" />}
                title="Destination"
                num="100+"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" relative py-16 mx-auto w-full h-auto overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="flex px-4">
          <div className=" flex-2">
            <h1 className="font-bold text-left  text-3xl px-4   py-3">
              Popular Places
            </h1>
            <p className="text-left md:text-lg text-sm px-4">
              Choose from our carefully curated selection of adventures designed
              to challenge and inspire you.
            </p>
          </div>
          <div className=" flex-1 flex justify-end items-center">
            <button
              onClick={handleClick}
              className="relative flex items-center  justify-center rounded-md bg-orange-400 font-montserrat shadow-[0_6px_24px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer border-0 group"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10 px-6 py-4 text-white text-lg font-bold tracking-[0.3em] transition-all duration-300 ease-in-out group-hover:text-[#183153] group-hover:scale-95 group-hover:animate-pulse">
                See All Rooms
              </span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-[0.9fr_0.9fr]  space-x-7 p-4 md:space-y-6">
          {hotels?.slice(0, 3)?.map((hotel) => (
            <Card item={hotel} />
          ))}
        </div>
      </section>
    </>
  );
}
