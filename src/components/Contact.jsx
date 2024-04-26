import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/lakmdgqa" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email -myemail@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-sm ' type="text" placeholder='Name' name='name'/>
            <input className='bg-[#ccd6f6] p-2 rounded-sm my-4' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 rounded-sm' name="textarea" id="" cols="message" rows="10" placeholder='Message'></textarea>
            <button className='mx-auto flex items-center text-white border-2 hover:bg-blue-500 hover:border-pink-600 px-4 py-3 my-8 rounded-sm'>Let's Collabrate</button>
        </form>
    </div>
  )
}

export default Contact