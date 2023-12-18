import Logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/public/partner/hero.png'
import SellPink from '@/public/partner/sell_pink.png'
import SellPlugin from '@/public/partner/sell_plugin.png'
import PricingGpt from '@/public/partner/pricing_gpt.png'
import BlogPost from '@/public/partner/blogPost.png'
import SellPluginGetKnow from '@/public/partner/sellPluginGetKnow.png'
import HowItWorkSellPlugin from '@/components/partner/HowItWorkSellPlugin'
import HowItWorkShareLink from '@/components/partner/HowItWorkShareLink'
import HowItWorkSellGpt from '@/components/partner/HowItWorkSellGpt'
import YoutubePost from '@/public/partner/youtubePost.png'
import Tweet from '@/public/partner/tweet.png'
import Footer from '@/components/Footer'

function Partner() {
  return (
    <main className='bg-black'>
      <div className='partner_hero'>
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
        <div className='space-y-8 text-gray-200 py-24 flex justify-center items-center flex-col'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
            Earn money doing <br /> with AI plugins
          </h1>
          <p className='text-center text-sm sm:text-base md:text-lg opacity-70'>
            Create AI plugins to Earn recourcing payments <br />
            earn 50% of every subscription you bring in. Join our community for
            exciting job and project opportunities.
          </p>
          <button className='btn'>Apply for Partner</button>
        </div>
        <Image
          src={Hero}
          alt='hero'
          className='px-5 max-w-6xl w-full mx-auto shadow-2xl shadow-[#033363] wrapper'
        />
      </div>
      <section className='py-16 wrapper'>
        <div className='space-y-4 sm:space-y-7 text-gray-200'>
          <h2 className='text-2xl md:text-4xl text-white text-center'>
            Sell GPTs.
          </h2>
          <p className='opacity-80 text-center text-sm sm:text-base'>
            Create fine tuned AI models to <br />
            convert users into paying customers.
          </p>
          <div className='sellgpt_pink grid grid-cols-12 max-w-5xl mx-auto rounded-2xl'>
            <div className='col-span-full md:col-span-5 space-y-4 py-12 px-12'>
              <h5 className='text-2xl'>Use your unique URL when selling AI.</h5>
              <p className='opacity-95'>
                It doesn’t matter if your GPT is free or paid; when a user uses
                it, they use your unique referral link. If they get on a paid
                plan afterward, you’ll earn commission of that subscription.{' '}
              </p>
            </div>
            <div className='col-span-full md:col-span-7 ps-5 md:pt-10 flex justify-end items-end'>
              <Image src={SellPink} alt='SellPink' />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-full md:col-span-8 flex flex-col justify-end'>
              <div className='pt-8 px-10 space-y-3'>
                <h5 className='text-2xl'>Pricing your GPT</h5>
                <p className='opacity-70 text-sm'>
                  You can choose to make your GPT free or paid. Free GPTs get a
                  lot of exposure in the app and are easy to pick by many users
                  but convert a bit lower to upgrades. Paid GPTs have a higher
                  barrier to entry because users first have to subscribe to your
                  GPT but convert at a higher rate on upgrades.
                </p>
              </div>
              <Image src={PricingGpt} alt='PricingGpt' />
            </div>
            <div className='rounded-2xl bg-[#131313] col-span-full md:col-span-4 py-8 space-y-4'>
              <p className='text-xl px-8'>How it works</p>
              <div className='flex justify-center w-full'>
                <HowItWorkSellGpt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 wrapper'>
        <div className='space-y-4 sm:space-y-7 text-gray-200'>
          <h2 className='text-2xl md:text-4xl text-white text-center'>
            Sell Plugins.
          </h2>
          <p className='opacity-80 text-center text-sm sm:text-base'>
            Promote your AI tools on our platfrom <br />
            get paid when users subscribe.
          </p>
          <div className='sellgpt_blue grid grid-cols-12 max-w-5xl mx-auto rounded-2xl'>
            <div className='col-span-full md:col-span-5 space-y-4 py-6 md:py-12 px-12'>
              <h5 className='text-2xl'>Ship your AI plugin.</h5>
              <p className='opacity-95'>
                Add your plugin to vendor to attract new users, choose your
                price and get paid out monthly.
              </p>
            </div>
            <div className='col-span-full md:col-span-7 md:pt-10 flex justify-end items-end'>
              <Image
                src={SellPlugin}
                alt='SellPink'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-full md:col-span-8 flex flex-col justify-end p-10 space-y-4'>
              <div className='space-y-2'>
                <h5 className='text-2xl'>Get more conversions</h5>
                <p className='opacity-70 text-sm'>
                  Add your plugin to your own account and monitor when users
                  subscribe and get quick payouts.
                </p>
              </div>
              <Image
                src={SellPluginGetKnow}
                alt='PricingGpt'
                className='w-full'
              />
            </div>
            <div className='rounded-2xl bg-[#131313] col-span-full md:col-span-4 py-8 space-y-4'>
              <p className='text-xl px-8'>How it works</p>
              <div className='flex justify-center w-full'>
                <HowItWorkSellPlugin />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='space-y-4 sm:space-y-7 text-gray-200'>
          <h2 className='text-2xl md:text-4xl text-white text-center'>
            Share your link.
          </h2>
          <p className='opacity-80 text-center text-sm sm:text-base'>
            Make money from every subscription <br />
            we sell through your referral link.
          </p>
          <div className='grid grid-cols-2 max-w-5xl mx-auto gap-4'>
            <div className='sellgpt_orange rounded-2xl space-y-2 flex flex-col justify-between gap-4'>
              <div className='space-y-2 px-6 py-5'>
                <p className='text-xl'>Video</p>
                <p className='text-sm opacity-75'>
                  Create tutorial, comparison, or walkthrough videos and add
                  your referral link to the description.
                </p>
              </div>
              <div className='flex justify-end items-end'>
                <Image src={YoutubePost} alt='YoutubePost' />
              </div>
            </div>
            <div className='bg-[#131313] rounded-2xl space-y-2'>
              <div className='space-y-2 px-6 py-6'>
                <p className='text-xl'>Social</p>
                <p className='text-sm opacity-75'>
                  Talk about us on X, TikTok, Instagram or write a post on
                  Medium and use your link to point to Vendor.
                </p>
              </div>
              <Image src={Tweet} alt='tweet' />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-8 flex flex-col justify-between'>
              <div className='pt-6 px-12 space-y-3'>
                <h5 className='text-2xl'>Blog Posts</h5>
                <p className='opacity-70 text-sm'>
                  Link back to VENDOR from a post or tutorial on your own
                  website.
                </p>
              </div>
              <div className='flex justify-end'>
                <Image src={BlogPost} alt='PricingGpt' />
              </div>
            </div>
            <div className='rounded-2xl bg-[#131313] col-span-4 py-8 space-y-4'>
              <p className='text-xl px-8'>How it works</p>
              <HowItWorkShareLink />
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 form text-gray-200 wrapper'>
        <div className='max-w-6xl mx-auto space-y-8'>
          <div className='space-y-4'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-center'>
              Become a partner today.
            </p>
            <p className='text-sm md:text-base text-center opacity-75'>
              Join today to start making money and get access to our <br />
              exclusive partner channel on the Vendor Community.
            </p>
          </div>
          <div className='max-w-xl mx-auto space-y-3'>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <input
                  type='text'
                  className='form_input_partner'
                  placeholder='Name'
                  name=''
                  id=''
                />
              </div>
              <div>
                <input
                  type='Email'
                  className='form_input_partner'
                  placeholder='Name'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div>
              <textarea
                name=''
                id=''
                className='form_input_partner'
                placeholder='Message'
              ></textarea>
            </div>
            <div>
              <input
                type='text'
                className='form_input_partner'
                placeholder='X username'
                name=''
                id=''
              />
            </div>
            <button className='w-full px-4 py-2 rounded-md bg-[#6600FF]'>
              Apply now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Partner
