'use client'
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Logo from '@/public/logo.png'
import FramerHero from '@/public/framer/FramerHero.png'
import Image from 'next/image'
import FirstLogo from '@/public/logo/1.png'
import SecondLogo from '@/public/logo/2.png'
import ThirdLogo from '@/public/logo/3.png'
import FourthLogo from '@/public/logo/4.png'
import FifthLogo from '@/public/logo/5.png'
import SixthLogo from '@/public/logo/6.png'
import SeventhLogo from '@/public/logo/7.png'
import EighthLogo from '@/public/logo/8.png'
import StunningSite from '@/public/framer/3.png'
import DeployInSecond from '@/public/framer/2.png'
import NoCodeWebsiteTemplate from '@/public/framer/1.png'
import Slack from '@/public/framer/slack.png'
import DiscoverAnalyze from '@/public/framer/4.png'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SiteManagementSvg from '@/components/siteManagementSvg'
import ProductOfTheDay from '@/components/ProductOfTheDay'

const testimonials = [
  {
    name: 'John Doe',
    review:
      'Framer helped me to enhance my design skills and create stunning interfaces effortlessly.',
  },
  {
    name: 'Alice Smith',
    review:
      'Using Framer, I was able to prototype and iterate on my ideas faster than ever before.',
  },
  {
    name: 'Ethan Johnson',
    review:
      'Framer is an essential tool that transformed the way I approach web design.',
  },
  {
    name: 'Olivia Brown',
    review:
      "Framer's drag-and-drop interface made website creation a breeze for me.",
  },
  {
    name: 'Sophia Wilson',
    review:
      'The seamless integration of design and development in Framer truly amazed me.',
  },
  {
    name: 'James Garcia',
    review:
      'Framer has revolutionized my workflow, allowing me to deliver top-notch websites.',
  },
  {
    name: 'Emma Martinez',
    review:
      'With Framer, I felt empowered to unleash my creativity and design without limits.',
  },
  {
    name: 'John doe',
    review:
      "Framer's user-friendly features made my web design journey enjoyable and efficient.",
  },
]
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
          <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-[500]'>
            The internet is <br /> your canvas.
          </h1>
          <p className='text-center text-sm md:text-lg opacity-60'>
            Framer is where teams design and publish stunning sites.
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
        </div>
        <Image
          src={FramerHero}
          alt='hero'
          className='px-5 max-w-6xl w-full mx-auto'
        />
        <div className='flex justify-between max-w-5xl mx-auto mt-14 pb-12 gap-4 wrapper flex-wrap'>
          <div>
            <Image src={FirstLogo} alt='Logo 1' />
          </div>
          <div className='w-[100px]'>
            <Image src={SecondLogo} alt='Logo 2' />
          </div>
          <div className='w-[100px]'>
            <Image src={ThirdLogo} alt='Logo 3' />
          </div>
          <div className='w-[100px]'>
            <Image src={FourthLogo} alt='Logo 4' />
          </div>
          <div className='w-[100px]'>
            <Image src={FifthLogo} alt='Logo 5' />
          </div>
          <div className='w-[100px]'>
            <Image src={SixthLogo} alt='Logo 6' />
          </div>
          <div className='w-[100px]'>
            <Image src={SeventhLogo} alt='Logo 7' />
          </div>
          <div className='w-[100px]'>
            <Image src={EighthLogo} alt='Logo 8' />
          </div>
        </div>
      </section>
      <section className='bg-black py-14 wrapper'>
        <div className='grid grid-cols-1 md:grid-cols-2 text-gray-300 gap-6'>
          <div className='flex md:justify-end'>
            <div className='space-y-7 max-w-lg'>
              <h2 className='text-2xl md:text-4xl text-white'>
                Design stunning sites on a familiar canvas.
              </h2>
              <div className='space-y-2'>
                <p>Layout</p>
                <p className='text-sm opacity-75'>
                  Use powerful yet familiar tools to create your ultimate
                  website design. Import your designs from Figma.
                </p>
                <Link href='#' className='text-sm link '>
                  See all Layout features
                </Link>
              </div>
              <div className='space-y-2'>
                <p>Effects</p>
                <p className='text-sm opacity-75'>
                  Add effects with a few clicks and capture your audience’s
                  attention when they land on your website.
                </p>
              </div>
              <div className='space-y-2'>
                <p>Navigation</p>
                <p className='text-sm opacity-75'>
                  Visually connect your pages. Link to another page, scroll to a
                  specific section, or open a modal; all easy in Framer.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <Image src={StunningSite} alt='StunningSite' />
          </div>
        </div>
      </section>
      <section className='py-14 text-gray-200 max-w-6xl mx-auto space-y-12 wrapper'>
        <h3 className='text-2xl md:text-4xl max-w-4xl text-white'>
          <span className=''>Deploy in seconds. </span>
          <span className='opacity-50'>
            Your site is fast out of the box and automatically optimized for
            search engines.
          </span>
        </h3>
        <Image
          src={DeployInSecond}
          alt='DeployInSecond'
          className='w-full h-auto'
        />
      </section>
      <section className='py-14 text-gray-200 max-w-6xl mx-auto wrapper grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
        <div className='flex gap-4'>
          <div>
            <div className='py-1 px-2 border border-gray-500 rounded-full w-fit'>
              <span className='text-xl'>01</span>
            </div>
          </div>
          <p>
            Just hit Publish.{' '}
            <span className='opacity-50'>
              Keep track of your team’s changes and see them get optimized and
              pushed to production in a matter of seconds.
            </span>
          </p>
        </div>
        <div className='flex gap-4'>
          <div>
            <div className='py-1 px-2 border border-gray-500 rounded-full w-fit'>
              <span className='text-xl'>02</span>
            </div>
          </div>
          <p>
            Your site will be live instantly.{' '}
            <span className='opacity-50'>
              Using the latest web technologies and every trick in the book
              you’ll get great performance from the start.
            </span>
          </p>
        </div>
      </section>
      <section className='py-14 text-gray-200 max-w-6xl mx-auto space-y-12 wrapper'>
        <h3 className='text-2xl md:text-4xl max-w-4xl text-white'>
          <span className=''>Scale your site to any size </span>
          <span className='opacity-50'>
            with the built-in CMS, AI-powered localization, and site maintenance
            tools.
          </span>
        </h3>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-full md:col-span-8'>
            <Image
              alt='NoCodeWebsiteTemplate'
              src={NoCodeWebsiteTemplate}
              className='w-full h-auto'
            />
          </div>
          <div className='col-span-full md:col-span-4'>
            <div className='w-full h-full rounded-lg p-10 border border-gray-800/60 space-y-3'>
              <p className='link text-xl'>SEO & Performance</p>
              <p className='text-sm'>
                Your site will be blazing fast and optimized to start ranking on
                search engines.
              </p>
              <div className='flex justify-center'>
                <Image src={Slack} alt='Slack' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-full md:col-span-4'>
            <div className='w-full h-full rounded-lg p-10 border border-gray-800/60 space-y-3'>
              <p className='link text-xl'>Site Management</p>
              <p className='text-sm'>
                Trust that your site’s history is never lost, and accidentally
                broken publishes can be reverted.
              </p>
              <div className='flex justify-center'>
                <SiteManagementSvg />
              </div>
            </div>
          </div>
          <div className='col-span-full md:col-span-8'>
            <Image
              alt='NoCodeWebsiteTemplate'
              src={DiscoverAnalyze}
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-200 py-14 max-w-6xl mx-auto space-y-12 wrapper'>
        <h3 className='text-2xl md:text-4xl max-w-4xl text-white'>
          Our customers love us
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full h-full rounded-lg p-4 border border-gray-800/60'>
            <div className='mb-8'>
              <ProductOfTheDay />
            </div>
            <h3 className='text-xl mb-3'>G2 High Performer</h3>
            <p className='opacity-50'>
              With a 4.5 out of 5 average rating <br /> we’re a high performer
              on G2.
            </p>
          </div>
          <div className='w-full h-full rounded-lg p-4 border border-gray-800/60'>
            <div className='mb-8'>
              <ProductOfTheDay />
            </div>
            <h3 className='text-xl mb-3'>Product Hunt Awards</h3>
            <p className='opacity-50'>
              We placed 2nd in the no-code product category and have received
              numerous daily and monthly awards.
            </p>
          </div>
        </div>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1300: 4 }}
            // gutter='1rem'
          >
            <Masonry gutter='1.5rem'>
              {testimonials.map((testo, i) => (
                <div className='bg-[#1B1B1B] p-3 rounded-xl' key={i}>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src={'https://i.pravatar.cc/50' + '?' + i}
                      alt='image'
                      width={30}
                      height={30}
                      className='rounded-full'
                    />
                    <p className='text-base'>{testo.name}</p>
                  </div>
                  <p className='opacity-50'>{testo.review}</p>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
      <section className='text-gray-200 py-14 max-w-6xl mx-auto space-y-12 wrapper'>
        <div className='grid grid-cols-12 gap-8'>
          <h3 className='text-2xl md:text-4xl max-w-4xl text-white col-span-full md:col-span-5'>
            Start your <br /> site for free.
          </h3>
          <div className='grid grid-cols-2 col-span-full md:col-span-7'>
            <div className='space-y-3'>
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M26.9055 17.2356C26.9055 17.4096 26.8364 17.5766 26.7133 17.6996C26.5902 17.8227 26.4233 17.8918 26.2493 17.8918H24.2805V19.8606C24.2805 20.0346 24.2114 20.2016 24.0883 20.3246C23.9652 20.4477 23.7983 20.5168 23.6243 20.5168C23.4502 20.5168 23.2833 20.4477 23.1602 20.3246C23.0371 20.2016 22.968 20.0346 22.968 19.8606V17.8918H20.9993C20.8252 17.8918 20.6583 17.8227 20.5352 17.6996C20.4121 17.5766 20.343 17.4096 20.343 17.2356C20.343 17.0615 20.4121 16.8946 20.5352 16.7715C20.6583 16.6485 20.8252 16.5793 20.9993 16.5793H22.968V14.6106C22.968 14.4365 23.0371 14.2696 23.1602 14.1465C23.2833 14.0235 23.4502 13.9543 23.6243 13.9543C23.7983 13.9543 23.9652 14.0235 24.0883 14.1465C24.2114 14.2696 24.2805 14.4365 24.2805 14.6106V16.5793H26.2493C26.4233 16.5793 26.5902 16.6485 26.7133 16.7715C26.8364 16.8946 26.9055 17.0615 26.9055 17.2356ZM6.12425 8.26683H8.093V10.2356C8.093 10.4096 8.16214 10.5766 8.28521 10.6996C8.40828 10.8227 8.5752 10.8918 8.74925 10.8918C8.9233 10.8918 9.09022 10.8227 9.21329 10.6996C9.33636 10.5766 9.4055 10.4096 9.4055 10.2356V8.26683H11.3743C11.5483 8.26683 11.7152 8.19769 11.8383 8.07462C11.9614 7.95155 12.0305 7.78463 12.0305 7.61058C12.0305 7.43654 11.9614 7.26962 11.8383 7.14655C11.7152 7.02347 11.5483 6.95433 11.3743 6.95433H9.4055V4.98558C9.4055 4.81154 9.33636 4.64462 9.21329 4.52155C9.09022 4.39847 8.9233 4.32933 8.74925 4.32933C8.5752 4.32933 8.40828 4.39847 8.28521 4.52155C8.16214 4.64462 8.093 4.81154 8.093 4.98558V6.95433H6.12425C5.9502 6.95433 5.78328 7.02347 5.66021 7.14655C5.53714 7.26962 5.468 7.43654 5.468 7.61058C5.468 7.78463 5.53714 7.95155 5.66021 8.07462C5.78328 8.19769 5.9502 8.26683 6.12425 8.26683ZM20.1243 21.8293H19.0305V20.7356C19.0305 20.5615 18.9614 20.3946 18.8383 20.2715C18.7152 20.1485 18.5483 20.0793 18.3743 20.0793C18.2002 20.0793 18.0333 20.1485 17.9102 20.2715C17.7871 20.3946 17.718 20.5615 17.718 20.7356V21.8293H16.6243C16.4502 21.8293 16.2833 21.8985 16.1602 22.0215C16.0371 22.1446 15.968 22.3115 15.968 22.4856C15.968 22.6596 16.0371 22.8266 16.1602 22.9496C16.2833 23.0727 16.4502 23.1418 16.6243 23.1418H17.718V24.2356C17.718 24.4096 17.7871 24.5766 17.9102 24.6996C18.0333 24.8227 18.2002 24.8918 18.3743 24.8918C18.5483 24.8918 18.7152 24.8227 18.8383 24.6996C18.9614 24.5766 19.0305 24.4096 19.0305 24.2356V23.1418H20.1243C20.2983 23.1418 20.4652 23.0727 20.5883 22.9496C20.7114 22.8266 20.7805 22.6596 20.7805 22.4856C20.7805 22.3115 20.7114 22.1446 20.5883 22.0215C20.4652 21.8985 20.2983 21.8293 20.1243 21.8293ZM23.8321 9.20637L8.59394 24.4434C8.45175 24.5856 8.28294 24.6984 8.09715 24.7754C7.91136 24.8523 7.71223 24.8919 7.51113 24.8919C7.31003 24.8919 7.1109 24.8523 6.92511 24.7754C6.73932 24.6984 6.57051 24.5856 6.42831 24.4434L4.16534 22.1804C4.02314 22.0382 3.91033 21.8694 3.83337 21.6836C3.75641 21.4978 3.7168 21.2987 3.7168 21.0976C3.7168 20.8965 3.75641 20.6974 3.83337 20.5116C3.91033 20.3258 4.02314 20.157 4.16534 20.0148L19.4035 4.77777C19.5457 4.63557 19.7145 4.52276 19.9003 4.4458C20.0861 4.36884 20.2852 4.32922 20.4863 4.32922C20.6874 4.32922 20.8865 4.36884 21.0723 4.4458C21.2581 4.52276 21.4269 4.63557 21.5691 4.77777L23.8321 7.04074C23.9743 7.18293 24.0871 7.35174 24.164 7.53753C24.241 7.72332 24.2806 7.92245 24.2806 8.12355C24.2806 8.32465 24.241 8.52378 24.164 8.70957C24.0871 8.89536 23.9743 9.06417 23.8321 9.20637ZM18.3207 12.8606L15.7493 10.2892L5.09394 20.9434C5.0736 20.9637 5.05747 20.9878 5.04646 21.0144C5.03545 21.041 5.02978 21.0694 5.02978 21.0982C5.02978 21.1269 5.03545 21.1554 5.04646 21.1819C5.05747 21.2085 5.0736 21.2326 5.09394 21.2529L7.35691 23.5148C7.39789 23.5555 7.45334 23.5784 7.51113 23.5784C7.56892 23.5784 7.62436 23.5555 7.66534 23.5148L18.3207 12.8606ZM22.9035 7.96824L20.6416 5.70637C20.6213 5.68603 20.5972 5.66989 20.5706 5.65888C20.544 5.64788 20.5156 5.64221 20.4868 5.64221C20.4581 5.64221 20.4296 5.64788 20.4031 5.65888C20.3765 5.66989 20.3524 5.68603 20.3321 5.70637L16.6768 9.36058L19.2493 11.9331L22.9035 8.27777C22.9238 8.25746 22.9399 8.23333 22.951 8.20677C22.962 8.18022 22.9676 8.15175 22.9676 8.12301C22.9676 8.09426 22.962 8.06579 22.951 8.03924C22.9399 8.01268 22.9238 7.98856 22.9035 7.96824Z'
                  fill='#0099FF'
                />
              </svg>

              <p className='text-lg'>Start with AI</p>
              <p className='opacity-50'>
                Generate your first page with AI. Input a prompt and go live in
                seconds.
              </p>
              <p className='font-bold link'>Generate Site</p>
            </div>
            <div className='space-y-3'>
              <svg
                width='24'
                height='20'
                viewBox='0 0 24 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.625 0.204346H5.875C5.46889 0.204346 5.07941 0.365673 4.79224 0.652839C4.50508 0.940004 4.34375 1.32948 4.34375 1.7356V3.70435H2.375C1.96889 3.70435 1.57941 3.86567 1.29224 4.15284C1.00508 4.44 0.84375 4.82948 0.84375 5.2356V17.4856C0.84375 17.8917 1.00508 18.2812 1.29224 18.5684C1.57941 18.8555 1.96889 19.0168 2.375 19.0168H18.125C18.5311 19.0168 18.9206 18.8555 19.2078 18.5684C19.4949 18.2812 19.6562 17.8917 19.6562 17.4856V15.5168H21.625C22.0311 15.5168 22.4206 15.3555 22.7078 15.0684C22.9949 14.7812 23.1562 14.3917 23.1562 13.9856V1.7356C23.1562 1.32948 22.9949 0.940004 22.7078 0.652839C22.4206 0.365673 22.0311 0.204346 21.625 0.204346ZM2.375 5.01685H18.125C18.183 5.01685 18.2387 5.03989 18.2797 5.08092C18.3207 5.12194 18.3438 5.17758 18.3438 5.2356V7.20435H2.15625V5.2356C2.15625 5.17758 2.1793 5.12194 2.22032 5.08092C2.26134 5.03989 2.31698 5.01685 2.375 5.01685ZM18.3438 17.4856C18.3438 17.5436 18.3207 17.5993 18.2797 17.6403C18.2387 17.6813 18.183 17.7043 18.125 17.7043H2.375C2.31698 17.7043 2.26134 17.6813 2.22032 17.6403C2.1793 17.5993 2.15625 17.5436 2.15625 17.4856V8.51685H18.3438V17.4856ZM21.8438 13.9856C21.8438 14.0436 21.8207 14.0993 21.7797 14.1403C21.7387 14.1813 21.683 14.2043 21.625 14.2043H19.6562V5.2356C19.6562 4.82948 19.4949 4.44 19.2078 4.15284C18.9206 3.86567 18.5311 3.70435 18.125 3.70435H5.65625V1.7356C5.65625 1.67758 5.6793 1.62194 5.72032 1.58092C5.76134 1.53989 5.81698 1.51685 5.875 1.51685H21.625C21.683 1.51685 21.7387 1.53989 21.7797 1.58092C21.8207 1.62194 21.8438 1.67758 21.8438 1.7356V13.9856Z'
                  fill='#0099FF'
                />
              </svg>

              <p className='text-lg'>Start with AI</p>
              <p className='opacity-50'>
                Generate your first page with AI. Input a prompt and go live in
                seconds.
              </p>
              <p className='font-bold link'>Generate Site</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Framer
