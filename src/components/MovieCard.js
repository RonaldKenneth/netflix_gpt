import React from 'react'
import { MovieImg } from '../utils/constants'

const MovieCard = ({imgPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img  src={ "https://image.tmdb.org/t/p/w500/"+imgPath} alt="MovieCard" />
    </div>
  )
}

export default MovieCard