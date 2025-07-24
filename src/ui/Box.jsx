export default function Box({children}) {
  return (<div className=" flex flex-col gap-1 px-4 py-2 relative">
    {children}
  </div>);
}