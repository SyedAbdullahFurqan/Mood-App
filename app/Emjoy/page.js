"use client"


import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

        const QUOTES=useSelector(state => state.counter.quotes)


  return (
    <div className='grid grid-cols-3 gap-3 justify-center items-center'>
   {QUOTES && QUOTES.map((item)=>{
return(
<div class="border-2 p-3 rounded-3xl">

<h1  class="text-center mt-3 text-xl font-bold">Author Name : {item.author}</h1>
<p  class="text-center ">Qutoes : {item.body}</p>
</div>

)


    })}
    </div>
  )
}

export default page
