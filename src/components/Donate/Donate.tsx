import Link from 'next/link'
import React from 'react'

const Donate = () => {
  return ( <div  className=' w-full bg-green-800 h-52'>
  <div className=' max-w-[1000px] h-full py-10  mx-auto '>
<div className=' flex flex-col gap-5 px-4 '>


    <h3 className=' font-semibold text-white text-2xl'>Help spread kindness in your community. </h3>

    <Link href='/ ' className=' sm:font-semibold sm:w-[13%] sm:uppercase sm:text-center sm:text-white sm:p-4 sm:bg-yellow-700 sm:text-sm font-semibold w-[25%] uppercase text-center text-white p-4 bg-yellow-700 text-sm'>Donate </Link>
    </div>
   
        
  </div>
 

</div> 
  )
}

export default Donate