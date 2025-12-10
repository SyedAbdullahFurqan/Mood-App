
"use client"

import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
           const MOVIE=useSelector(state => state.counter.Movie)
  const urls= useSelector(state => state.counter.url)

  return (
    <>
      <div className='grid grid-cols-3 gap-5 justify-center items-center'>
{MOVIE?.map((cards)=>(
  
<div className='   p-2  w-100  m-2 rounded-2xl border-2'>

<img src={urls+cards.backdrop_path}  alt="img not found" className="h-40 w-full object-cover rounded"/>


<h5 className='pt-3 '>{cards.title || cards.name
}</h5>
<div className='flex flex-col  sm:flex-row'>
    <span className=''>Realse Date : {cards.release_date || cards.first_air_date    
}</span>
    <span className='sm:ml-6'>vote: {cards.vote_average
}</span>
</div>

</div>
))}


</div>
    </>
  )
}

export default page
