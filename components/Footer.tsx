import Logo from '@/public/small_logo.png'
import Image from 'next/image'
function Footer() {
  return (
    <footer className='wrapper text-gray-200 text-sm items-center py-3 flex justify-center'>
      <div className='flex gap-2 items-center'>
        <Image src={Logo} alt='logo' />© 2023
      </div>
    </footer>
  )
}

export default Footer
