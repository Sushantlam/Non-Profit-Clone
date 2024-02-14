import React from 'react'

const Search = () => {
  return (
    <div  className=' w-full bg-green-800 h-48'>
    <div className=' max-w-[1000px] h-full py-10  mx-auto '>
<div className='w-full  '>


      <h3 className=' font-semibold text-white text-2xl'>Start your kindness journey here. </h3>
      </div>
      <div className='w-full py-5 flex  overflow-hidden'>
        <input type="text" className='w-[100%] rounded-l-lg py-2 px-4 ' />
        <button className='bg-white text-sm px-2 rounded-r-lg text-green-700'>Search</button>
      </div>
          
    </div>
   

</div>
  )
}

export default Search