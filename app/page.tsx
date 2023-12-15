'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
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
    <main className='h-screen w-full search_background flex flex-col px-2'>
      <header className='flex justify-between items-center py-4 px-5'>
        <div className='flex gap-3'>
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
        <div className='flex gap-3'>
          <button className='btn text-sm'>Launch</button>
        </div>
      </header>
      <div className='flex flex-col max-w-5xl mx-auto justify-center items-center flex-1 w-full'>
        <Image
          src={Logo}
          alt='logo'
          className='mb-7'
          width={350 * 1.5}
          height={54}
        />
        <form className='w-full' onSubmit={handleSearch}>
          <div className='max-w-2xl mx-auto w-full bg-white/10 p-2 rounded-xl overflow-hidden'>
            <div className='w-full flex bg-white rounded-xl py-2 px-3 overflow-hidden'>
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
        <div className='flex gap-3 flex-wrap justify-center mt-4'>
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
      </div>
      <footer className='py-6 px-3'>
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
