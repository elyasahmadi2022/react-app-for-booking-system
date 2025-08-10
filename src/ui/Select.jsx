export function Select({children, id, register, onChange}) {
  return <select {...register} onChange={onChange}  id={id} className="w-full  rounded-sm    border-none outline-2  p-2">
    {children}
  </select>;
}