"use client"

import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Imgess, mega} from '@/store/counterSlice';
import { useRouter } from "next/navigation"; // ✔ RIGHT
const page = () => {
  const [Mood, setMood] = useState("");
 
  const router=useRouter()
//     const moodToGenres = {
//   happy: "35,10751",
//   sad: "18,10749",
//   romantic: "10749",
//   angry: "28,53",
//   excited: "28,12",
//   chill: "10749,35",
//   dark: "27,53",
//   motivational: "99,18",
//   nostalgic: "16,35,14"
// };
 const dis=useDispatch()

const moods = [
    { value: "happy", label: "Brighten your day with uplifting songs, feel-good movies, and positive quotes.", emoji: "😊", img: "/happiness.png" },
    { value: "sad", label: "Find comfort with soothing music, emotional movies, and thoughtful quotes.", emoji: "😢", img: "/emoji.png" },
    { value: "angry", label: "Boost your focus with energetic playlists and inspiring quotes.", emoji: "😠", img: "/angry.png" },
    { value: "chill", label: "Relax with peaceful music, soft movies, and calming quotes.", emoji: "😎", img: "/cool.png" },
     { value: "romantic",emoji:"❤️", label:"Soft vibes for the heart.", img: "/heart.png" },
  
  ];

let styles=""
let text=""
let butt=""
let hover=""
function colors(params) {
  if (Mood=="happy") {
    text="#E2852E"

    butt="#E2852E"
hover="#FB923C"
    return styles=" linear-gradient(to  right, #FEF08A, #FDBA74)"
  }
    if (Mood=="sad") {
hover=" #60A5FA"
      text="#DBEAFE"
      butt="#3B82F6"
    return styles="linear-gradient(to bottom right, #1E3A8A, #1D4ED8)"
  }
     if (Mood=="angry") {
         text="#ffffff"
          butt="#EF4444"
          hover="#F97316"
    return styles=" linear-gradient(to bottom right, #DC2626, #EA580C"
  }

     else if (Mood=="chill") {
        text=" #F3F4F6"
        hover="#5EEAD4"
         butt="#14B8A6"
    return styles="linear-gradient(to bottom right, #0F766E, #3B82F6)"
  }

    else  if (Mood=="romantic") {
        text=" F875AA "
        hover="#5EEAD4"
         butt="#EF4444"
    return styles="linear-gradient(to left, #ffd2d2, #FFA5EC)"
  }
}

// const genreIds = moodToGenres[Mood.toLowerCase()];

//     const query = encodeURIComponent(`${Mood} Hindi song`);





// async function quotes() {
  
// try {
//     const res = await fetch("http://localhost:3000/api/Genrator", {
//     method:'POSTS',
//  body:JSON.stringify(Quot)
 
//     }); 
// if (res.ok) {
//   const datas = await res.json();
// console.log(datas)
// dis(Quotes(datas))
 
// }
   
//   } catch (error) {
//     console.error("Error fetching FavQs API:", error);
//   }
// }
const confige= async()=>{

 const ing =await fetch(`https://api.themoviedb.org/3/configuration?api_key=9c1352a5828c9a5331c24a2f7782b113`)
const data= await ing.json()
dis(mega(data.images.secure_base_url+'original'))
console.log(data
)

}
useEffect(() => {
  confige()
  colors()
}, [Mood]);
// function click(s) {
// s.preventDefault()
// async function genrate(s) {
  
//   try {
//     const res = await fetch("http://localhost:3000/api/Genrator", {
//     method:'POST',
//  body:JSON.stringify(Mood)
 
//     }); 
// if (res.ok) {
//   const datas = await res.json();
// console.log(datas.datas.quotes)
// dis(Quotes(datas.datas.quotes))
//   //  setQuot({Quotes:datas.datas.quotes})
// }
   
//   } catch (error) {
//     console.error("Error fetching FavQs API:", error);
//   }
// }



//  async  function faraz (params) {

//       const res = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=9c1352a5828c9a5331c24a2f7782b113&with_genres=${genreIds}`
//     );
//     const conv= await res.json()
// dis(Movies(conv.results))

//    }

// const get=  await res.json()
// console.log(get.items)
//   dis(Song(get.items))
//   // setQuot({Song:get.tracks.track})
//       } catch (error) {
//         console.error("Error fetching Deezer API:", error);
//     }

// }

//     router.push(`/Genrate`);
// return song(),faraz(),genrate()




// }


async function clickks(params) {
  
  try {
    const res = await fetch("http://localhost:3000/api/Genrator", {
    method:'POST',
 body:JSON.stringify(Mood)
 
    }); 
if (res.ok) {
  const datas = await res.json();
console.log(datas)
router.push(`/Genrate`);
  //  setQuot({Quotes:datas.datas.quotes})
}
   
  } catch (error) {
    console.error("Error fetching FavQs API:", error);
  }
}
const data=moods.filter((m) => m.value === Mood)
    
console.log(data.map((m) => m.img))




console.log(Mood)

  return (
    <div className=' pt-15' style={{background:colors()} }  >

  <div className=' w-full flex flex-col cursor-pointer  min-h-screen justify-center items-center  '>


         

<h1 style={{color:butt}} className=' mx-2 text-center text-3xl font-bold font-sans '>
  Discover Movies, Songs & Quotes Based on Your <span >Mood</span>
</h1>
{/* <p className="  mt-4 text-2xl font-semibold   text-center leading-loose">
  Tell us how you feel, and we’ll generate the perfect movies, songs, and quotes for your vibe.
 .
</p> */}
<p className='  mt-5 text-2xl text-center leading-loose '>
  Whether you're happy, sad, stressed, romantic, or just chilling <br />
  Pick a mood and explore a personalized collection crafted just for you  </p>
<h1  className="block mb-2 text-2xl mt-5">
  Choose Your Mood
</h1>
      <select
        className=" w-40 p-2 my-3   border-2 rounded-md"
        value={Mood}
        onChange={(e)=> setMood(e.target.value)}
      >
        <option value="" className=''>-- Select mood --</option>
        {moods.map((m) => (
          // emoji + label shown as option text (works in browsers)
          <option key={m.value} value={m.value}>
            {m.emoji} {m.value}
          </option>
        ))}
      </select><br />
{Mood &&
  moods
    .filter((m) => m.value === Mood)
    .map((m, index) => {
      dis(Imgess(m));
      return (  
        <div className='border-2  text-center flex flex-col items-center justify-center  p-2 rounded-3xl'  key={m.value}>
          <Image
            src={m.img}
            width={100}
            height={44}
            alt={m.label}
          />
          <p className='p-2 my-2'>{m.label}</p>
        </div>
      );
    })}
  <button onClick={clickks} style={ {backgroundColor:butt,}} className='mt-4 border-2  rounded-3xl w-30 p-3 px-4 py-2 ' > Genrate</button>

  </div>

    </div>
  )
}

export default page
