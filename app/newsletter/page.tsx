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
        <header className='flex justify-between items-center py-2.5 px-3'>
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
            <button className='btn_header'>Launch</button>
          </div>
        </header>
        <div className='space-y-8 text-gray-200 py-24'>
          <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-center font-bold md:font-medium'>
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
                <button className='btn_header' type='submit'>
                  Start with AI
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className='wrapper'>
        <Image
          src={HeroImage}
          alt='HeroImage'
          className='w-full h-auto wrapper'
        />
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
      <section className='bg-[#F9D762] py-14 px-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-12 wrapper gap-6'>
          <div className='col-span-full md:col-span-5'>
            <p className='font-semibold text-xl md:text-4xl'>
              Subscribe to Al for an instantly better inbox
            </p>
          </div>
          <div className='col-span-full md:col-span-7'>
            <div className='space-y-3'>
              <div className='py-2 w-full bg-transparent text-lg border-b border-black flex gap-3'>
                <input
                  type='text'
                  className='w-full outline-none bg-transparent placeholder:text-gray-700 placeholder:font-medium'
                  placeholder='Enter your email'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 56 57'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.6351 11.2202L13.7664 29.5663H38.4711V29.4351L26.0864 19.979L28.9231 16.8613L46.375 31.5412L28.9231 46.2202L26.0872 43.1035L38.4711 33.5887V33.5161H9.625V11.2202H13.6351Z'
                    fill='black'
                  />
                </svg>
              </div>
              <p className='text-sm'>
                By clicking “Submit” you agree to our TOS and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 px-12 text-gray-200'>
        <div className='max-w-6xl mx-auto grid grid-cols-12 wrapper gap-6'>
          <div className='col-span-full md:col-span-5'>
            <p className='font-semibold text-xl md:text-4xl'>
              Join 250,000+ subscribers 5 min daily newsletter on what matters
              in AI.
            </p>
          </div>
          <div className='col-span-full md:col-span-7'>
            <div className='space-y-3'>
              <div className='py-2 w-full bg-transparent text-lg border-b border-gray-200 flex gap-3'>
                <input
                  type='text'
                  className='w-full outline-none bg-transparent placeholder:text-gray-500 placeholder:font-medium'
                  placeholder='Enter your email'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 56 57'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.6351 11.2202L13.7664 29.5663H38.4711V29.4351L26.0864 19.979L28.9231 16.8613L46.375 31.5412L28.9231 46.2202L26.0872 43.1035L38.4711 33.5887V33.5161H9.625V11.2202H13.6351Z'
                    fill='white'
                  />
                </svg>
              </div>
              <p className='text-sm'>
                By clicking “Submit” you agree to our TOS and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Framer
