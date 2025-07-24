export default function Label({ htmlFor, children}) {
  return (
    <label htmlFor={htmlFor} className="text-stone-800 font-semibold">
      {children}
    </label>
  );
}
