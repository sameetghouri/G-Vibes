import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex flex-col items-center mb-4 h-64 bg-cover rounded-b"
    style={{"backgroundImage": "url(/banner.png)"}}>
      <nav className='w-full flex items-center justify-end py-3'>
        <div className='mr-auto flex items-center'>
        <Image src="/rupee.png" width={50} height={48} alt='logo' />
        <h1 className='font-semibold text-white '>Gaming Vibes</h1>
        </div>
        <ul className='flex items-center gap-4 pr-4'>
          <li><Link href="/" className='hover:text-blue-600 text-white font-semibold'>Home</Link></li>
          <li><Link href="/guides" className='hover:text-blue-600 text-white font-semibold'>Guides</Link></li>
        </ul>
      </nav>
      
    </div>
  )
}
