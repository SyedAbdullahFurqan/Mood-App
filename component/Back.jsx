
"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const Back = () => {
      const router = useRouter();
  return (
    <div>
       <button   onClick={() => router.back()} className="p-2 m-2 bg-cyan-400 cursor-pointer text-white rounded">
      Go Back
    </button>
    </div>
  )
}

export default Back
