import React, {useState} from 'react'
import Pentagon from '../images/bg-pentagon.svg'
import RulesPic from '../images/image-rules-bonus.svg'
import CloseButton from '../images/icon-close.svg'

function Gameboard() {
  const [modalState, setModalState] = useState(false)

  console.log(modalState)

  return (
    <div>
      <img src={Pentagon} alt='Pentagon game board background' className=' mx-auto mt-40'/>
      
      {/* hidden | view height? */}
      {/* On md+ viewport change close to be aligned with rules text */}
      {/* <div className={`bg-white fixed left-0 top-0 w-screen h-screen rounded-lg z-10 overflow-auto ${modalState}`}> */}
      <div className={`bg-white fixed left-0 top-0 w-screen h-screen rounded-lg z-10 overflow-auto ${modalState ? null : 'hidden'}`}>
        <div className='flex flex-col px-6'>
          <p className='order-1 text-dark-text text-3xl pt-24 mx-auto'>Rules</p>
          <img src={CloseButton}
           alt='close button' 
           onClick={() => setModalState(!modalState)} 
           className='order-last h-6 w-6 mt-24 mx-auto'/>
          <img src={RulesPic} alt='image of rules' className='order-2 mx-auto z-10 mt-24 pb-10'/>
        </div>
      </div>
      <div className='flex justify-end mr-6 mt-20'>
        <button 
        onClick={() => setModalState(!modalState)} 
        className='text-white border-2 border-header-outline py-1 px-7 rounded-md'
        >Rules</button>
    </div>
    </div>
  )
}

export default Gameboard