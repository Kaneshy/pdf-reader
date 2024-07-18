import React from 'react'
import Link from 'next/link'
import { VscCloudUpload } from "react-icons/vsc";


const Navbar = () => {
    return (
        <nav className=' fixed z-10 top-0 w-full select-none bg-[#ffefa6] text-black p-6 flex justify-between '>
            <Link href='/' className='px-4 rock-salt-regular text-2xl '>Encyclopedia</Link>
            <div className='flex hover:text-[#a5b5ff] justify-end   w-full  '>
                <Link href='/upload/categorie'>
                    <VscCloudUpload size={35} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar