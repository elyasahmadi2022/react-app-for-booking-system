import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
export default function ImageCover({ className, hotel }) {
  const { images: mainImage, hotel_rooms } = hotel;
  const images = hotel_rooms.map((room) => room.images);
  images.push(mainImage);
  const initailImage = 0;
  const lastImage = mainImage.length;

  const moveLeft =() => {

  }
  const moveRight =() => {

  }
  return (
    <div
      className={`${className} w-full h-full relative rounded-lg`}
    >
      <div className="w-full h-full rounded-sm">
        {/* {images.map((image, index) => (
          <div key={index} className={`w-full  h-full  transition-all duration-200`}>
            <img src={image} className="w-full" alt={`The image of hotel in `} />
          </div>
        ))} */}
        <img src={mainImage} className="w-full h-full rounded-sm"/>
      </div>
      <AiOutlineHeart
        size={30}
        className=" absolute top-2 right-2 cursor-pointer"
        color="red"
      />
      <AiFillCaretLeft
        onClick={moveLeft}
        className=" absolute top-2/4 left-1  rounded-full bg-orange-400  p-1 cursor-pointer hover:bg-orange-400/70"
        color="white"
        size={25}
      />
      <AiFillCaretRight
        onClick={moveRight}
        className=" absolute top-2/4 right-1 p-1 rounded-full bg-orange-400 cursor-pointer hover:bg-orange-400/70 "
        color="white"
        size={25}
      />
    </div>
  );
}
