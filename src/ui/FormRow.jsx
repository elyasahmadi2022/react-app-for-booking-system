export default function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col gap-1 px-4">
      <label htmlFor={children.props.id} className=" font-medium text-neutral-700 capitalize">{label}</label>
      {children}
      {error && <p className="text-red-400 text-[12px] ">{error}</p>}
    </div>
  );
}
