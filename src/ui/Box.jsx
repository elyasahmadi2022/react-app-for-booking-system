export default function Box({children}) {
  return (<div className=" flex flex-col gap-1 px-4 relative">
    {children}
  </div>);
}