export function FooterList({ children, title }) {
  return (
    <ul className="list-none flex flex-col gap-1 [&>li]:cursor-pointer [&>li]:pl-2  [&>li]:text-sm [&>li]:max-md:text-[10px]">
      <h1 className=" font-semibold text-lg max-md:text-sm">{title}</h1>
      {children}
    </ul>
  );
}
