import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full bg-[#ffefa6] text-black p-6 flex justify-between '>
            <Link href='/' className='px-4 rock-salt-regular text-2xl '>Encyclopedia</Link>
            <div className='flex justify-end   w-full  '>
                <div className='px-4'>Home</div>
                <div className='px-4'>About</div>
                <div className='px-4'>Contact</div>
                <Link href='/upload/categorie'>Categories</Link>
            </div>
        </nav>
    )
}

export default Navbar