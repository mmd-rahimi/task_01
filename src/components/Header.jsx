import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
        <div className='flex flex-row justify-center items-center gap-4 mt-2 text-white'>
        <NavLink to="/" className='bg-blue-500 w-[7rem] h-[3rem] rounded-2xl flex justify-center items-center'>خدمات فنی</NavLink>
        <NavLink to="/expertise" className='bg-blue-500 w-[7rem] h-[3rem] rounded-2xl flex justify-center items-center'>انجام کارشناسی</NavLink>
        </div>
  )
}

export default Header