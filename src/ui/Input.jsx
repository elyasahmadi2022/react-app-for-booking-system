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
    <div className="flex items-center gap-2">
      <input
        {...register}
        hidden={hidden}
        type={type}
        id={id}
        className="text-stone-800 h-13 border-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300  w-full  pl-14 rounded-sm font-semibold placeholder:font-medium relative  focus:outline-orange-400 focus:border-none invalid:outline-red-400"
        required
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {icon && (
        <span className=" absolute left-12 px-2 text-stone-500">{icon}</span>
      )}
    </div>
  );
}
