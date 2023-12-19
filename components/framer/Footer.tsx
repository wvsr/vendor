import Logo from '@/public/small_logo.png'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <>
      <footer className='framer_footer wrapper text-gray-200  items-start pt-14 pb-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 grid gap-5'>
        <div className='space-y-3'>
          <div className='flex gap-2 items-center'>
            <Image src={Logo} alt='logo' />© 2023
          </div>
          {/* <div className='space-y-2 flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#0070F3]'></div>
            <p className='text-[#0070F3]'>All systems normal.</p>
          </div> */}
        </div>
        <div>
          <p className='text-white'>Product</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Previews
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Infrastructure
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Edge Functions
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Analytics
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Changelog
            </Link>
          </div>
        </div>

        <div>
          <p className='text-white'>Resources</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Docs
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Pricing
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Customers
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Integrations
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Templates
            </Link>
          </div>
        </div>

        <div>
          <p className='text-white'>Company</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block font-semibold'>
              About
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Careers
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Next.js Conf
            </Link>
            <Link href='#' className='text-gray-400 block font-semibold'>
              Partners
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
