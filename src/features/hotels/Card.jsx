import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { FaPercentage } from "react-icons/fa";
import { formatCurrency } from "../../utils/helper";
export default function Card({ item }) {
  const { id, discount, images, room_type, total_price, is_available, hotels } =
    item;
  const { address, description, hotel_name, star_rating } = hotels;
  const todayDiscount = total_price - discount;
  const savedDiscount = Math.floor(total_price / discount);
  console.log(savedDiscount);
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1.03 }}
      viewport={{ amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        stiffness: 700,
        damping: 2,
      }}
      className=" hover:bg-sky-200/80 transition-all duration-200 relative bg-sky-100/90 h-full border-transparent group cursor-pointer rounded-lg"
    >
      <img
        className="h-48 w-full object-cover object-end rounded-lg"
        src={images}
        alt="Home in Countryside"
      />
      <div className="p-6">
        <div className="flex items-baseline gap-1">
          <span
            className={`inline-block ${
              is_available ? "bg-green-400 text-white" : "bg-red-500 text-white"
            } text-teal-800 py-1 px-2 text-xs rounded-full uppercase font-semibold tracking-wide`}
          >
            {is_available ? "isAvailiable" : "Booked"}
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            3 beds &bull; 2 baths &bull; {room_type}
          </div>
        </div>
        <div className=" flex justify-between items-center">
        <h4 className="mt-2 group-hover:underline group-hover:underline-offset-4 decoration-slate-500  font-semibold text-lg leading-tight truncate capitalize">
          {hotel_name}
        </h4>
         <span className=" text-[14px] font-light">{address}</span>
        </div>

        <div className="mt-1 flex items-center  justify-between">
          <div>
            {discount && (
              <div className=" line-through">
                <span className=" text-sm ">{formatCurrency(total_price)}</span>
                <span className="text-gray-600 text-sm decoration-slate-600 ">/ month</span>
              </div>
            )}
            <div>
              <span className=" text-[16px] font-semibold">{formatCurrency(todayDiscount)}</span>
              <span className="text-gray-600 text-md">/ month</span>
            </div>
          </div>
          <span className=" bg-red-400  p-3 rounded-full  flex justify-center items-center text-white"> saved {savedDiscount} <FaPercentage /></span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className=" flex ">
            <span className="text-yellow-600 flex  font-semibold">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span className="ml-2 text-gray-600 text-sm">
              {star_rating} reviews
            </span>
          </div>
          <button className=" px-4 py-2 border border-slate-300 rounded-lg transition-all duration-75 hover:bg-orange-400 hover:text-white cursor-pointer font-semibold">
            Check Out
          </button>
        </div>
      </div>
    </motion.div>
  );
}
