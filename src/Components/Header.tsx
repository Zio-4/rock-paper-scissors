import React from 'react'
import Logo from '../images/logo-bonus.svg'

interface Iscore {
  score: number
}

function Header({score}: Iscore) {
  return (
    <div className='flex justify-between border-2 rounded-xl border-header-outline p-3 w-4/5 mx-auto mt-8 lg:w-1/2 lg:py-4'>
        <img src={Logo} alt='logo' className='w-20 lg:w-32 lg:pt-1'/>
        <div className='bg-white rounded-md w-24 text-center lg:w-44 lg:rounded-lg'>
            <p className='text-score text-md uppercase tracking-widest lg:pt-5 lg:text-lg'>score</p>
            <p className='text-5xl text-dark-text pb-2 lg:text-6xl'>{score}</p>
        </div>
    </div>
  )
}

export default Header