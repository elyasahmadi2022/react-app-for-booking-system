export default function Input({
  type,
  id,
  placeholder,
  icon,
  register,
  value,
  hidden,
  disabled
}) {
  if (type === "checkbox")
    return (
      <input
        type={type}
        id={id}
        className=" pl-3 w-4 h-4 font-semibold transition-all duration-200   accent-orange-400  focus:border-none  "
        required
      />
    );
  return (
    <div className="flex relative  items-center gap-2">
      <input
        {...register}
        hidden={hidden}
        type={type}
        id={id}
        className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md  py-[14px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${icon ? ' placeholder:pl-1   pl-12': 'px-3' }`}
        required
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {icon && (
        <span className=" absolute left-2 px-2 text-stone-500">{icon}</span>
      )}
    </div>
  );
}
