import React from 'react'

const Hero = () => {
  return (
    <div className='relative  sm:flex sm:flex-col md:flex md:flex-col lg:flex-row bg-white ' >
        <img src="/Hero.jpg"  alt="hero" className='xl:w-[70%] lg:w-[65%] object-cover md:w-full ' />
        <div className='extra-small-hero-title absolute top-[30%] sm:top-[4%] sm:left-[1%] xl:left-[10%] md:top-[10%] lg:left-[5%] lg:top-[30%] left-[12%] md:w-[600px] text-white ' >
            <h1 className='text-3xl  font-bold border-b-2 pb-8 border-white' >WORLD NEWS</h1>

            <h2 className='text-2xl mt-2 font-bold ' >
                Amazing places in America to visit
            </h2>
            <p>
                For some reason — this country, this city, this neighborhood this particular street — is the place you are living majority of your life in
            </p>

            <button className='mt-4 border-[#ec4899] border p-3 rounded-md bg-[#ec4899] hover:bg-[#82305b] hover:border-[#82305b] ' >
                LEARN MORE
            </button>
        </div>
       
      
      <div className='more_news_media w-full sm:mt-5 sm:mx-[18px] md:mt-5 z-10 relative xl:mx-[100px] xl:py-[80px] lg:mx-[70px] lg:py-[20px] ' >
        <div className='flex items-center justify-between border-b pb-10 border-[#706f6f80] ' >
            <h1 className='font-bold text-black text-2xl lg:text-xl ' >MORE NEWS</h1>
            <div className='flex gap-5 md:mr-[50px] lg:mr-0 xl:mr-0 2xl:mr-0  ' >
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg>
                <svg className='cursor-pointer hover:text-black ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
            </div>
        </div>
        <div className='mt-10' >
            <h2 className='text-[#ec4899] text-xl font-bold lg:text-xl ' >TRAVEL</h2>
            <h2 className='text-black text-xl font-bold mt-4 lg:text-lg' > Article Title</h2>
            <p className='mt-2' >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint dignissimos saepe? Nulla ratione omnis totam ...
            </p>
            <div className='mt-3 flex gap-5 items-center ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                2 min ago
            </div>
        </div>
        <div className='mt-10' >
            <h2 className='text-[#ec4899] text-xl font-bold lg:text-xl ' >TECHNOLOGY</h2>
            <h2 className='text-black text-xl font-bold mt-4 lg:text-lg' > Article Title</h2>
            <p className='mt-2' >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint dignissimos saepe? Nulla ratione omnis totam ...
            </p>
            <div className='mt-3 flex gap-5 items-center mb-10' >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                2 min ago
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
