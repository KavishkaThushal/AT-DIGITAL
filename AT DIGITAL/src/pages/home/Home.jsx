import React, { useState } from 'react'
import FAQS from '../../components/faqs/FAQS'
import { data } from '../../assets/data'


function Home() {
  const [showId, setShowId] = useState(null)
  return (

    //faq section
    <div className='flex flex-col gap-[28px] justify-center  mx-[20px] my-[60px] md:mx-[40px]'>
      <h1 className='text-[27px] font-normal text-Primary text-center'>Frequently asked questions</h1>
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
  )
}

export default Home