import Logo from '@/public/logo.png'
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

function Partner() {
  return (
    <main className='bg-black'>
      <div className='partner_hero'>
        <header className='flex justify-between items-start py-2.5 px-3 border-b border-gray-900'>
          <div className='flex gap-3 w-full'>
            <div className='pt-3'>
              <Image src={Logo} alt='logo' width={200} />
            </div>
          </div>
          <div>
            <button className='btn'>Launch</button>
          </div>
        </header>
        <div className='space-y-8 text-gray-200 py-24 flex justify-center items-center flex-col'>
          <h1 className='text-7xl text-center'>
            Earn money doing <br /> with AI plugins
          </h1>
          <p className='text-center text-lg opacity-70'>
            Create AI plugins to Earn recourcing payments <br />
            earn 50% of every subscription you bring in. Join our community for
            exciting job and project opportunities.
          </p>
          <button className='btn'>Apply for Partner</button>
        </div>
        <Image
          src={Hero}
          alt='hero'
          className='px-5 max-w-6xl w-full mx-auto shadow-2xl shadow-[#033363]'
        />
      </div>
      <section className='py-16'>
        <div className='space-y-7 text-gray-200'>
          <h2 className='text-4xl text-white text-center'>Sell GPTs.</h2>
          <p className='opacity-80 text-center'>
            Create fine tuned AI models to <br />
            convert users into paying customers.
          </p>
          <div className='sellgpt_pink grid grid-cols-12 max-w-5xl mx-auto rounded-2xl'>
            <div className='col-span-5 space-y-4 py-12 px-12'>
              <p className='text-2xl'>Use your unique URL when selling AI.</p>
              <p className='opacity-95'>
                It doesn’t matter if your GPT is free or paid; when a user uses
                it, they use your unique referral link. If they get on a paid
                plan afterward, you’ll earn commission of that subscription.{' '}
              </p>
            </div>
            <div className='col-span-7 pt-10 flex justify-end items-end'>
              <Image src={SellPink} alt='SellPink' />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-8 flex flex-col justify-end'>
              <div className='pt-8 px-10 space-y-3'>
                <p className='text-2xl'>Pricing your GPT</p>
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
            <div className='rounded-2xl bg-[#131313] col-span-4 py-8 space-y-4'>
              <p className='text-xl px-8'>How it works</p>
              <HowItWorkSellGpt />
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='space-y-7 text-gray-200'>
          <h2 className='text-4xl text-white text-center'>Sell Plugins.</h2>
          <p className='opacity-80 text-center'>
            Promote your AI tools on our platfrom <br />
            get paid when users subscribe.
          </p>
          <div className='sellgpt_blue grid grid-cols-12 max-w-5xl mx-auto rounded-2xl'>
            <div className='col-span-5 space-y-4 py-12 px-12'>
              <p className='text-2xl'>Ship your AI plugin.</p>
              <p className='opacity-95'>
                Add your plugin to vendor to attract new users, choose your
                price and get paid out monthly.
              </p>
            </div>
            <div className='col-span-7 pt-10 flex justify-end items-end'>
              <Image
                src={SellPlugin}
                alt='SellPink'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-8 flex flex-col justify-end p-10 space-y-4'>
              <div className='space-y-2'>
                <p className='text-2xl'>Get more conversions</p>
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
            <div className='rounded-2xl bg-[#131313] col-span-4 py-8 space-y-4'>
              <p className='text-xl px-8'>How it works</p>
              <HowItWorkSellPlugin />
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='space-y-7 text-gray-200'>
          <h2 className='text-4xl text-white text-center'>Share your link.</h2>
          <p className='opacity-80 text-center'>
            Make money from every subscription <br />
            we sell through your referral link.
          </p>
          <div className='sellgpt_blue grid grid-cols-12 max-w-5xl mx-auto rounded-2xl'>
            <div className='col-span-5 space-y-4 py-12 px-12'>
              <p className='text-2xl'>Ship your AI plugin.</p>
              <p className='opacity-95'>
                Add your plugin to vendor to attract new users, choose your
                price and get paid out monthly.
              </p>
            </div>
            <div className='col-span-7 pt-10 flex justify-end items-end'>
              <Image
                src={SellPlugin}
                alt='SellPink'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='grid grid-cols-12 max-w-5xl mx-auto gap-4'>
            <div className='rounded-2xl bg-[#131313] col-span-8 flex flex-col justify-between'>
              <div className='pt-6 px-12 space-y-3'>
                <p className='text-2xl'>Blog Posts</p>
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
    </main>
  )
}

export default Partner
