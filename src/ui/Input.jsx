export default function Input({type,id,placeholder}) {
  if (type === "checkbox")return <input  type={type} id={id} className=" pl-3 w-4 h-4 font-semibold transition-all duration-200 outline-orange-400 focus:outline-2 focus:outline-orange-400 accent-orange-400  "  required/>
  return (<input  type={type} id={id} className="text-stone-800 h-10 border-2 pl-3 rounded-sm font-semibold placeholder:font-medium "  required placeholder={placeholder}/>);
}