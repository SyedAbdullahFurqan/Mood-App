"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
const Navbars = ({opens,setOpens}) => {
  const [open, setOpen] = useState(false)
 
 const { data: session} = useSession();

  const links = [
    { href: '/  ', label: 'Home' },
    { href: '/Mood', label: 'Mood' },
    { href: '/Genrate', label: 'Generate' },
  ]

  return (<>

 <nav className= "bg-cyan-800 w-full z-40 fixed top-0 left-0 right-0  text-white shadow-md    ">
    
        <div className="flex justify-around  items-center h-19 ">
<span className=''> <img src="moodss.png" alt=""className='w-18 rounded-2xl   ' /></span>

          <div className="">


            {/* Desktop links */}
            <div className="hidden md:flex items-center justify-center space-x-6">
              {links.map((l) => (
                <ul>
                  
                  <li className='text-lg pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-white hover:text-cyan-300'>
                <Link key={l.href} href={l.href}>

                  {l.label}

                </Link></li>
                
                </ul>
              ))}
            </div>
          </div>

          <div className="block md:hidden">
            {/* Theme toggle */}
        
   <button
              aria-label="Toggle theme"
              onClick={() => setOpens((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded hover:bg-amber-600 dark:hover:bg-gray-800 transition"
            >
              {opens === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0L6.64 5.22a1 1 0 11-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 010 1.42l-1 1.01a1 1 0 11-1.42-1.42l1-1.01a1 1 0 011.42 0zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM5.64 13.36a1 1 0 001.42 1.42l1.01-1a1 1 0 10-1.42-1.42l-1.01 1zM14.36 13.36l1.01 1.01a1 1 0 11-1.42 1.42l-1.01-1.01a1 1 0 111.42-1.42z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 0017.293 13.293z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded hover:bg-amber-600 dark:hover:bg-gray-800 transition"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
                   <div className="hidden md:flex">
               <button
              aria-label="Toggle theme"
              onClick={() => setOpens((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded hover:bg-amber-600 dark:hover:bg-gray-800 transition"
            >
              {opens === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0L6.64 5.22a1 1 0 11-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 010 1.42l-1 1.01a1 1 0 11-1.42-1.42l1-1.01a1 1 0 011.42 0zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM5.64 13.36a1 1 0 001.42 1.42l1.01-1a1 1 0 10-1.42-1.42l-1.01 1zM14.36 13.36l1.01 1.01a1 1 0 11-1.42 1.42l-1.01-1.01a1 1 0 111.42-1.42z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 0017.293 13.293z" />
                </svg>
              )}
            </button>

      {!session ? (
        <button
          onClick={() => signIn()}
          className="bg-blue-600 text-white px-2 py-1  hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-white text-[15px]">{session?.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
        </div>
 
  
        {/* Mobile menu */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-2 px-2 pb-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>
                  <p onClick={() => setOpen(false)}
                    className="block py-2 px-3 rounded hover:bg-amber-600 dark:hover:bg-gray-800 transition"
                  >

                    {l.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
           {!session ? (
        <button
          onClick={() => signIn()}
          className="bg-blue-600 text-white px-4 py-2  hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      ) : (
        <div className="flex items-center mx-2 mb-2 gap-2">
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-white">{session?.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      )}
        </div>
    
    </nav> </>
  )
}

export default Navbars

