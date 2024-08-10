import React from 'react'
import { FiPlus, FiMinus  } from "react-icons/fi";



function FAQS({id,title,content,setShowId,showId}) {
  
  return (
    <div className='flex flex-col p-[24px] bg-[#FAF8FF] rounded-[7px] gap-[13px]  transition-all duration-700 ease-in-out'>
      <div className='flex flex-row justify-between  '>
      <span className={`text-[18px] font-light ${showId===id ? 'text-Primary':'text-black'} leading-[28px]`}>{title}</span>
      <span className='flex text-[18px] font-light cursor-pointer transition-transform duration-1000 ease-in-out' onClick={()=>(setShowId(prev=>prev===id? null:id ))} >{showId===id? <FiMinus />:<FiPlus />}</span>
      

      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out`}
        style={{ maxHeight: showId===id ? '500px' : '0px',opacity: showId===id  ? 1 : 0
           }}
      >
        <p className='text-[16px] font-thin text-[#6F6C90] leading-[30px]'>
          {content}
        </p>
      </div>

    </div>
  )
}

export default FAQS