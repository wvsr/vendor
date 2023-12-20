import React from 'react'
import Logo from '@/public/small_logo.png'
import Image from 'next/image'
function Login() {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center login_background'>
      <div className='wrapper w-full flex justify-center'>
        <div className='bg-[#111111] rounded-xl px-4 py-8 flex flex-col items-center max-w-sm w-full space-y-4'>
          <Image src={Logo} alt='logo' />
          <h2 className='text-xl text-center font-semibold'>
            Welcome to Framer
          </h2>
          <div className='space-y-2 w-full'>
            <button className='px-5 py-2.5 rounded-xl text-white bg-[#0099FF] font-semibold w-full flex gap-2 items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='17'
                viewBox='0 0 22 22'
                fill='none'
              >
                <path
                  d='M2.03496 6.67927C2.76295 5.23756 3.81371 3.98323 5.1055 3.01383C6.3973 2.04443 7.89531 1.3861 9.48302 1.09003C11.0707 0.793971 12.7053 0.868161 14.2597 1.30683C15.8141 1.7455 17.2463 2.53683 18.445 3.61927L15.43 6.63427C14.3501 5.59966 12.9052 5.03357 11.41 5.05927C10.1018 5.07772 8.83237 5.50589 7.78028 6.28352C6.72819 7.06115 5.94641 8.1491 5.54496 9.39427C5.11267 10.6891 5.11267 12.0894 5.54496 13.3843C5.84383 14.3046 6.35067 15.1437 7.02617 15.8365C7.70168 16.5293 8.52768 17.0571 9.44013 17.3792C10.3526 17.7012 11.327 17.8088 12.2877 17.6934C13.2484 17.5781 14.1696 17.2431 14.98 16.7143C15.524 16.3522 15.9892 15.8839 16.3475 15.3374C16.7058 14.7909 16.9498 14.1775 17.065 13.5343H11.41V9.48426H21.31C21.43 10.1593 21.49 10.8793 21.49 11.6293C21.49 14.8243 20.35 17.5093 18.355 19.3393C16.45 21.0441 13.9655 21.9563 11.41 21.8893C9.61833 21.8902 7.85626 21.4327 6.29139 20.5603C4.72653 19.6879 3.41093 18.4296 2.46976 16.9051C1.5286 15.3806 0.993174 13.6406 0.914442 11.8507C0.835709 10.0608 1.21628 8.28052 2.01996 6.67927H2.03496Z'
                  fill='white'
                />
              </svg>
              Continue with Google
            </button>
            <button className='px-5 py-2.5 rounded-xl text-white bg-[#555555] font-semibold w-full'>
              Continue with email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
