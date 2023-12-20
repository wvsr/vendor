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
        <aside className='col-span-2 bg-[#111111] border-t border-[#1D1D1D] min-h-[91vh] px-4 py-3 '>
          <p className='py-3 font-semibold ps-2'>Projects</p>
          <div className='space-y-2 pb-3 border-b border-[#333333]'>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M1.15234 7.14062C1.15234 3.82663 3.83834 1.14062 7.15234 1.14062C10.4663 1.14062 13.1523 3.82663 13.1523 7.14062C13.1523 10.4546 10.4663 13.1406 7.15234 13.1406C3.83834 13.1406 1.15234 10.4546 1.15234 7.14062ZM7.65234 3.89062C7.65234 3.47662 7.31634 3.14062 6.90234 3.14062C6.48834 3.14062 6.15234 3.47662 6.15234 3.89062V6.89062C6.15234 7.08962 6.23134 7.28063 6.37234 7.42063L8.37234 9.42062C8.66834 9.69562 9.12834 9.68762 9.41434 9.40263C9.69934 9.11662 9.70734 8.65663 9.43234 8.36063L7.65234 6.58063V3.89062Z'
                  fill='#888888'
                />
              </svg>
              Recents
            </button>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M2.15234 1.89062C2.15234 1.47662 2.48834 1.14062 2.90234 1.14062H11.4023C11.8163 1.14062 12.1523 1.47662 12.1523 1.89062C12.1523 2.30463 11.8163 2.64062 11.4023 2.64062H2.90234C2.48834 2.64062 2.15234 2.30463 2.15234 1.89062ZM3.15234 4.14062C3.15234 3.86462 3.37634 3.64062 3.65234 3.64062H10.6523C10.9283 3.64062 11.1523 3.86462 11.1523 4.14062V11.1406C11.1523 12.2456 10.2573 13.1406 9.15234 13.1406H5.15234C4.04734 13.1406 3.15234 12.2456 3.15234 11.1406V4.14062Z'
                  fill='#888888'
                />
              </svg>
              Archive
            </button>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M6.15234 3.14062C6.15234 2.58863 6.60034 2.14062 7.15234 2.14062C7.70434 2.14062 8.15234 2.58863 8.15234 3.14062V6.14062H11.1523C11.7043 6.14062 12.1523 6.58862 12.1523 7.14062C12.1523 7.69263 11.7043 8.14062 11.1523 8.14062H8.15234V11.1406C8.15234 11.6926 7.70434 12.1406 7.15234 12.1406C6.60034 12.1406 6.15234 11.6926 6.15234 11.1406V8.14062H3.15234C2.60034 8.14062 2.15234 7.69263 2.15234 7.14062C2.15234 6.58862 2.60034 6.14062 3.15234 6.14062H6.15234V3.14062Z'
                  fill='#888888'
                />
              </svg>
              New Team
            </button>
          </div>
          <div className='space-y-2 pt-5 pb-3'>
            <div className='flex justify-between gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className='w-fit rounded-lg px-2 py-1 bg-[#0099FF]'>M</div>
                <p className='text-sm font-semibold'>My Team</p>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
              >
                <path
                  d='M3.15234 6.64062C3.98034 6.64062 4.65234 7.31262 4.65234 8.14062C4.65234 8.96863 3.98034 9.64062 3.15234 9.64062C2.32434 9.64062 1.65234 8.96863 1.65234 8.14062C1.65234 7.31262 2.32434 6.64062 3.15234 6.64062Z'
                  fill='#888888'
                />
                <path
                  d='M8.15234 6.64062C8.98034 6.64062 9.65234 7.31262 9.65234 8.14062C9.65234 8.96863 8.98034 9.64062 8.15234 9.64062C7.32434 9.64062 6.65234 8.96863 6.65234 8.14062C6.65234 7.31262 7.32434 6.64062 8.15234 6.64062Z'
                  fill='#888888'
                />
                <path
                  d='M13.1523 6.64062C13.9803 6.64062 14.6523 7.31262 14.6523 8.14062C14.6523 8.96863 13.9803 9.64062 13.1523 9.64062C12.3243 9.64062 11.6523 8.96863 11.6523 8.14062C11.6523 7.31262 12.3243 6.64062 13.1523 6.64062Z'
                  fill='#888888'
                />
              </svg>
            </div>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M1.15234 3.14062C1.15234 2.03562 2.04734 1.14062 3.15234 1.14062H5.65234C6.20434 1.14062 6.65234 1.58863 6.65234 2.14062V6.14062C6.65234 6.41663 6.42834 6.64062 6.15234 6.64062H2.15234C1.60034 6.64062 1.15234 6.19263 1.15234 5.64062V3.14062ZM11.1523 1.14062C12.2573 1.14062 13.1523 2.03562 13.1523 3.14062V5.64062C13.1523 6.19263 12.7043 6.64062 12.1523 6.64062H8.15234C7.87634 6.64062 7.65234 6.41663 7.65234 6.14062V2.14062C7.65234 1.58863 8.10034 1.14062 8.65234 1.14062H11.1523ZM13.1523 11.1406C13.1523 12.2456 12.2573 13.1406 11.1523 13.1406H8.65234C8.10034 13.1406 7.65234 12.6926 7.65234 12.1406V8.14062C7.65234 7.86462 7.87634 7.64062 8.15234 7.64062H12.1523C12.7043 7.64062 13.1523 8.08862 13.1523 8.64062V11.1406ZM3.15234 13.1406C2.04734 13.1406 1.15234 12.2456 1.15234 11.1406V8.64062C1.15234 8.08862 1.60034 7.64062 2.15234 7.64062H6.15234C6.42834 7.64062 6.65234 7.86462 6.65234 8.14062V12.1406C6.65234 12.6926 6.20434 13.1406 5.65234 13.1406H3.15234Z'
                  fill='#888888'
                />
              </svg>
              All
            </button>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M2.15234 1.89062C2.15234 1.47662 2.48834 1.14062 2.90234 1.14062H11.4023C11.8163 1.14062 12.1523 1.47662 12.1523 1.89062C12.1523 2.30463 11.8163 2.64062 11.4023 2.64062H2.90234C2.48834 2.64062 2.15234 2.30463 2.15234 1.89062ZM3.15234 4.14062C3.15234 3.86462 3.37634 3.64062 3.65234 3.64062H10.6523C10.9283 3.64062 11.1523 3.86462 11.1523 4.14062V11.1406C11.1523 12.2456 10.2573 13.1406 9.15234 13.1406H5.15234C4.04734 13.1406 3.15234 12.2456 3.15234 11.1406V4.14062Z'
                  fill='#888888'
                />
              </svg>
              Archive
            </button>
            <button className='flex gap-2 items-center text-sm text-[#888888] font-semibold hover:bg-[#2B2B2B] w-full px-2 py-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path
                  d='M6.15234 3.14062C6.15234 2.58863 6.60034 2.14062 7.15234 2.14062C7.70434 2.14062 8.15234 2.58863 8.15234 3.14062V6.14062H11.1523C11.7043 6.14062 12.1523 6.58862 12.1523 7.14062C12.1523 7.69263 11.7043 8.14062 11.1523 8.14062H8.15234V11.1406C8.15234 11.6926 7.70434 12.1406 7.15234 12.1406C6.60034 12.1406 6.15234 11.6926 6.15234 11.1406V8.14062H3.15234C2.60034 8.14062 2.15234 7.69263 2.15234 7.14062C2.15234 6.58862 2.60034 6.14062 3.15234 6.14062H6.15234V3.14062Z'
                  fill='#888888'
                />
              </svg>
              New Folder…
            </button>
          </div>
        </aside>
        <div className='col-span-10 px-3 py-2'>
          <div className='max-w-4xl mx-auto'>
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
      </div>
    </main>
  )
}

export default Dashboard
