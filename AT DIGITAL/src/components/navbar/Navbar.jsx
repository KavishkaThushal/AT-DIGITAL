import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
 
  return (
    
      
    <div className='flex flex-row bg-Primary h-[77px] px-[20px] py-[26px] xl:px-[80px]  lg:px-[60px]  md:px-[40px]  items-center justify-between w-full'>
      <div className='h-[25px]  '>
        <img src={logo} alt='logo' className='w-full h-full ' />
      </div>
      

      <div className={`${showMenu? 'translate-x-0 ' : 'translate-x-full  '} flex flex-col   fixed gap-[32px] px-[20px] py-[16px]  top-0 right-0  bg-white w-full h-screen  z-10  text-stone-900  text-[14px] font-light  transition-transform transform duration-300 ease-in-out  sm:flex sm:relative  sm:bg-inherit  sm:w-auto sm:h-auto sm:px-0 sm:py-0 sm:flex-row sm:gap-[28px]  sm:text-white sm:translate-x-0`}>
        <Link to='/' className='flex sm:hidden'>HOME</Link>
        <Link to='/services'>SERVICES</Link>
        <Link to='/aboutus'>ABOUT US</Link>
        <Link to='/contact'>CONTACT US</Link>
        <Link to='/careers'>CAREERS</Link>  
        <IoClose size={32} className='absolute sm:hidden top-2 right-2' onClick={()=>(setShowMenu(false))} />            
      </div>

      <RxHamburgerMenu className='sm:hidden text-white' size={25} onClick={() => setShowMenu(prev => !prev)}/>

    </div>
    
  )
}


export default Navbar