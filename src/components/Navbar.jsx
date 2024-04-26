import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'



const Navbar = () => {
    const [nav, setNav]=useState(false)
    const hadlerClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div className='z-20'>
         <p className='font-bold'><em className='text-xl'>Xurshidbek</em></p>
       </div>
       {/* Menu */}
         <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer'>
            <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
            <Link to='about' smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
            <Link to='skills' smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
            <Link to='work' smooth={true} duration={500}>
            Work
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
            <Link to='contact' smooth={true} duration={500}>
            Contact
            </Link>
            </li>
         </ul>
       {/* Hamburger */}
       <div onClick={hadlerClick} className='md:hidden z-10 transition-all duration-300'>
        {!nav?<FaBars/>:<FaTimes/>}
       </div>
       {/* Mobile menu */}
       <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r pt-16 border-r-gray-900 bg-[#0a192f] ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <li  className='py-6 text-3xl'>
            <Link onClick={hadlerClick} to='home' smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li  className='py-6 text-3xl'>
            <Link onClick={hadlerClick} to='about' smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li  className='py-6 text-3xl'>
            <Link onClick={hadlerClick} to='skills' smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li className='py-6 text-3xl'>
            <Link onClick={hadlerClick} to='work' smooth={true} duration={500}>
            Work
            </Link>
            </li>
            <li className='py-6 text-3xl'>
            <Link onClick={hadlerClick} to='contact' smooth={true} duration={500}>
            Contact
            </Link>
            </li>
       </ul>
       {/* Social icons */}
       <div className='hidden lg:flex  fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a href="https://www.linkedin.com/in/xurshidbek-tursunaliyev-ba1043306/" className='flex justify-between items-center w-full text-gray-300 mx-4'>
                    Linkedin<FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a href="https://github.com/XurshidbekTv" className='flex justify-between items-center w-full text-gray-300 mx-4'>
                    Github<FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a href="xurshidbektursunaliyev92@gmail.com" className='flex justify-between items-center w-full text-gray-300 mx-4'>
                    Email<HiOutlineMail size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a href="/" className='flex justify-between items-center w-full text-gray-300 mx-4'>
                    Resume<BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar