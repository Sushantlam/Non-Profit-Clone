import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const Uppernav = () => {
  return (
    <div  className=' w-full bg-blue-800 h-12'>
        <div className=' max-w-[1000px] h-full flex justify-between items-center mx-auto '>

            <p className='text-white text-sm pl-10'>Changing the world one random act of kindness at a time.</p>
            <div className='flex justify-between gap-5'>
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