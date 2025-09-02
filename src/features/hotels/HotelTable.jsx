import React from 'react'

function HotelTable({children}) {
  return (
    <div className='w-[85%] md:w-[90%] lg:w-[95%] m-auto mt-2 table overflow-x-auto relative'>
      {children}
    </div>
  )
}

export default HotelTable