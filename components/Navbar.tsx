import Link from 'next/link'
import React from 'react'

export const navigations = [
  {
    href: '/plan',
    title: 'store',
    icon: '/icons/store.svg',
  },
  {
    href: '/portfolio',
    title: 'portfolio',
    icon: '/icons/portfolio.svg',
  },
]

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 py-2 px-5 flex flex-row items-center w-full text-sm bg-black bg-opacity-60 backdrop-blur-md z-10'>
      <Link href="/" className='flex-1'>
        <span className='border border-indigo-500 text-indigo-500 font-[200] rounded-full p-1'>blu</span>
        <span className='pt-1'>bex</span>
      </Link>
      {navigations.map((navi, id) => {
        return(
          <Link href={navi.href} key={id}>
            <div className='ml-1 px-3 py-2 hover:bg-[#111111] rounded-xl'>
              <div className='flex items-center'>
                <img src={navi.icon} className='mr-[5px]' alt={navi.title}/> 
                {navi.title} 
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar