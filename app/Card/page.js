"use client"

import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const page = ({Card}) => {
      const song=useSelector(state => state.counter.Song )
  return (
    <div className='grid grid-cols-3 gap-3 justify-center items-center'>
    {song && song.map((item)=>{
return(
<div class="  p-2  w-100  m-2 rounded-2xl border-2">
<img src={item.snippet.thumbnails.medium.url} alt="" className='w-100 rounded-3xl ' />
<h1 class="text-center mt-3 text-xl font-bold">TITLE : {item.snippet.title}</h1>

{/* <button     class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"><a href={ `https://www.youtube.com/watch?v=${item.id.videoId}`}  target="_blank" rel="noopener noreferrer"></a>SEE SONG </button> */}

<p className='w-100 bg-neutral-600  border-2 rounded-lg font-semibold hover:bg-neutral-800 cursor-pointer'><Link  href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target='_blank'>See Song</Link> </p>

</div>

)


    })}
    </div>
  )
}

export default page
