import Logo from '@/public/small_logo.png'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import AppTour from '@/public/dashboard/app_tour.png'
import BrowsePlugin from '@/public/dashboard/browse_plugins.png'
import CreateGpt from '@/public/dashboard/create_gpt.png'
import Tutorial from '@/public/dashboard/tutorial.png'
function Dashboard() {
  return (
    <main>
      <header className='py-2 5 px-3 bg-[#111111] flex justify-between items-center'>
        <div className='w-full'>
          <div className='w-fit h-fit bg-[#333333] px-1 py-1 rounded-xl'>
            <Image src={Logo} alt='logo' />
          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-3 bg-[#2B2B2B] text-[#999999] items-center px-2 py-1.5 rounded-xl overflow-hidden max-w-full md:max-w-md w-full'>
            <IoIosSearch className='text-xl' />
            <input
              type='text'
              className='bg-transparent outline-none w-full text-gray-200'
              placeholder='Search…'
            />
          </div>
        </div>
        <div className='flex gap-3 w-full justify-end items-center'>
          <div>
            <button className='btn_header block'>AR</button>
          </div>
          <div>
            <button className='btn_header'>New Project</button>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-12'>
        <aside className='col-span-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          incidunt, aliquid neque ut, reprehenderit quod nostrum eos quidem eum
          rem vel animi voluptates! Recusandae sequi facere ipsa obcaecati
          laboriosam quam!
        </aside>
        <div className='col-span-9 px-3 py-2'>
          <div className='space-y-5 mt-5'>
            <h3 className='text-lg font-semibold'>Get Started</h3>
            <div className='flex gap-4'>
              <Image src={AppTour} alt='button' />
              <Image src={BrowsePlugin} alt='button' />
              <Image src={CreateGpt} alt='button' />
              <Image src={Tutorial} alt='button' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
