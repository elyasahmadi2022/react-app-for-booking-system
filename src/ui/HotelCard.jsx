import HotelCardChild from "./HotelCardChild";
import ImageCover from "./ImageCover";
import img1 from '/img1.jpg';
export default function HotelCard({hotel}) {
  
 
 
  return <article className="grid grid-cols-[1fr_1fr_1fr]   w-full h-[270px]  cursor-pointer rounded-lg mt-2 shadow-lg">
    <ImageCover image={img1} className={`h-[270px]`}  hotel={hotel}/>
    <HotelCardChild className={` col-span-2`} hotel={hotel}/>

  </article>;
}
