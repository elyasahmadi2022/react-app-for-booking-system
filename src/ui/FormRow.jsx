export default function FormRow({ children, label }) {
  return (
    <div className="flex flex-col gap-1 px-4">
      <label htmlFor={children.props.id} className=" font-semibold capitalize">{label}</label>
      {children}
    </div>
  );
}
