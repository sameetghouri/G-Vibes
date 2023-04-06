import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex flex-col items-center pb-4">
      <nav className='w-full flex items-center justify-end py-3' >
        <div className='mr-auto flex items-center'>
        <Image src="/rupee.png" width={50} height={48} alt='logo' />
        <h1 className='font-semibold '>Gaming Vibes</h1>
        </div>
        <ul className='flex items-center gap-5'>
          <li><Link href="/" className='hover:text-blue-600 font-semibold'>Home</Link></li>
          <li><Link href="/guides" className='hover:text-blue-600 font-semibold'>Guides</Link></li>
        </ul>
      </nav>
      <div className="">
        <Image src="/banner.png" width={1400} height={250} alt='banner' />
      </div>
    </div>
  )
}
