import React from 'react'

const HappeningNow = () => {
  return (
    <div className='py-[64px] max-w-[1200px] mx-auto ' >
        <div className='happening_now_title sm:px-[32px] font-bold flex justify-between text-black mb-4 w-full md:px-0 lg:mx-5 xl:mx-0 md:mx-5 ' >
          <h1 className='text-xl' >HAPPENING NOW</h1>
          <div className='flex gap-10 lg:mr-10 xl:mr-0 md:mr-10 ' >
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg>
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
            </div>
        </div>
        <div className='md:flex-row lg:flex-row gap-10 lg:mx-5 xl:mx-0 md:mx-6 sm:flex sm:items-center sm:flex-col extra-small-happening' >
            <div className='w-[65%]' >
                <div className='relative mb-8 ' >
                    <img src="/happen1.jpg" className='w-full !h-[498px]' alt="happen1" />
                    <div className='bg-black/30 absolute text-white top-0 left-0 w-full h-full ' >
                        <h1 className='text-2xl font-bold mt-10 ml-10' >
                            CITY
                        </h1>
                    </div>
                    <div className='absolute bottom-0 text-white mb-10 ml-10 ' >
                            <h2 className='text-lg font-bold mb-2' >
                                Large Article title
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptas perferendis fugiat distinctio, eum quam porro culpa. Reiciendis nihil sint nesciunt suscipit eos quaerat sed aliquid, repudiandae numquam eius debitis.
                            </p>
                            <div className='mt-3 flex gap-5 items-center  ' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                                2m ago
                            </div>
                    </div>
                </div>
                <div className='relative' >
                    <img src="/happen2.jpg" className='w-full !h-[498px] ' alt="happen2" />
                    <div className='bg-black/30 absolute text-white top-0 left-0 w-full h-full ' >
                        <h1 className='text-2xl font-bold mt-10 ml-10' >
                            TRAVEL
                        </h1>
                    </div>
                    <div className='absolute bottom-0 text-white mb-10 ml-10 ' >
                            <h2 className='text-lg font-bold mb-2' >
                                Large Article title
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptas perferendis fugiat distinctio, eum quam porro culpa. Reiciendis nihil sint nesciunt suscipit eos quaerat sed aliquid, repudiandae numquam eius debitis.
                            </p>
                            <div className='mt-3 flex gap-5 items-center  ' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                                2m ago
                            </div>
                    </div>
                </div>
            </div>
            <div className='w-[35%]  ' >
                <div>
                    <img src="/happen3.jpg" className='w-full !h-[230px] mt-0 ' alt="happen3" />
                    <h2 className='text-black font-bold text-lg mt-5 ' >Small Title</h2>
                    <div className='mt-3 flex gap-5 items-center  ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                        3h ago by <span className='underline' >Worldnews</span>
                    </div>
                </div>
                <div>
                    <img src="/happen4.jpeg" className='w-full !h-[230px] ' alt="happen3" />
                    <h2 className='text-black font-bold text-lg mt-5 ' >Small Title</h2>
                    <div className='mt-3 flex gap-5 items-center  ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                        4h ago by <span className='underline' >Days</span>
                    </div>
                </div>
                <div>
                    <img src="/happen5.jpeg" className='w-full !h-[230px] ' alt="happen3" />
                    <h2 className='text-black font-bold text-lg mt-5 ' >Small Title</h2>
                    <div className='mt-3 flex gap-5 items-center  ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                        3h ago by <span className='underline' >Monica</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HappeningNow
