import React, { useState } from 'react'
import FAQS from '../../components/faqs/FAQS'
import { data } from '../../assets/data'
import hero from '../../assets/hero.png'
import Button from '../../components/button/Button'

function Home() {
  const [showId, setShowId] = useState(null)
  return (
    <div className='flex flex-col'>
      {/* //hero section */}
      <div className='flex flex-col w-full '>
        <div className='w-full h-[218px] md:h-[448px]'>
          <img src={hero} alt='hero' className='w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col px-[20px] pb-[32px] pt-[24px] bg-gradient-to-r from-[#4DCA79] to-AnalogousBlue gap-[20px] md:px-[40px]  '>
            <h1 className='text-[36px]  font-bold text-white leading-[36px] md:text-[48px] md:leading-[48px]'>We crush your competitors, goals, and sales records - without the B.S.</h1>
            <Button text='Get free consultation' height={38} width={214} onClick={()=>{}}/>
        </div>

      </div>

    {/* faq section */}
    <div className='flex flex-col gap-[28px] justify-center  mx-[20px] my-[60px] md:mx-[40px] lg:mx-[152px] xl:mx-[297px] lg:my-[80px]'>
      <h1 className='text-[27px] font-normal text-Primary text-center font-poppins'>Frequently asked questions</h1>
      <div className=' flex flex-col gap-[15px]'>

        {data?.map((item)=>(
          <FAQS
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          setShowId={setShowId}
          showId={showId}
          />
        ))}

      </div>
    </div>
    </div>

  )
}

export default Home




    
