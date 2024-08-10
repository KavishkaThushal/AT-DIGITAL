import React from 'react'
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className='flex flex-col w-full  bg-Primary pt-[40px] pb-[20px] px-[20px] gap-[40px] md:px-[40px] lg:px-[60px]  '>
      <div className='flex flex-col gap-[60px] lg:flex-row justify-between '>
      <div className='flex flex-col gap-[20px] '>
        <div className=' w-[238.89px]'>
          <img src={logo} alt='logo' className='w-full h-full' />
        </div>
        <p className='text-white font-lato text-[16px] font-light  leading-[19px] w-[330px] md:w-[400px]'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>

      </div>

      <div className='flex flex-col gap-[40px] md:gap-[80px] md:flex-row lg:gap-[96px]'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-white font-lato text-[21px] font-normal'>Our Technologies</h3>
          <p className='text-white font-lato text-[14px] font-light '>ReactJS</p>
          <p className='text-white font-lato text-[14px] font-light '>Gatsby</p>
          <p className='text-white font-lato text-[14px] font-light '>NextJS</p>
          <p className='text-white font-lato text-[14px] font-light '>NodeJS</p>

        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-white font-lato text-[21px] font-normal'>Our Services</h3>
          <p className='text-white font-lato text-[14px] font-light '>Social media Marketing</p>
          <p className='text-white font-lato text-[14px] font-light '>Web & Mobile App Development</p>
          <p className='text-white font-lato text-[14px] font-light '>Data & Analytics</p>

        </div>

      </div>
      </div>

      <div className='flex flex-col gap-[8px]'>
      <hr className=' w-80 mx-auto md:w-[630px]'/>
      <div className='flex flex-row gap-[16px] justify-center items-center text-white font-light text-[14px]'>
        <span >Privacy Policy</span>
        <span>|</span>
        <span>Terms & Conditions</span>
      </div>

      </div>


    </div>
  )
}

export default Footer