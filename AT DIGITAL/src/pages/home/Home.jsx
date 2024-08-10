import React, { useState } from 'react'
import FAQS from '../../components/faqs/FAQS'
import { data } from '../../assets/data'


function Home() {
  const [showId, setShowId] = useState(null)
  return (

    //faq section
    <div className='flex flex-col gap-[15px] justify-center  mx-[20px]'>
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
  )
}

export default Home