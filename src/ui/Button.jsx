export default function Button({ children, type, onClick, optionalStyle }) {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className={`py-3 flex gap-2 bg-orange-400 hover:bg-orange-500 cursor-pointer border-2 border-orange-400 px-3 text-lg font-bold text-white rounded-sm focus:outline-2 focus:outline-orange-400 outline-offset-2 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px] ${optionalStyle}`}
      >
        {children}
      </button>
    );
  }
  if (type === "login") {
    return (
      <button
        onClick={onClick}
        className="py-2 flex gap-2 text-center bg-orange-400 hover:bg-orange-500/80 cursor-pointer border-2 border-orange-400 px-3 text-lg font-bold text-white rounded-sm focus:outline-2 focus:outline-orange-400 outline-offset-2 capitalize tracking-wide max-sm:py-2 max-sm:px-2 max-sm:text-[15px]"
      >
        {children}
      </button>
    );
  }
  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        className="py-3 bg-black/10 px-3 text-white font-semibold capitalize tracking-wide rounded-sm cursor-pointer hover:bg-black/40 focus:outline-2 focus:outline-orange-400 focus:outline-offset-2 max-sm:py-2 max-sm:px-2 max-sm:text-[15px]"
      >
        {children}
      </button>
    );
}
