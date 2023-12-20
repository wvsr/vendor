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

  const newsList = [
    {
      title: 'The Ethics of AI: Balancing Progress and Responsibility',
      by: 'Samantha White',
      desc: 'Experts delve into the ethical considerations surrounding AI development and deployment in society.',
      tags: ['AI Ethics', 'Society', 'Technology'],
    },
    {
      title: 'AI-Powered Healthcare: Revolutionizing Patient Care',
      by: 'Michael Adams',
      desc: 'How AI is transforming healthcare through predictive analytics and personalized treatment plans.',
      tags: ['AI in Healthcare', 'Healthtech', 'AI'],
    },
    {
      title: 'AI and Data Privacy: Navigating the Challenges Ahead',
      by: 'Elena Ramirez',
      desc: 'Addressing the intersection of AI capabilities and the protection of user data and privacy.',
      tags: ['AI', 'Data Privacy', 'Technology'],
    },
    {
      title: 'AI in Finance: Enhancing Efficiency and Risk Management',
      by: 'Nathan Foster',
      desc: 'Exploring the use of AI algorithms in financial institutions for improved decision-making and risk assessment.',
      tags: ['AI in Finance', 'Fintech', 'AI'],
    },
    {
      title: "The Future of Work: AI's Impact on Employment Landscape",
      by: 'Sophie Turner',
      desc: 'Analysing how AI adoption is reshaping jobs and skills requirements across various industries.',
      tags: ['AI Impact', 'Future of Work', 'Technology'],
    },
    {
      title: 'AI-Powered Customer Service: Redefining User Experience',
      by: 'David Miller',
      desc: 'Examining the role of AI chatbots and virtual assistants in revolutionizing customer service interactions.',
      tags: ['AI in Customer Service', 'User Experience', 'AI'],
    },
    {
      title: 'AI and Climate Change: Leveraging Technology for Sustainability',
      by: 'Emma Clark',
      desc: 'How AI applications are aiding in climate research, resource management, and renewable energy.',
      tags: ['AI for Sustainability', 'Climate Change', 'Technology'],
    },
    {
      title: 'AI and Cybersecurity: Defending Against Evolving Threats',
      by: 'Andrew Scott',
      desc: 'The use of AI in bolstering cybersecurity measures to counter sophisticated cyber threats.',
      tags: ['AI in Cybersecurity', 'Security', 'AI'],
    },
    {
      title: 'AI in Education: Personalized Learning and Adaptive Systems',
      by: 'Rachel Williams',
      desc: 'Exploring how AI is reshaping education through adaptive learning platforms and personalized curriculums.',
      tags: ['AI in Education', 'EdTech', 'AI'],
    },
    {
      title: 'AI in Autonomous Vehicles: Redefining Transportation',
      by: 'Jack Thompson',
      desc: 'The role of AI algorithms in enabling safe and efficient autonomous driving technology.',
      tags: ['AI in Transportation', 'Autonomous Vehicles', 'AI'],
    },
  ]

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
              <Link href='/plugin'>Plugins</Link>
              <Link href='/newsletter'>Newsletter</Link>
              <Link href='/community'>Community</Link>
              <Link href='/partner'>Partners</Link>
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
      <section className='wrapper py-12 mx-auto max-w-6xl space-y-4 text-gray-200'>
        <Image src={HeroImage} alt='HeroImage' className='w-full h-auto' />
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-full sm:col-span-5 space-y-4'>
            <h3 className='text-xl md:text-4xl font-semibold'>
              Dev Mode: Building a dashboard that works better for people
            </h3>
            <p className='text-sm opacity-70'>
              How do you create a home for developers in a AI tool? The Dev Mode
              team shares their early pivot away from a codegen-first approach,
              the acquisition that accelerated their efforts, and what it…
            </p>
            <div className='flex gap-2'>
              {newsList[0].tags.map((e, i) => {
                return (
                  <div
                    className='w-fit rounded-md border border-[#666666] px-1.5 py-1 text-xs'
                    key={i}
                  >
                    {e}
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-span-full sm:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 space-y-3'>
            <div className='rounded-md px-3 py-2 bg-[#FA956B] text-black space-y-3'>
              <p className='text-lg sm:text-3xl font-semibold'>
                {newsList[0].title}
              </p>
              <p className='text-sm font-semibold'>{newsList[0].by}</p>
              <p className='text-sm font-semibold'>{newsList[0].desc}</p>
              <div className='flex gap-2'>
                {newsList[0].tags.map((e, i) => {
                  return (
                    <div
                      className='w-fit rounded-md border border-black px-1.5 py-1 text-xs'
                      key={i}
                    >
                      {e}
                    </div>
                  )
                })}
              </div>
            </div>
            {newsList.slice(5, 6).map((news, i) => {
              return (
                <div key={i} className='space-y-1'>
                  <Image
                    src={'https://random.imagecdn.app/250/150' + '?' + i}
                    alt='news'
                    width={500}
                    height={350}
                    className='rounded-md'
                  />
                  <p className='text-lg font-semibold'>{news.title}</p>
                  <p className='text-sm opacity-70'>{news.by}</p>
                  <p className='text-sm opacity-70'>{news.desc}</p>
                  <div className='flex gap-2'>
                    {news.tags.map((e, i) => {
                      return (
                        <div
                          className='w-fit rounded-md border border-[#666666] px-1.5 py-1 text-xs'
                          key={i}
                        >
                          {e}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='wrapper py-12 mx-auto max-w-6xl text-gray-200 space-y-4'>
        <h2 className='md:text-2xl text-xl font-bold'>Insights</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {newsList.slice(4, 7).map((news, i) => {
            return (
              <div key={i} className='space-y-1'>
                <Image
                  src={'https://random.imagecdn.app/250/150' + '?' + i + 333}
                  alt='news'
                  width={500}
                  height={350}
                  className='rounded-md'
                />
                <p className='text-lg font-semibold'>{news.title}</p>
                <p className='text-sm opacity-70'>{news.by}</p>
                <p className='text-sm opacity-70'>{news.desc}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full'>
          <button className='px-3 py-2 rounded-md border border-gray-200 text-gray-200 text-sm font-semibold'>
            More Insights
          </button>
        </div>
      </section>
      <section className='wrapper py-12 mx-auto max-w-6xl text-gray-200 space-y-4'>
        <h2 className='md:text-2xl text-xl font-bold'>Maker Stories</h2>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-full sm:col-span-7'>
            <Image
              src={'https://random.imagecdn.app/500/400?243243'}
              alt='news'
              className='rounded-md max-h-96 h-full w-full'
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-full sm:col-span-5 space-y-3'>
            <h3 className='text-lg md:text-2xl font-semibold'>
              Google DeepMind AI reveals potential for thousands of new
              materials
            </h3>
            <p className='text-sm opacity-70'>By Rebecca Ackermann</p>
            <p className='text-base opacity-70'>
              Google DeepMind has used artificial intelligence (AI) to predict
              the structure of more than 2 million new materials, a breakthrough
              it said could soon be used to improve real-world technologies.
            </p>
          </div>
        </div>
        <div className='flex justify-center w-full'>
          <button className='px-3 py-2 rounded-md border border-gray-200 text-gray-200 text-sm font-semibold'>
            More Maker Stories
          </button>
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
      <section className='wrapper py-12 mx-auto max-w-6xl text-gray-200 space-y-4'>
        <h2 className='md:text-2xl text-xl font-bold'>Developer deep dives</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {newsList.slice(3, 6).map((news, i) => {
            return (
              <div key={i} className='space-y-1'>
                <Image
                  src={'https://random.imagecdn.app/250/150' + '?' + i + 1300}
                  alt='news'
                  width={500}
                  height={350}
                  className='rounded-md'
                />
                <p className='text-lg font-semibold'>{news.title}</p>
                <p className='text-sm opacity-70'>{news.by}</p>
                <p className='text-sm opacity-70'>{news.desc}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full'>
          <button className='px-3 py-2 rounded-md border border-gray-200 text-gray-200 text-sm font-semibold'>
            More Developer Stories
          </button>
        </div>
      </section>
      <section className='wrapper py-12 mx-auto max-w-6xl text-gray-200 space-y-4'>
        <h2 className='md:text-2xl text-xl font-bold'>Inside Figma</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {newsList.slice(0, 3).map((news, i) => {
            return (
              <div key={i} className='space-y-1'>
                <Image
                  src={'https://random.imagecdn.app/250/150' + '?' + i + 100}
                  alt='news'
                  width={500}
                  height={350}
                  className='rounded-md'
                />
                <p className='text-lg font-semibold'>{news.title}</p>
                <p className='text-sm opacity-70'>{news.by}</p>
                <p className='text-sm opacity-70'>{news.desc}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full'>
          <button className='px-3 py-2 rounded-md border border-gray-200 text-gray-200 text-sm font-semibold'>
            More Inside Figma
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
      <section className='wrapper py-12 mx-auto max-w-6xl text-gray-200 space-y-4'>
        <h2 className='md:text-2xl text-xl font-bold'>Explore all</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {newsList.map((news, i) => {
            return (
              <div key={i} className='space-y-1'>
                <Image
                  src={'https://random.imagecdn.app/250/150' + '?' + i}
                  alt='news'
                  width={500}
                  height={350}
                  className='rounded-md'
                />
                <p className='text-lg font-semibold'>{news.title}</p>
                <p className='text-sm opacity-70'>{news.by}</p>
                <p className='text-sm opacity-70'>{news.desc}</p>
                <div className='flex gap-2'>
                  {news.tags.map((e, i) => {
                    return (
                      <div
                        className='w-fit rounded-md border border-[#666666] px-1.5 py-1 text-xs'
                        key={i}
                      >
                        {e}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full'>
          <button className='px-3 py-2 rounded-md border border-gray-200 text-gray-200 text-sm font-semibold'>
            Load more
          </button>
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
