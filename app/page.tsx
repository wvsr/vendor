'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import SmallLogo from '@/public/small_logo.png'
import { useState } from 'react'

export default function Home() {
  const footerLinks = [
    { name: 'Features', link: '' },
    { name: 'Resources', link: '' },
    { name: 'Community', link: '' },
    { name: 'Customers', link: '' },
    { name: 'Enterprise', link: '' },
    { name: 'Pricing', link: '' },
  ]
  const headerLinks = [
    { name: 'About', link: '' },
    { name: 'Store', link: '' },
  ]
  const mobileHeaderLinks = [
    { name: 'LLM', link: '' },
    { name: 'Images', link: '' },
  ]
  const suggestions = [
    'Images',
    'Videos',
    'News',
    'Shopping',
    'Maps',
    'Books',
    'Flights',
    'Finance',
  ]

  const [searchText, setSearchText] = useState('')
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <main className='search_page h-[92vh] xl:h-screen w-full search_background flex flex-col px-2'>
      <header className='flex justify-between items-center py-4 px-5'>
        <div className='flex gap-3'>
          <div className='hidden sm:block'>
            <ul className='flex gap-3 justify-center text-center flex-wrap'>
              {headerLinks.map((e, i) => (
                <Link
                  href={e.link}
                  key={i}
                  className='text-sm md:text-base text-gray-300'
                >
                  {e.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className='block sm:hidden'>
            <ul className='flex gap-3 justify-center text-center flex-wrap'>
              {mobileHeaderLinks.map((e, i) => (
                <Link
                  href={e.link}
                  key={i}
                  className='text-sm md:text-base text-gray-300'
                >
                  {e.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex gap-3'>
          <button className='btn text-sm'>
            <span className='block lg:hidden'>Sing up</span>
            <span className='hidden lg:block'>Launch</span>
          </button>
        </div>
      </header>
      <div className='flex flex-col max-w-5xl mx-auto justify-center items-center flex-1 w-full'>
        <Image
          src={Logo}
          alt='logo'
          className='mb-7 hidden sm:block'
          width={350 * 1.3}
          height={54}
        />
        <div className='w-full flex justify-start sm:hidden'>
          <Image
            src={Logo}
            alt='logo'
            className='mb-7'
            width={350 * 0.65}
            height={54}
          />
        </div>
        <form className='w-full' onSubmit={handleSearch}>
          <div className='max-w-2xl mx-auto w-full bg-white/10 p-2 rounded-xl overflow-hidden'>
            <div className='w-full flex bg-white rounded-xl py-1 sm:py-2 px-3 overflow-hidden'>
              <input
                type='text'
                className='w-full flex-1 text-base focus:outline-none'
                placeholder='Describe your project...'
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className='btn' type='submit'>
                Start with AI
              </button>
            </div>
          </div>
        </form>
        <div className='gap-3 flex-wrap justify-center mt-4 hidden sm:flex'>
          {suggestions.map((e, i) => (
            <div
              key={i}
              className='text-gray-400 px-3 py-1 md:py-2 rounded-lg border border-[#032D59] text-xs sm:text-sm'
              role='button'
            >
              {e}
            </div>
          ))}
        </div>
        <div className='gap-3 flex-wrap justify-start mt-4 flex sm:hidden w-full px-4'>
          {suggestions.slice(0, 4).map((e, i) => (
            <div
              key={i}
              className='text-gray-400 px-3 py-1.5 md:py-2 rounded-lg border border-[#032D59] text-xs sm:text-sm'
              role='button'
            >
              {e}
            </div>
          ))}
        </div>
      </div>
      <div className='search_popup text-white text-center space-y-3 py-5 px-3 bottom-0 w-[98vw] block sm:hidden absolute'>
        <div className='flex justify-center w-full'>
          <div className='w-fit p-2 border border-gray-700 rounded-lg'>
            <Image src={SmallLogo} alt='SmallLogo' />
          </div>
        </div>
        <p className='text-lg font-semibold'>Vendor recommends using the App</p>
        <p className='text-[#9E9E9E] text-sm'>
          The App is a fast, simple, and secure. Try it?
        </p>
        <button className='btn w-full'>Try it</button>
        <button className='px-3 py-2 rounded-md border border-gray-600 w-full text-gray-300'>
          No thanks
        </button>
      </div>
      <footer className='py-6 px-3 '>
        <ul className='flex gap-3 justify-center text-center flex-wrap'>
          {footerLinks.map((e, i) => (
            <Link href={e.link} key={i} className='text-sm text-gray-500'>
              {e.name}
            </Link>
          ))}
        </ul>
      </footer>
    </main>
  )
}
