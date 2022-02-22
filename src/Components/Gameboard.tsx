import React from 'react'
import Pentagon from '../images/bg-pentagon.svg'
import RulesPic from '../images/image-rules-bonus.svg'
import CloseButton from '../images/icon-close.svg'

function Gameboard() {
  return (
    <div>
      <img src={Pentagon} alt='Pentagon game board background' className=' mx-auto mt-40 z-0'/>
      
      <div className='bg-white w-96 mx-auto rounded-lg'>
        <div className='flex justify-between px-6'>
          <p className='text-dark-text text-3xl pt-4'>Rules</p>
          <img src={CloseButton} alt='close button' className='h-6 w-6 mt-6'/>
        </div>
        <img src={RulesPic} alt='image of rules' className='mx-auto z-10 mt-4 pb-10'/>
      </div>
    </div>
   
  )
}

export default Gameboard