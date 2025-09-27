import React from 'react'

function HotelTable({children, topHeader, pagination}) {
  
  return (
    <div className='w-full overflow-x-auto   m-auto  mt-2'>
      <div className='w-full my-1'>{topHeader}</div>
      <div className='w-full  table relative'>{children}</div>
      <div className='w-full mx-auto flex justify-end items-center py-2'>{pagination}</div>
    </div>
  )
}

export default HotelTable