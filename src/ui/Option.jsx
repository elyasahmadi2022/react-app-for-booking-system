export default function Option({value, label}) {
  return <option className="py-0.5 w-full" value={value}>{label}</option>;
}