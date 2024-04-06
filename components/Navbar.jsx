import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full bg-white text-black p-4 flex justify-between  items-centert '>
        <div className='px-4'>SimonsCat</div>
        <div className='flex justify-center  w-full  '>
             <div className='px-4'>Home</div>
            <div className='px-4'>About</div>
            <div className='px-4'>Contact</div>
            <Link href='/upload/categorie'>Categories</Link>
        </div>
        <div>Login</div>
    </nav>
  )
}

export default Navbar