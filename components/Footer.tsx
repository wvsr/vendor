import Logo from '@/public/small_logo.png'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <>
      <footer className='wrapper text-gray-200 text-sm items-start pt-6 pb-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid gap-5'>
        <div className='space-y-3'>
          <div className='flex gap-2 items-center'>
            <Image src={Logo} alt='logo' />© 2023
          </div>
          <div className='space-y-2 flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#0070F3]'></div>
            <p className='text-[#0070F3]'>All systems normal.</p>
          </div>
        </div>
        <div>
          <p className='text-white'>Product</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block'>
              Previews
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Infrastructure
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Edge Functions
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Analytics
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Changelog
            </Link>
          </div>
        </div>
        <div>
          <p className='text-white'> </p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block'>
              Next.js
            </Link>
            <Link href='#' className='text-gray-400 block'>
              v0
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Turbo
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Enterprise
            </Link>
            <Link href='#' className='text-gray-400 block'>
              CLI & API
            </Link>
          </div>
        </div>
        <div>
          <p className='text-white'>Resources</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block'>
              Docs
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Pricing
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Customers
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Integrations
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Templates
            </Link>
          </div>
        </div>
        <div>
          <p className='text-white'> </p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block'>
              Experts
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Guides
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Help
            </Link>
            <Link href='#' className='text-gray-400 block'>
              ⌘K
            </Link>
          </div>
        </div>
        <div>
          <p className='text-white'>Company</p>
          <div className='space-y-2 mt-3'>
            <Link href='#' className='text-gray-400 block'>
              About
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Careers
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Next.js Conf
            </Link>
            <Link href='#' className='text-gray-400 block'>
              Partners
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
