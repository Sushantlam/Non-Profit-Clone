import React from 'react'
import Logo from '../../../public/white.png'
import Image from 'next/image'
import { IoCall, IoMail } from 'react-icons/io5'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div  className=' w-full bg-blue-800 '>
    <div className=' max-w-[1000px] h-full py-10  mx-auto '>
<div className='w-full flex justify-between '>
    <div className='flex justify-between gap-5'>
        <div className='flex flex-col gap-5'>
            <div>
            <Image src={Logo}  height={200} width={200} alt='logo'/>
            </div>
            <h3 className=' text-gray-400'>A registered 501(c)(3) organization in the United States.</h3>
            <h3 className=' text-gray-400'>EIN #: 04-3276521</h3>
            <div className='flex gap-4 items-center'>
                <div className=' bg-green-400 p-2 rounded-full'>

               
            <IoCall size={20} color=' white' />
            </div>
            
            <h3>(833) 763-6228</h3>
            </div>
            <div className='flex gap-4 items-center'>
                <div className=' bg-green-400 p-2 rounded-full'>

               
            <IoMail size={20} color=' white' />
            </div>
            
            <h3> info@randomacts.org</h3>
            </div>
           
          
           
        </div>
        <div className='flex flex-col gap-5 items-center'>
           <h3 className=' text-2xl font-semibold text-white'>
Quick Links
           </h3>
           <div className=' flex flex-col gap-3 text-gray-400'>
           <h1>
          Home
           </h1>
           <h1>
          

Kindness Stories








           </h1>
           <h1>
           Get Involved
           </h1>
           <h1>
           Staff
           </h1> <h1>
           Vacancies
           </h1>
          

           </div>
           
        </div>

    </div>

    <div>
       <h3 className=' bg-white px-6 py-1 text-black rounded-full font-semibold'>
       Join the Random Acts mailing list!
       </h3>
       <div className='flex justify-evenly gap-3 pt-10 ' >
       <Link href=''> <FaFacebookF  color='white' size={20} className='hover:-translate-y-1' /></Link>
           <Link href=''> <FaTwitter  color='white' size={20} className='hover:-translate-y-1' /></Link>
           <Link href=''> <FaInstagram  color='white' size={20} className='hover:-translate-y-1'  /></Link>
           <Link href=''> <FaTiktok  color='white' size={20} className='hover:-translate-y-1' /></Link>
           <Link href=''> <FaLinkedin  color='white' size={20}  className='hover:-translate-y-1' /></Link>

       </div>
        </div>


      
      </div>
      <h3 className='py-12 text-gray-400 text-xl'>
      Copyright © 2023 Random Acts. All rights reserved.
      </h3>
          
    </div>
   

</div>
  )
}

export default Footer