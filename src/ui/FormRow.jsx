export default function FormRow({ children, label, error, className }) {
  return (
    <div className={`flex flex-col gap-1 px-2 ${className}`}>
      <label htmlFor={children.props.id} className="py-1 text-slate-500 capitalize block text-base font-medium text-dark dark:text-white">{label}</label>
      {children}
      {error && <p className="text-red-400 pt-3 text-[12px] ">{error}</p>}
    </div>
  );
}
