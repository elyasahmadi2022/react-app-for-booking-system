
export default function FormSearchInput({
  icon,
  label,
  value,

}) {

  return (
    //
    <div>
      <div className="relative cursor-pointer">
        <div className="py-2 pl-10 pt-5 text-[13px] pb-2 h-full  w-full border-[1.5px] rounded-sm invalid:outline-orange-400">
          {value}
        </div>
        <span className=" absolute top-1 left-10 text-[10px]">{label}</span>
        <div className=" absolute left-3 top-2/4 -translate-2/4 pl-2">
          {" "}
          {icon}
        </div>
      </div>
    </div>
  );
}
