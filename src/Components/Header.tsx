import React from 'react'
import Logo from '../images/logo-bonus.svg'

function Header() {
  return (
    <div className='flex justify-between border-2 rounded-xl border-header-outline p-3 w-4/5 mx-auto mt-8'>
        <img src={Logo} alt='logo' className='w-20'/>
        <div className='bg-white rounded-md w-24 text-center'>
            <p className='text-score text-xl'>score</p>
            <p className='text-5xl text-dark-text pb-2'>12</p>
        </div>
    </div>
  )
}

export default Header