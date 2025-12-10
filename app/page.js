"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {

     const { data: session,status } = useSession();
  const style = {
    background:
      "CBF3BB",
  };
  return (
      <div className=" pt-10 w-full min-h-screen from-indigo-50 to-white ">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find the <span className="text-cyan-500" style={{color:style.background}}>Perfect Vibe</span><br />
          for Your Mood
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Movies, songs and quotes — crafted for how you feel right now.
          Choose a mood and let the magic begin.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center  gap-4">
      
          <Link href={`${!session? "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F":"/Mood"}`} >
          <button className="px-6 py-3 cursor-pointer bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition">
            Explore Moods
          </button>
          </Link>
            <Link href={`${!session? "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F":"/Genrate"}`}  >
          <button className="px-6 py-3 border cursor-pointer   rounded-xl hover:bg-cyan-400 transition">
            Generate My Vibe
          </button></Link>
        </div>
      </section>

      {/* Mood Cards Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl uppercase font-semibold mb-8 text-center">
          our Moods
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { emoji: "😄", name: "Happy" },
            { emoji: "😔", name: "Sad" },
            { emoji: "❤️", name: "Romantic" },
            { emoji: "😎", name: "Chill" },
            { emoji: "⚡", name: "Energetic" },
            { emoji: "🌧️", name: "Broken" },
          ].map((mood) => (
            <div
              key={mood.name}
              className="p-6  shadow-md rounded-2xl text-center cursor-pointer hover:shadow-xl border hover:scale-105 transition"
            >
              <div className="te  xt-4xl mb-3">{mood.emoji}</div>
              <h3 className="text-lg font-semibold">{mood.name}</h3>
              <p className="text-sm text-gray-500">See content that matches this mood</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}