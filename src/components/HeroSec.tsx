import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

function HeroSec() {
  return (
    <div className=' h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>
         
        <div className=' p-4 relative z-10 w-full text-center '> 
     


<h1 className=' mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-blue-700'> Master the art of Music</h1>



<p className=' mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
Dive into our comprehensive music courses and transform your musical journey today, whether your beginner are looking to refind your skills join us dont locked your true potential.</p>
<div className=' mt-4'>
    <Link href={"/courses"}>
    <Button
    className=' bg-white dark:bg-black text-black dark:text-white  dark: border-slate-800'
    >Explore Courses</Button>
    
    </Link>
</div>
        </div>
    </div>
  )
}

export default HeroSec