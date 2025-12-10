
"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const page = () => {
 
    const [Data, setData] = useState(null);
async  function get(params) {
  try {
    const res = await fetch("http://localhost:3000/api/Genrator", {
    method:'GET',

 
    }); 
    console.log(res)
if (res.ok) {
  const datas = await res.json();
console.log(datas)
setData(datas.get)

  //  setQuot({Quotes:datas.datas.quotes})
}
   
  } catch (error) {
    console.error("Error fetching FavQs API:", error);
  }
}
useEffect(() => {
  get()
}, []);

  return (

    <>


    <div  className=' pt-16  min-h-screen flex w-full justify-center items-center flex-col '>

      
    <h1 className='text-center  space-y-6 text-3xl font-bold my-2'>Choose Your Mood to Discover Something Just for You <br /><span className='space-y-6  font-semibold text-cyan-500'>
Movies, Songs & Quotes matched perfectly to your emotions</span>.</h1>
<div className='grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 mt-3 mx-2 gap-5 justify-center items-center w-full'>
      {Data && Data.map((allData)=>{

console.log(allData)
return(



      <div className=' w-fit  hover:scale-105 transition-all
 border-2 p-3 mx-4 capitalize text-center my-2  rounded-3xl  '>
{/* 
      <img className='w-100' src={`${allData.
Imges || ""}` } alt="" /> */}
      <Image width={90} height={80} src={allData.Imges || "" } className='m-auto my-2' alt="img not found" />
        
  <h3> Mood : {allData.moodss}</h3>
  <Link href={`/Moods/${allData.moodss}/movies`}>
  <button className='my-2 capitalize border-2 rounded-3xl px-3 py-1 cursor-pointer '>🎬 Explore {allData.moodss}  Movies</button>
</Link>
<Link href={`/Moods/${allData.moodss}/songs`}>
  <button className=' my-2  capitalize border-2 rounded-3xl px-3  py-1 cursor-pointer '>🎵 Listen to   {allData.moodss} Songs</button>
</Link> 
<Link href={`/Moods/${allData.moodss}/quotes`}>
  <button className='rounded-3xl capitalize border-2 px-3 py-1 cursor-pointer'>💬 Reads {allData.moodss} Quotes</button>
   
   </Link></div>

)

      })}</div>
</div>
      {/* <img src={IMG.img} className='w-50'/>
      <div className='capitalize text-center my-2 w-100'>
  <h3> Mood : {IMG.value}</h3>
  <Link href={"/Movie"}>
  <button className='my-2 capitalize border-2 rounded-3xl px-3 py-1'>see {IMG.value}Movie</button>
</Link>
<Link href={"/Card"}>
  <button className=' my-2  capitalize border-2 rounded-3xl px-3 py-1'>see {IMG.value}Song</button>
</Link> 
<Link href={`/Emjoy`}>
  <button className='rounded-3xl capitalize border-2 px-3 py-1'>see {IMG.value}Quotes</button>
   
   </Link></div>  */}

   </>
  )
}

export default page


