export default function Input({type,id,placeholder, icon}) {
  if (type === "checkbox")return <input  type={type} id={id} className=" pl-3 w-4 h-4 font-semibold transition-all duration-200 outline-orange-400 focus:outline-2 focus:outline-orange-400 accent-orange-400  "  required/>
  return (<div className="flex items-center gap-2">
    <input  type={type} id={id} className="text-stone-800 h-10 border-2  w-full  pl-9 rounded-sm font-semibold placeholder:font-medium relative  focus:outline-orange-400 focus:border-none"  required placeholder={placeholder}/>
    <span className=" absolute left-14 text-stone-500">{icon}</span>
  </div>);
}