import { createContext } from "react";
import Mark from "../../ui/Mark";
const CardContext = createContext();
export default function Card({ children }) {
  return (
    <CardContext.Provider>
      <article className="rounded-sm cursor-pointer flex flex-col hover:scale-y-105 hover:scale-x-105 transition-all duration-300 shadow-2xl shadow-stone-400/60">
        {children}
      </article>
    </CardContext.Provider>
  );
}
function CardRow({ children }) {
  return <div className="flex flex-col px-4 py-2 ">{children}</div>;
}
function CardImage({ children }) {
  return (
    <div className=" overflow-hidden h-2/4  p-0 m-0 w-full">{children}</div>
  );
}
function Description({ children }) {
  return <p className="text-stone-500 mb-2 text-sm">{children}</p>;
}
function PriceAndName({ children }) {
  return <div className="py-4 flex justify-between">{children}</div>;
}
function Marks({ children }) {
  return <div className="grid grid-cols-2 gap-3 py-2">{children}</div>;
}
function Button({ children }) {
  return (
    <button className="py-3 flex gap-2 justify-center items-center bg-orange-400 hover:bg-orange-500 cursor-pointer border-2 border-orange-400 px-3 text-lg font-bold text-white rounded-sm focus:outline-2 focus:outline-orange-400 outline-offset-2 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] w-full">
      {children}
    </button>
  );
}
Card.CardRow = CardRow;
Card.CardImage = CardImage;
Card.Description = Description;
Card.PriceAndName = PriceAndName;
Card.Marks = Marks;
Card.Button = Button;
