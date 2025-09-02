export function Select({children, id, register, onChange, disabled}) {
  return <select disabled={disabled} {...register} onChange={onChange}  id={id} className=" disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300  w-full  rounded-sm    border-none outline-2 focus:outline-orange-400  px-2 py-4">
    {children}
  </select>;
}