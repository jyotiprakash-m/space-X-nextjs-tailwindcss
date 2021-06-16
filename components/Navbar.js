import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
function Navbar() {
    return (
        <header className="bg-blue-600 w-full h-14 px-4 md:px-8 flex justify-between">
            <div className="flex items-center gap-4">
                <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/spacex_logo_icon_144865.png" className="w-14" /> <p className="font-bold text-xl">Space-X</p>
            </div>
            <div className="flex items-center">
                <Link href="/">
                    <button className="bg-blue-700 py-2 px-4 text-gray-100 rounded-lg hover:bg-blue-800 flex gap-2 items-center focus:outline-none" ><HomeIcon className="h-5 w-5 text-gray-100" />Home</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
