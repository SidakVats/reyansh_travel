"use client"
import Link from 'next/link'
import Nav from './Nav'
import { useEffect, useState } from 'react'
import Button from './Button'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${active ? "bg-white shadow-lg  py-2 z-50" : "bg-white  py-3 z-50"} fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200`}>
      <div className='max_padd_container flexBetween'>
        {/* logo  */}
        <Link href={"/"}>
                <img className="flexCenter py-3 px-5" src="/logo.svg" alt="logo" height={133} width={133}></img>
            </Link>
            {/* nav links  */}
            {/* for desktop */}
            <Nav containerStyles={"hidden lg:flex gap-x-10 iems-start justify-center"} listStyles={"uppercase capitalized cursor-pointer my-4 relative transition-all"}/>
            {/* for mobile  */}
            <Nav containerStyles={`${menuOpened ? "flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-3 w-60" : "flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60"}`} listStyles={"capitalized cursor-pointer my-4 relative transition-all"}/>
            {/* icons and buttons  */}
            <div className='flexCenter'>
                <div className='hidden lg:block'>
                  <Button
                  type='button'
                  title='Book Now'
                  icon='/user.svg'
                  variant='btn_secondary_rounded'
                  />
                </div>
                {!menuOpened ? (<GiHamburgerMenu className='lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary' onClick={toggleMenu} />) : (<IoClose className='cursor-pointer regular-24 hover:text-secondary' onClick={toggleMenu}/>)}
            </div>
      </div>
    </header>
  )
}

export default Header
