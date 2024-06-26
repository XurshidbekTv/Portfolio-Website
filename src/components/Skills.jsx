import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'
import Vite from '../assets/vite.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid gird-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="html" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="html" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="html" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} alt="html" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="html" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="html" />
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Vite} alt="html" />
                    <p className='my-4'>VITE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills