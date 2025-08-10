export function Heading({children, as, className}) {
  if(as === 'h1') return <h1 className={` text-2xl font-bold tracking-wide capitalize ${className}`}>{children}</h1>
  if(as === 'h2') return <h2 className={` text-xl font-[600] tracking-wide capitalize ${className}`}>{children}</h2>
  if(as === 'h3') return <h3 className={` text-lg font-semibold tracking-wide capitalize ${className}`}>{children}</h3>
  if(as === 'h4') return <h4 className={`text-[15px] font-medium tracking-wide capitalize ${className}`}>{children}</h4>
  if(as === 'h5') return <h5 className={`text-sm font-medium tracking-wide capitalize ${className}`}>{children}</h5>
}