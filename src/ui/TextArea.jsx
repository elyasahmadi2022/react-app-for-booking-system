import React from 'react'

function TextArea({className, id, placeholder, register, disabled}) {
  return <textarea disabled={disabled}  {...register}  className={`${className} disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300  focus:outline-orange-400  w-full px-2 py-2 outline-2 rounded-sm text-sm text-gray-900 bg-white  focus:ring-0`} placeholder={placeholder} id={id}></textarea>
}

export default TextArea