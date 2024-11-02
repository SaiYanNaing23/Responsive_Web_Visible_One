import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#8b8b8b] text-white py-8  ' >
        <div className='max-w-[1200px] mx-auto flex justify-between lg:gap-20 xl:gap-36 extra-small-footer '>
            <div className='w-1/2 flex justify-around ' >
                <h1 className='font-bold cursor-pointer text-xl ' >Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Discovert</li>
                    <li>Photo</li>
                    <li>Contract</li>
                </ul>
                <ul>
                    <li>About</li>
                    <li>Help</li>
                    <li>Terms</li>
                    <li>Guideline</li>
                </ul>
                <ul>
                    <li>Testimonlate</li>
                    <li>Advertise</li>
                    <li>Integrations</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='w-1/2 lg:flex md:mr-5 justify-between' >
                <div className='flex flex-col relative ' >
                    <input  className='inline-block bg-[#8b8b8b] text-white placeholder-white border border-white rounded-md p-2 focus:outline-none ' type="email" placeholder='email'  />
                    <div className='absolute top-2 right-2 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724" color="currentColor"/></svg>
                    </div>
                    <span className='inline-block' >Stay in touch with us for the freshest products!</span>
                </div>
                <div className='flex gap-10 lg:mr-5 xl:mr-0 ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
