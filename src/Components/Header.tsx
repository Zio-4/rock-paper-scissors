import React from 'react'
import Logo from '../images/logo-bonus.svg'

interface Iscore {
  score: number
}

function Header({score}: Iscore) {
  return (
    <div className='flex justify-between border-2 rounded-xl border-header-outline p-3 w-4/5 mx-auto mt-8 xl:w-3/5 xl:py-4 2xl:w-1/2 2xl:mt-12'>
        <img src={Logo} alt='logo' className='w-20 xl:w-32 xl:pt-1'/>
        <div className='bg-white rounded-md w-24 text-center xl:w-44 xl:rounded-lg'>
            <p className='text-score text-md uppercase tracking-widest xl:pt-5 xl:text-lg'>score</p>
            <p className='text-5xl text-dark-text pb-2 xl:text-6xl'>{score}</p>
        </div>
    </div>
  )
}

export default Header