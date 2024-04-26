import React from 'react'
import Uy from '../assets/uy.avif'
import Tosh from '../assets/tosh.avif'
import Kol from "../assets/kol.avif"
import kino from "../assets/kino.avif"
import Build from "../assets/build.avif"
import Airpots from "../assets/airpots.jpg"



const Work = () => {
  return (
    <div name="work" className='w-full bg-[#0a192f] md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Chesk out some of my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${Uy})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        React JS and Tailwind CSS 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/Tailwind-css-Loyiha-2/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/Tailwind-css-Loyiha-2">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div style={{backgroundImage: `url(${Tosh})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/React-sevimliy-kinolar-3/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/React-sevimliy-kinolar-3">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${kino})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        HTML and BOOTSTRAP
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/SupperMap-hizmatlar/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/SupperMap-hizmatlar">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${Build})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                       My Work
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/MyWork/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/MyWork">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${Airpots})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        Netfico
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/Netfico/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/Netfico">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${Kol})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                   {/* Hover Efeckt */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                        Rayal Park
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xurshidbektv.github.io/Rayal-Park/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/XurshidbekTv/Rayal-Park">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Work