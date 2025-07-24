export default function Acheive({ title, icon, num }) {
  return <div className="grid grid-cols-2 py-3 font-poppins max-sm:py-1 cursor-pointer">
    <span className="">{icon}</span>
    <span className=" font-extrabold text-white text-2xl text-center max-sm:text-sm">{num}</span>
    <span className=" col-span-2 font-semibold text-white max-sm:text-sm ">{title}</span>
  </div>;
}
