import { AiOutlineCheck } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { formatCurrency } from './../utils/helper';
import { Heading } from "./Heading";
import MenuBarModal from "./MenuBarModal";

export default function HotelCardChild({ className, hotel }) {
    const {hotel_name:hotelName,hotel_type:hotelType ,address,star_rating:starRating ,description,states, hotel_rooms:hotelRooms} = hotel
    // const {province, city} = states

    let services = hotelRooms.map(room => room.hotel_services).join().split(',')
    // console.log(services)
    // services = services.reduce(function(prev, curr){
    //     if (prev  !== curr){
    //       return curr;
    //     }
    // },services)
    // let services = hotelRooms.flatMap((ele) => {
    //   ele.split(',')
    // })
    
    // services = services.filter(function(service, index, array){
    //   service !== array[index]
    // })
    console.log(services)
    const discount = hotelRooms.reduce((pre,curr) =>  {
     return pre + curr.discount
    }, 0) / hotelRooms.length;
    const price = hotelRooms.reduce((pre,curr) =>{
      return pre +curr.total_price
    },0) / hotelRooms.length
    const discountPrice = price - discount;
  return (
    <div
      className={`${className} h-full relative box-border p-2 grid grid-cols-[1fr_.5fr] grid-rows-[1fr_.4fr_auto]`}
    >
      <div className="flex flex-col gap-2">
        <Heading as="h2" className=' tracking-wider'>{hotelName}</Heading>
        <Heading as="h3">{address}</Heading>
        <Heading as="h5">{description}</Heading>
      </div>
      <div className=" col-start-1 col-end-2 row-start-2 row-end-3">
          <p>services</p>
      </div>
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex items-end box-border pl-3 ">
        <div className=" grid grid-cols-[.5fr_auto] grid-rows-2 gap-1">
          <div className=" row-span-2 text-white  row-start-1 flex justify-center items-center ">
            <Heading as="h5" className="px-3 py-2 bg-orange-400">
              {starRating}.{Math.round(Math.random() * 10)}
            </Heading>
          </div>
          <Heading
            as="h5"
            className="col-start-2 row-start-1 flex items-end justify-start "
          >
            Exceptional
          </Heading>
          <Heading
            as="h5"
            className="col-start-2 row-start-2 flex  justify-start "
          >
            {Math.round(Math.random() * 120)} reviews
          </Heading>
        </div>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 text-right pr-3">
        <Heading as='h5'><span className="">{formatCurrency(price)}</span> nightly</Heading>
        <Heading as='h3'><span className=" font-semibold">{formatCurrency(discountPrice)}</span> total</Heading>
        <p className=" text-orange-400 ">
          <AiOutlineCheck  className="inline" size={18}/> Total with taxes and fees
        </p>
      </div>
      <MenuBarModal className='col-start-2 col-end-3 row-start-1 row-end-2  relative'>

        <MenuBarModal.Toggle id='menu'><HiDotsVertical size={25}  className=" absolute top-2 right-2  "/></MenuBarModal.Toggle>
        <MenuBarModal.MenusItem id='menu' className={' absolute top-10 right-3'}>
          <button className="flex gap-1 py-2 px-3 w-full  cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200"><FiShare2 size={25}/><span>share</span></button>
          <button className="flex gap-1 py-2 px-3 w-full  cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-200"><TbMap2  size={25}/> <span>map</span></button>
        </MenuBarModal.MenusItem>
      </MenuBarModal>
    </div>
  );
}
