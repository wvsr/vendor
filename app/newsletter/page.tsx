'use client'
import React, { useState } from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/public/newsletter/hero.png'
import Footer from '@/components/Footer'

function Framer() {
  const [searchText, setSearchText] = useState('')
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <main className='bg-black'>
      <section className='hero'>
        <header className='flex justify-between items-center py-2.5 px-3 border-b border-gray-900 '>
          <div className='flex gap-3'>
            <div className='hidden md:block'>
              <Link href='/'>
                <Image src={Logo} alt='logo' width={130} />
              </Link>
            </div>
            <div className='md:hidden flex items-center'>
              <Link href='/'>
                <Image src={Logo} alt='logo' width={100} />
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='flex gap-3 text-[#8B8B8B]'>
              <Link href='#'>Features</Link>
              <Link href='#'>Resources</Link>
              <Link href='#'>Community</Link>
              <Link href='#'>Customers</Link>
              <Link href='#'>Enterprise</Link>
              <Link href='#'>Pricing</Link>
            </div>
          </div>
          <div>
            <button className='btn'>Launch</button>
          </div>
        </header>
        <div className='space-y-8 text-gray-200 py-24'>
          <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-center font-[500]'>
            Get smarter <br /> with A.I.
          </h1>
          <p className='text-center text-sm md:text-lg opacity-60'>
            Where humans find stunning AI
          </p>
          <form className='w-full wrapper' onSubmit={handleSearch}>
            <div className='max-w-2xl mx-auto w-full bg-white/10 p-2 rounded-xl overflow-hidden'>
              <div className='w-full flex bg-white rounded-xl py-1.5 md:py-2 px-3 overflow-hidden'>
                <input
                  type='text'
                  className='w-full flex-1 text-base focus:outline-none text-black'
                  placeholder='Describe your project...'
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='btn' type='submit'>
                  Start with AI
                </button>
              </div>
            </div>
          </form>
          <Image
            src={HeroImage}
            alt='HeroImage'
            className='w-full h-auto wrapper'
          />
        </div>
      </section>

      <section className='bg-[#0FA958] py-24 px-12'>
        <div className='max-w-5xl mx-auto space-y-6 text-center'>
          <p className='text-sm font-medium'>Meet us in the browser</p>
          <p className='text-xl md:text-3xl font-semibold md:font-medium'>
            {`“ Over the past five years, I’ve seen firsthand how working in a
            collaborative digital space ‘our ideas.’ This requires a radical
            shift—a level moves teams from a mindset of ‘my ideas’ to of trust
            and transparency that many of us are still catching up to.”`}
          </p>
          <p className='font-medium'>Dylan Field, Co-Founder & CEO</p>
          <button className='px-4 py-2 5 rounded-xl border-2 border-black font-semibold'>
            Read the article
          </button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Framer
