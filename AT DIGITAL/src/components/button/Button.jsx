import React from 'react'

function Button({height,width,text,onClick}) {
  return (
    <button className={`flex items-center justify-center bg-Secondary  text-white text-[14px] font-bold px-[20px] py-[12px] rounded`} style={{ height: `${height}px`, width: `${width}px` }} onClick={onClick}>{text}</button>
  )
}

export default Button
    
    