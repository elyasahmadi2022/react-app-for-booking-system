export default function Mark({ icon, text }) {
  return (
    <div className="flex gap-1  items-center font-poppins">
      <span>{icon}</span>
      <span className=" text-[10px]">{text}</span>
    </div>
  );
}
