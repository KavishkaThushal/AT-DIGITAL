import React, { useState } from 'react'
import FAQS from '../../components/faqs/FAQS'
import { data } from '../../assets/data'
import hero from '../../assets/hero.png'
import Button from '../../components/button/Button'
import image2 from '../../assets/image2.png'
import image1 from '../../assets/image1.png'

function Home() {
  const [showId, setShowId] = useState(null)
  return (
    <div className='flex flex-col gap-[60px] lg:gap-[80px]'>

      {/* hero section */}
      <div className='flex flex-col w-full relative'>
        <div className='w-full h-[218px] md:h-[448px] lg:h-[700px]'>
          <img src={hero} alt='hero' className='w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col px-[20px] pb-[32px] pt-[24px] bg-gradient-to-r from-[#4DCA79] to-AnalogousBlue gap-[20px] md:px-[40px] lg:absolute lg:w-[622px] lg:left-[60px] lg:bottom-[40px] xl:left-[80px] '>
            <h1 className='text-[36px]  font-bold text-white leading-[36px] md:text-[48px] md:leading-[48px] ' style={{ letterSpacing: '-0.02em' }}>We crush your competitors, goals, and sales records - without the B.S.</h1>
            <Button text='GET FREE CONSULTATION' height={38} width={230} onClick={()=>{}}/>
        </div>
      </div>

      {/* service section 1 */}
      <div className='flex flex-col  mx-[20px] items-center gap-[20px] md:flex-row md:mx-[40px] lg:mx-[152px]  xl:mx-[188px] xl:gap-[108px]'>
        <div className='w-[275px] h-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px]'>
          <img src={image2} alt='service 1' className='w-full h-full object-cover'/>

        </div>
        <div className='flex flex-col gap-[20px] items-center md:flex-1 md:items-start '>
          <h1 className='text-[27px] font-normal text-Primary text-center font-poppins leading-[33px]  md:text-start' style={{ letterSpacing: '0.4px' }}>Web & Mobile App Development</h1>
          <p className='text-[16px] leading-[19.36px] text-center font-thin text-black md:text-start'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>

        <Button text='LEARN MORE' height={38} width={150} onClick={()=>{}}/>
        </div>

      </div>

      {/* service section 2 */}
      <div className='flex flex-col  mx-[20px] items-center gap-[20px] md:flex-row-reverse md:mx-[40px] lg:mx-[152px]  xl:mx-[188px] xl:gap-[108px] '>
      <div className='w-[275px] h-[276px] lg:w-[346px] lg:h-[348px] xl:w-[414px] xl:h-[416px]'>
          <img src={image1} alt='service 1' className='w-full h-full object-cover'/>

        </div>
        <div className='flex flex-col gap-[20px] items-center md:flex-1 md:items-start '>
          <h1 className='text-[27px] font-normal text-Primary text-center font-poppins leading-[33px]  md:text-start' style={{ letterSpacing: '0.4px' }}>Digital Strategy Consulting</h1>
          <p className='text-[16px] leading-[19.36px] text-center font-thin text-black md:text-start'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>

        <Button text='LEARN MORE' height={38} width={150} onClick={()=>{}}/>
        </div>
        

      </div>

    {/* faq section */}
    <div className='flex flex-col gap-[28px] justify-center  mx-[20px]  md:mx-[40px] lg:mx-[152px] xl:mx-[297px]'>
      <h1 className='text-[27px] font-normal text-Primary text-center font-poppins' style={{ letterSpacing: '0.4px' }}>Frequently asked questions</h1>
      <div className=' flex flex-col gap-[15px]'>

        {data?.length ? (data?.map((item)=>(
          <FAQS
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          setShowId={setShowId}
          showId={showId}
          />
        ))):(<p className='text-Error text-sm'>No FAQs available.</p>)}

      </div>
    </div>
    </div>

  )
}

export default Home





    
