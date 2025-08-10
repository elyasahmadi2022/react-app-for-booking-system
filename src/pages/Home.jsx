import React from "react";
import { FaRegStar, FaUserFriends } from "react-icons/fa";
import { GroupButton } from "../ui/GroupButton";
import Button from "../ui/Button";
import { GoLocation } from "react-icons/go";
import Acheive from "./Acheive";
import CardRow from "../features/hotels/CardRow";
import Modal from "./../ui/Modal";
import Search from "../features/hotels/Search";
import { useHotels } from "../features/hotels/useHotels";
export default function Home() {
  const {data} = useHotels()
  return (
    <>
      <section className="w-full min-h-screen">
        <div className="bg-[url(/home-landing.jpg)] bg-cover bg-top bg-no-repeat min-h-screen relative object-cover inset-0">
          <div className="absolute inset-0 bg-black/50 object-cover" />
          <div className=" flex flex-col items-center justify-around  absolute top-2/20 max-sm:top-2/14 left-2/4 text-center -translate-x-2/4 w-full">
            <h1 className="   w-full p-4  font-extrabold font-poppins tracking-widest text-shadow-amber-100">
              <span className="block text-center text-4xl text-white  py-3 sm:text-5xl text-shadow-lg">
                Discover Your Next
              </span>
              <span className="text-center text-4xl sm:text-5xl  text-orange-400 py-3 text-shadow-sm text-shadow-orange-200/30">
                Adventur
              </span>
            </h1>
            <p className="text-white text-lg tracking-wide mx-2 md:max-w-2/4 text-shadow-2xs ">
              Embark on unforgettable journeys through breathtaking landscapes.
              From mountain peaks to hidden valleys, create memories that last a
              lifetime.
            </p>
            <GroupButton>
              <Modal>
                <Modal.Toggle>
                  <Button type="primary">
                    Start Your Journey
                    <span>
                      <GoLocation
                        className="animate-bounce"
                        size={30}
                        color="white"
                      />
                    </span>
                  </Button>
                </Modal.Toggle>
                <Modal.Window>
                  <Search />
                </Modal.Window>
              </Modal>
              <Button type="secondary">Watch Stories</Button>
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
    { data &&  <section className=" w-full min-h-screen  my-20">
        <div className=" py-7">
          <h1 className="font-bold text-3xl text-center py-3">
            Popular Places
          </h1>
          <p className="text-center md:text-2xl text-sm px-4">
            Choose from our carefully curated selection of adventures designed
            to challenge and inspire you.
          </p>
        </div>
        <CardRow />
      </section>}
    </>
  );
}
