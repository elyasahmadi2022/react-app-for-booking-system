export default function FormRow({ children, label, error, className }) {
  return (
    <div className={`flex flex-col gap-1 px-2 ${className}`}>
      <label htmlFor={children.props.id} className=" font-medium text-neutral-700 capitalize">{label}</label>
      {children}
      {error && <p className="text-red-400 text-[12px] ">{error}</p>}
    </div>
  );
}
