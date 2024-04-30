import Link from 'next/link'
import React from 'react'

const Nav = ({containerStyles, listStyles}: navProps) => {
  return (
    <nav className={containerStyles}>
      <Link href="/" className={`${listStyles}`}>Home</Link>
      <Link href="/Packages" className={`${listStyles}`}>Our Packages</Link>
      <Link href="/About" className={`${listStyles}`}>About Us</Link>
      <Link href="/Contact" className={`${listStyles}`}>Contact</Link>
      <Link href="/Blog" className={`${listStyles}`}>Blog</Link>
    </nav>
     
  )
}

type navProps ={
  containerStyles: string;
  listStyles:string
}

export default Nav