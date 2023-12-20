import Logo from '@/public/small_logo.png'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='text-white hidden sm:block'>{children}</main>
      <main className='block sm:hidden text-white'>
        <div className='w-full h-[90vh] flex flex-col justify-around items-center login_background'>
          <div className='wrapper w-full flex justify-center'>
            <div className='bg-[#111111] rounded-xl px-4 py-8 flex flex-col items-center max-w-sm w-full space-y-4'>
              <Image src={Logo} alt='logo' />
              <h2 className='text-xl text-center font-semibold'>
                Sign up on desktop
              </h2>
              <p className='text-sm opacity-60 text-center'>
                Framer works best on bigger screens. Please come back and sign
                up on desktop.
              </p>
              <button className='text-[#0099FF] flex gap-2 items-center w-full justify-center text-sm font-bold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <g clip-path='url(#clip0_98_3234)'>
                    <path
                      d='M12.7207 2.63965C10.1348 2.63965 7.65489 3.66688 5.82641 5.49536C3.99793 7.32384 2.9707 9.80379 2.9707 12.3896C2.9707 14.9755 3.99793 17.4555 5.82641 19.2839C7.65489 21.1124 10.1348 22.1396 12.7207 22.1396C15.3066 22.1396 17.7865 21.1124 19.615 19.2839C21.4435 17.4555 22.4707 14.9755 22.4707 12.3896C22.4707 9.80379 21.4435 7.32384 19.615 5.49536C17.7865 3.66688 15.3066 2.63965 12.7207 2.63965ZM16.1307 13.0196L11.6307 16.0196C11.507 16.0952 11.3656 16.1366 11.2207 16.1396C11.0961 16.1414 10.9728 16.114 10.8607 16.0596C10.7408 15.9941 10.6412 15.897 10.5724 15.7789C10.5037 15.6609 10.4685 15.5263 10.4707 15.3896V9.38965C10.4707 9.10965 10.6207 8.85965 10.8707 8.71965C11.1107 8.59965 11.4007 8.61965 11.6307 8.75965L16.1307 11.7596C16.236 11.8276 16.3225 11.9209 16.3824 12.031C16.4424 12.141 16.4738 12.2643 16.4738 12.3896C16.4738 12.515 16.4424 12.6383 16.3824 12.7483C16.3225 12.8584 16.236 12.9517 16.1307 13.0196Z'
                      fill='#0099FF'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_98_3234'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0.720703 0.389648)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                Watch Tutorial
              </button>
            </div>
          </div>
          <p className='text-center text-[#0099FF] text-sm font-bold'>
            I’m on desktop, continue
          </p>
        </div>
      </main>
    </>
  )
}
