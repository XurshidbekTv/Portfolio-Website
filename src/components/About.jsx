import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                </p>
            </div>
            <div></div>
        </div>
        <div className='max-w-[900px] w-full grid grid-cols-1 px-11 gap-8 justify-center items-center'>
            <div>
                <p className='text-xl'>I was born in Fergana region, I am 24 years old.
In 2019-2023, I graduated from Tashkent State Transport University (Faculty of Railway Transport Engineering). Due to my interest in this field, I started learning programming at the beginning of the 4th year. I am passionate about building excellent software that improves the lives of those around me.</p>
            </div>
        </div>
      </div>                  
    </div>
  )
}

export default About