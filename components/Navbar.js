"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useAuthContext } from '@/store/authContext'
export default function Navbar() {
  const {user,login,logout, authReady} = useAuthContext()
console.log("User:",user)
console.log("Auth:",authReady)
  return (
    <div className="flex flex-col items-center mb-4 h-64 bg-[url(/banner.png)] bg-cover rounded-b">
      <nav className='w-full flex items-center justify-end py-3'>
        <div className='mr-auto flex items-center'>
          <Image src="/rupee.png" width={50} height={48} alt='logo' />
          <h1 className='font-semibold text-white '>Gaming Vibes</h1>
        </div>
        {/* {authReady && ( */}
        <ul className='flex items-center gap-3 pr-3'>
          <li><Link href="/" className='hover:text-blue-500 text-white font-semibold'>Home</Link></li>
          <li><Link href="/guides" className='hover:text-blue-500 text-white font-semibold'>Guides</Link></li>
         {!user && <li onClick={login} className='border rounded px-1 border-white hover:border-blue-500 hover:text-blue-500 text-white font-bold cursor-pointer'>Login/Signup</li>}
         {user && <li className='text-white font-bold'>{user.user_metadata.full_name}</li>}
         {user && <li onClick={logout} className='border rounded px-1 border-white hover:border-blue-500 hover:text-blue-500 text-white font-bold cursor-pointer'>Logout</li>}
        </ul> 
        {/* )} */}
      </nav>

    </div>
  )
}
