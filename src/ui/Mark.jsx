export default function Mark({ icon, text }) {
  return (
    <div className="flex gap-3  items-center">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
