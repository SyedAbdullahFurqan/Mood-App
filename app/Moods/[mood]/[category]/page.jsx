
import Back from "@/component/Back";
import { connectDB } from "@/lib/mongodb";
import User from "@/model/User";
import Link from "next/link";


export default async function Page({ params }) {
  const { mood, category } = await params;  // <-- happy, movie

  await connectDB();

  // find mood data from db
  const data = await User.findOne({moodss:mood})
  // this gives:
  // { mood: "happy", movies: [...], songs: [...], quotes: [...] }
console.log(data)

  let items = [];

  if (category === "movies") items = data.movies;
  if (category === "songs") items = data.songs;
  if (category === "quotes") items = data.quotes;

console.log(items)

  return (
    <div className=" pt-18">
       <Back movie={category}  catego={mood} />
      <h1 className="text-2xl  p-2 font-bold capitalize">{mood} {category}</h1>
     
<div className=' grid grid-cols-3 gap-4 px-5 justify-center items-center'>
{items?.map((card) => (
  <div className='p-3 w-full m-2 rounded-2xl transform scale-100 hover:scale-102 mx-3 border-2'>

    {/* -------------------- MOVIES UI -------------------- */}
    {category === "movies" && (
      <>
        <img 
          src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} 
          className="h-40 w-full object-cover rounded"
        />
    
        <h5 className="p-2 font-bold font-serif">Name : {card.title}</h5>


            <p className="line-clamp-2 ps-2 font-semibold font-serif "> Description : {card.
overview
}</p>
        <p className="my-2  font-serif ps-2">Release: {card.release_date}</p>
        <p className=" ps-2 font-sans">Rating: {card.vote_average}</p>
      </>
    )}

    {/* -------------------- SONGS UI -------------------- */}
    {category === "songs" && (
      <>
        <img 
          src={card.snippet?.thumbnails?.medium?.url} 
          className="h-40 w-full object-cover rounded"
        />
        <h5 className="p-3 font-bold font-serif"> Song Name : {card.snippet?.title}</h5>

        <a
          href={`https://www.youtube.com/watch?v=${card.id?.videoId}`}
          target="_blank"
          className="block bg-cyan-700  hover:bg-cyan-600  text-center w-50 m-auto text-white mt-2 p-2 rounded"
        > 
          Play Song
        </a>
      </>
    )}

    {/* -------------------- QUOTES UI -------------------- */}
    {category === "quotes" && (
      <>
      <h3 className="font-bold font-serif" > Author Name : {card.
author
}</h3>
        <p className="font-semibold">Qutoes : {card.body}</p>
      </>
    )}

  </div>
))}
</div>

    </div>
  );
}
