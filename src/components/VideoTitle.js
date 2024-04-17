import React from 'react'

export const VideoTitle = ({title, overview}) => {
     
  return (
    <div className='w-full aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold' >{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-3 px-10 text-2xl rounded-lg hover:bg-opacity-40'>▶ play</button>
            <button className='mx-2 bg-gray-500 text-white p-3 px-8 text-2xl bg-opacity-50 rounded-lg hover:bg-gray-700'>ⓘMore Info</button>
        </div>
    </div>
  )
}
