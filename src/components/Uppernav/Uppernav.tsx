import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const Uppernav = () => {
  return (
    <div  className=' w-full bg-blue-800 h-12'>
        <div className=' w-full h-full flex items-center justify-center sm:max-w-[1000px] sm:h-full sm:flex sm:flex-row sm:justify-between sm:items-center sm:mx-auto '>

            <p className='hidden sm:block sm:text-white sm:text-sm sm:pl-10'>Changing the world one random act of kindness at a time.</p>
            <div className='  flex justify-between items-center gap-4'>
           <Link href=''> <FaFacebookF  color='white' size={20} /></Link>
           <Link href=''> <FaTwitter  color='white' size={20} /></Link>
           <Link href=''> <FaInstagram  color='white' size={20} /></Link>
           <Link href=''> <FaTiktok  color='white' size={20} /></Link>
           <Link href=''> <FaLinkedin  color='white' size={20} /></Link>
            </div>
              
        </div>
       

    </div>
  )
}

export default Uppernav