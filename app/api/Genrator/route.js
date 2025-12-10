
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import User from "@/model/User";
import { Shadows_Into_Light } from "next/font/google";
import { authOptions } from "../auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";


export async function POST( request) {
  const fet = await request.json();

    const moodToGenres = {
  happy: "35,10751",
  sad: "18,10749",
  romantic: "10749",
  angry: "28,53",
  excited: "28,12",
  chill: "10749,35",
  dark: "27,53",
  motivational: "99,18",
  nostalgic: "16,35,14"
};
const genreIds = moodToGenres[fet];
const moods = [
    { value: "happy", img:"/happiness.png" },
    { value: "sad", img: "/emoji.png" },
    { value: "angry",  img: "/angry.png" },
    { value: "chill", img: "/cool.png" },
       { value: "romantic", img: "/heart.png" },
  ];
// const data=moods.filter((m) => m.value == fet)
// let imgss;
//    data.map((m) => (
// imgss=m.img
//    )
// );
const normalized = String(fet).trim().toLowerCase();

const found = moods.find(
  (m) => m.value.toLowerCase() === normalized
);

// console.log(imgss)
//      let saveData = await User.create({

//   Imges:imgss,
//  })

        
         
        //  return NextResponse.json({datas:`You sent ${fet}`,imggg:found.img})
   
const query = encodeURIComponent(`${fet} Hindi song`);

      try {
         const res = await fetch(
     ` https://favqs.com/api/quotes/?filter=${fet}`,
      {
        headers: {
          "Authorization": 'Token token="7ef0a7bf5d583c0092324e110cc96afc"'
        },
        cache: "no-store"
      }
    );
       const conv=await res.json()
const movies= await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MovieKey}&with_genres=${genreIds}`
    )

    const convets= await movies.json()
//  return NextResponse.json({datas:`moviee data ${JSON.parse(convets)}`});
      const song= await fetch(
  `${process.env.GoogleAPIKey}/search?part=snippet&type=video&maxResults=10&q=${query}&key=${process.env.GoogleToken}`
);

const get=  await song.json()

      await connectDB()
  const session = await getServerSession(authOptions);
console.log(session)
  if (!session) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  // const user = await Mood.findOne({ emails: session.user.email });
   const existingMoods = await User.findOne({emails: session.user.email, moodss:fet });
      


   if (!existingMoods) {
     let saveData = await User.create({
  moodss: fet,
Imges: found?.img || "",
emails:session.user.email,
  movies: convets.results,   // ✅ NOW MATCHES SCHEMA
     quotes: conv.quotes.slice(0, 20),   // LIMIT TO 10 QUOTES
         songs: get.items
});
 

        return NextResponse.json({moodsss:saveData,imggg:found})
}
     
  return   NextResponse.json({moodsss:`moods  alerdy exist`,imggg:found})
// const saved = await User.create({
//      moodss:fet, movie:convets.results
//     });  
       
      } catch (error) {
        console.error("Error fetching FavQs API:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }
//   try{
// const res = await fetch("https://zenquotes.io/api/quotes");
//   const data= await res.json()
//  return NextResponse.json({data})
// }

  
  
//    catch (error) {
//     console.error("Error fetching FavQs API:", error);
//   }




  


export async function GET( request) {


      try {
    await connectDB();

    const session = await getServerSession(authOptions);
    console.log("SESSION:", session);

    if (!session) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    // ✅ Get all data of the logged-in user (email)
    const bodt = await User.find({ emails: session.user.email });

    return NextResponse.json({
      success: true,
      
      get: bodt
    });


  } catch (error) {
   return NextResponse.json({ success: false, message: error.message });
  }


  // return NextResponse.json({ message: "POST request working ✅", data: body });
}
  
