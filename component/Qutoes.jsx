import React from 'react'

const Qutoes = ({qutoes}) => {
  return (
    <div>
      <div className="  p-2  w-100  m-2 rounded-2xl border-2">
<img src={qutoes.snippet.thumbnails.medium.url} alt="" className='w-100 rounded-3xl ' />
<h1 className="text-center mt-3 text-xl font-bold">TITLE : {qutoes.snippet.title}</h1>

{/* <button     class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"><a href={ `https://www.youtube.com/watch?v=${item.id.videoId}`}  target="_blank" rel="noopener noreferrer"></a>SEE SONG </button> */}

<p className='w-100 bg-neutral-600  border-2 rounded-lg font-semibold hover:bg-neutral-800 cursor-pointer'><Link  href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target='_blank'>See Song</Link> </p>

</div>

    </div>
  )
}

export default Qutoes
