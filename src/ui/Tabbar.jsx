export default function TabBar({children}) {
  return (<div className=" w-2/3 lg:w-2/4  rounded-full  min-h-10 mx-auto cursor-pointer box-border py-0.5 flex justify-around gap-1 shadow-2xl  flex-nowrap shadow-blue-200  ">
    {children}
  </div>);
}