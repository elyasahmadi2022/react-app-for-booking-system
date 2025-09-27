export default function Option({value, label}) {
  return <option className="py-0.5 w-full text-slate-500 font-medium" value={value}>{label}</option>;
}