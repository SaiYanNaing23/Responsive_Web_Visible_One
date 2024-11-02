import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // Function to close the menu if the scroll position is over 800px
    const checkScrollAndCloseMenu = () => {
        if (window.scrollY > 100 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', checkScrollAndCloseMenu);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', checkScrollAndCloseMenu);
    }, [isMobileMenuOpen]);
  return (
    <>
        <header  >
            <div className='flex justify-between px-3 py-3 '>
                <h1 className='text-xl text-[#ec4899] font-bold cursor-pointer ' >Logo</h1>

                {/* Desktop Nav Bar */}
                <ul className=' gap-7 hidden sm:flex items-center ' >
                    <li className='cursor-pointer hover:font-extrabold text-lg  ' >
                        HOME 
                    </li>
                    <li className='cursor-pointer hover:font-extrabold text-lg  ' >
                        DISCOVERY
                    </li>
                    <li className='cursor-pointer hover:font-extrabold text-lg  ' >
                        PHOTOS
                    </li>
                    <li className='cursor-pointer hover:font-extrabold text-lg  ' >
                        CONTACT
                    </li>
                    <li className='cursor-pointer  ' >
                        <img src="/profile.jpeg" alt="profile" className='w-[40px] h-[40px] rounded-[50%]' />
                    </li>
                </ul>

                <div className='sm:hidden size-6 cursor-pointer' onClick={toggleMobileMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>
                </div>

            </div>
            {/* Mobile Nav Bar */}
            {isMobileMenuOpen && (
            <ul className='absolute flex flex-col gap-y-7 text-center w-full sm:hidden z-50 bg-black top-0 left-0 h-screen border rounded border-gray-800 px-5 py-[100px] ' >
                <li className='text-white cursor-pointer hover:font-extrabold text-lg  ' onClick={toggleMobileMenu} >
                    HOME 
                </li>
                <li className='text-white cursor-pointer hover:font-extrabold text-lg  ' onClick={toggleMobileMenu} >
                    DISCOVERY
                </li>
                <li className='text-white cursor-pointer hover:font-extrabold text-lg  ' onClick={toggleMobileMenu} >
                    PHOTOS
                </li>
                <li className='text-white cursor-pointer hover:font-extrabold text-lg  ' onClick={toggleMobileMenu} >
                    CONTACT
                </li>
                <li className='cursor-pointer text-center mx-auto ' onClick={toggleMobileMenu} >
                    <img src="/profile.jpeg" alt="profile" className='w-[40px] h-[40px] rounded-[50%]' />
                </li>
            </ul>
            )}

        </header>
    </>
  )
}

export default Nav
