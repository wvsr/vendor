import { IoIosSearch } from 'react-icons/io'
import Logo from '@/public/logo.png'
import ChatGpt from '@/public/chatgpt.webp'
import Image from 'next/image'

function Search() {
  const aiList = ['ChatGPT', 'Thropic', 'Gemini']
  return (
    <main className='bg-black'>
      <header className='flex justify-between items-start py-2.5 px-3 border-b border-gray-700'>
        <div className='flex gap-3 w-full'>
          <div className='pt-3'>
            <Image src={Logo} alt='logo' width={200} />
          </div>
          <div className='w-full space-y-3'>
            <div className='flex gap-3 bg-[#2B2B2B] text-[#999999] items-center px-2 py-2 rounded-xl overflow-hidden max-w-xl w-full'>
              <IoIosSearch className='text-xl' />
              <input
                type='text'
                className='bg-transparent outline-none w-full text-gray-200'
                placeholder='Search…'
              />
            </div>
            <div className='flex gap-2 flex-wrap w-full text-gray-200'>
              {aiList.map((e, i) => {
                return (
                  <div
                    key={i}
                    className='px-3 py-1.5 border border-gray-700 rounded-md text-sm'
                    role='button'
                  >
                    {e}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <button className='btn'>Launch</button>
        </div>
      </header>

      <article className='wrapper py-5 text-[#ECECF1]'>
        <p>ChatGPT 3.5</p>

        <div className='max-w-2xl py-8 space-y-6'>
          <div className='grid grid-cols-12 gap-3 items-start'>
            <div className='col-span-1 flex justify-end'>
              <img
                src='https://i.pravatar.cc/50'
                className='rounded-full w-2/3 h-auto'
                alt=''
              />
            </div>
            <div className='col-span-10'>
              <p className='font-bold'>You</p>
              <p className='text-gray-300 text-sm'>Why should I use Al?</p>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-3 items-start'>
            <div className='col-span-1 flex justify-end'>
              <Image src={ChatGpt} className='w-2/3 h-auto' alt='chatgpt' />
            </div>
            <div className='col-span-10'>
              <p className='font-bold'>ChatGpt</p>
              <p className='text-gray-300 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                ipsa impedit. Ad neque ratione nulla temporibus, atque inventore
                sequi dolores cumque eum quaerat omnis explicabo amet
                repudiandae, recusandae consequatur odit. Maxime tempora
                delectus ab. Asperiores eius culpa doloribus odio, minima hic
                neque in vero mollitia iste unde est deleniti, adipisci aliquid
                commodi amet inventore reiciendis ea ipsa laboriosam! Tempore,
                nobis! Dolores reiciendis sapiente aliquam molestias at iusto
                deserunt veritatis voluptatibus magnam totam velit, voluptates
                eum voluptatem repellendus eius? Amet molestias pariatur fuga
                ducimus sequi. Molestiae, aliquam incidunt. Modi, quidem
                corrupti? Architecto, explicabo placeat doloremque
                exercitationem necessitatibus veritatis, vel nesciunt at qui
                dicta veniam soluta! Deserunt corrupti eos alias eum totam nihil
                quae? Laudantium dolore dicta deserunt nemo natus obcaecati
                doloribus. Eveniet consectetur numquam ipsa fugit repellendus?
                Aperiam, dicta. Eveniet voluptatum quia explicabo sapiente, non
                provident fugiat ab illo repellat, est minus temporibus saepe
                iure optio placeat fuga vel! Totam, nulla. Quod quae in rem
                exercitationem error, iste facere adipisci officia, eos
                necessitatibus quas est libero, dolorem dicta. Eos quis repellat
                consectetur blanditiis adipisci sit eaque, assumenda, nam
                perferendis reiciendis cumque! Vitae dolore vel velit soluta
                nemo tenetur suscipit autem doloribus! Accusantium corrupti
                magni quidem ratione error in nihil nulla ipsam temporibus,
                repudiandae exercitationem rem reprehenderit cumque officiis
                maxime quis atque! Quidem magnam, laudantium debitis ab beatae
                nemo ullam ut impedit quae neque voluptate enim repellat
                suscipit perferendis nihil deleniti officiis, veritatis
                aspernatur facilis omnis commodi asperiores! Accusamus tempore
                ipsum maiores? Maxime esse similique illo dicta vero magni
                doloribus nam accusamus eveniet nemo. Iusto beatae delectus
                sequi neque explicabo amet a, vitae cupiditate quisquam
                laboriosam fugit incidunt omnis ad numquam consequuntur!
                Similique, unde quod! Earum maiores laudantium pariatur,
                reprehenderit laborum asperiores tenetur quisquam eaque et
                perferendis nemo libero iusto at porro aliquid numquam harum
                aspernatur. Aut maxime aperiam sunt aliquid facere. Quae vel
                atque, voluptates alias, repudiandae earum nihil, veritatis
                quasi blanditiis optio sunt id deleniti cumque fugiat maiores
                repellat? Nisi aperiam temporibus recusandae eos sint! Corrupti
                explicabo consequuntur rerum iste? Beatae quaerat vero,
                quibusdam iusto deserunt nostrum enim fugiat nobis, quisquam
                magnam officia assumenda! Suscipit, labore, pariatur iste ullam
                culpa ratione nihil dolor praesentium quis totam dolores
                exercitationem repudiandae placeat! Rem, deserunt qui ex
                blanditiis quos accusantium pariatur reprehenderit, sit expedita
                eveniet temporibus iure adipisci dolores soluta velit odio? A
                nulla doloremque repellat cupiditate corrupti, sequi doloribus
                dolore amet neque! Maiores aliquid et enim blanditiis illum
                reiciendis vero. Repellendus, rem sapiente quibusdam, repellat
                facilis vitae aspernatur consequuntur ex fugiat ea dolorum
                corrupti in aliquam aut. Voluptatibus dolorem distinctio illum
                ipsam. Officia possimus vitae aut. Tempora ut quaerat
                exercitationem fugiat amet molestiae assumenda quidem animi
                aspernatur iure. Minima mollitia dolorem a voluptatum voluptates
                debitis officia tenetur voluptate, totam error, magnam
                molestias.
              </p>
            </div>
          </div>
        </div>
      </article>
      <footer></footer>
    </main>
  )
}

export default Search
