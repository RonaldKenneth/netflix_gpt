import React from 'react'

export const VideoTitle = ({title, overview}) => {
     
  return (
    <div className='w-[100%] aspect-video pt-[20%] px-6 md:px-10 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='pt-6 md:text-4xl font-bold' >{title}</h1>
        <p className='hidden md:inline-block py-6 w-1/4'>{overview}</p>
        <div className="my-4 md:m-0">
            <button className='bg-white bg-opacity-50 text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80'>▶ play</button>
            <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>ⓘMore Info</button>
        </div>
    </div>
  )
}
