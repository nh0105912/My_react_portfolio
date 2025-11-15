import React from 'react'

const Skill = () => {
  return (
    <div className=' flex flex-col gap-6 my-10 '>
        <h1 className='text-center font-bold text-4xl lg:text-6xl bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text'>My Skill</h1>
        <div className="flex flex-col px-10 lg:px-20 gap-2">
        <h2 className='text-2xl font-bold uppercase'>Html</h2> 
        <hr className='w-[90%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500 border-none rounded-md'  />
        <h2 className='text-2xl font-bold uppercase'>CSS</h2> 
        <hr className='w-[85%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500 border-none rounded-md' />
        <h2 className='text-2xl font-bold uppercase'>JS (ES6+) </h2> 
        <hr className='w-[90%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500 border-none rounded-md'  />
        <h2 className='text-2xl font-bold uppercase'>Bootstrap</h2>
         <hr className='w-[75%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500 border-none rounded-md' />
        <h2 className='text-2xl font-bold uppercase'>React </h2> 
        <hr className='w-[80%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500 border-none rounded-md' />
        <h2 className='text-2xl font-bold uppercase'>Tailwind CSS </h2> 
        <hr className='w-[84%] h-[6px] bg-gradient-to-b from-cyan-600 to-red-500  border-none rounded-md' />
        </div>


    </div>
  )
}

export default Skill