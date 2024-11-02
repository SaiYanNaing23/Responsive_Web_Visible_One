import React from 'react'

const Trending = () => {
  return (
    <div className='py-[32px] max-w-[1200px] xl:mx-auto lg:mx-5 ' >
        <div className=' sm:px-[32px] font-bold flex justify-between text-black mb-4 w-full md:px-0 ' >
          <h1 className='text-xl' >TRENDING</h1>
          <div className='flex gap-10' >
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg>
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
            </div>
        </div>
        <div className='extra-small-trending-card flex sm:flex-col md:flex-row sm:items-center justify-between gap-10 xl:gap-5 ' >
          {/* card 1 */}
          <div className='overflow-x-hidden rounded-md bg-white w-[400px] ' >
              <img src="/trending1.jpg" width={400} height={246} className='!h-[246px]'  alt="trending1" />
              <div className='p-[32px]' >
                <h3 className='mb-3 font-bold text-black text-lg ' >
                  Dolore magna aliqua
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro laboriosam doloremque quam tempora doloribus veniam adipisci ut possimus...
                </p>
                <div className='mt-3 flex gap-5 items-center  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                    2 min ago
                </div>
              </div>
          </div>

          {/* card 2 */}
          <div className='overflow-x-hidden rounded-md bg-white w-[400px] ' >
              <img src="/trending2.jpeg" width={400} height={246} className='!h-[246px]' alt="trending1" />
              <div className='p-[32px]' >
                <h3 className='mb-3 font-bold text-black text-lg ' >
                  Morbi eleifend a libero
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro laboriosam doloremque quam tempora doloribus veniam adipisci ut possimus...
                </p>
                <div className='mt-3 flex gap-5 items-center  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                    1 h ago
                </div>
              </div>
          </div>

          {/* card 3 */}
          <div className='overflow-x-hidden rounded-md bg-white w-[400px] ' >
              <img src="/trending3.jpg" width={400} height={200} className='!h-[246px]' alt="trending1" />
              <div className='p-[32px]' >
                <h3 className='mb-3 font-bold text-black text-lg ' >
                  Morbi eleifend a libero
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro laboriosam doloremque quam tempora doloribus veniam adipisci ut possimus...
                </p>
                <div className='mt-3 flex gap-5 items-center  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                    3 h ago
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Trending
