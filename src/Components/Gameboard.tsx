import React, {useState} from 'react'
import Pentagon from '../images/bg-pentagon.svg'
import RulesPic from '../images/image-rules-bonus.svg'
import CloseButton from '../images/icon-close.svg'

function Gameboard() {
  const [modalState, setModalState] = useState(false)


  return (
    <div>
      <div className='bg-white absolute left-[155px] top-[250px]  rounded-full w-20 h-20 z-20'></div>
      <div className='bg-slate-300 absolute left-[155px] top-[244px]  rounded-full w-20 h-20 z-10'></div>
      <div className='bg-scissors-bg-first absolute left-36 top-[234px]  rounded-full w-28 h-28'></div>

      <img src={Pentagon} alt='Pentagon game board background' className=' mx-auto mt-36 w-60'/>
      

      {/* hidden | view height? */}
      {/* On md+ viewport change close to be aligned with rules text */}
      <div className={`bg-white fixed left-0 top-0 w-screen h-screen rounded-lg z-50 overflow-auto ${modalState ? null : 'hidden'}`}>
        <div className='flex flex-col px-6'>
          <p className='order-1 text-dark-text text-3xl pt-24 mx-auto'>Rules</p>
          <img src={CloseButton}
           alt='close button' 
           onClick={() => setModalState(!modalState)} 
           className='order-last h-6 w-6 mt-24 mx-auto'/>
          <img src={RulesPic} alt='image of rules' className='order-2 mx-auto z-10 mt-24 pb-10'/>
        </div>
      </div>

      <div className='flex justify-center mt-44'>
        <button 
        onClick={() => setModalState(!modalState)} 
        className='text-white text-2xl border-2 border-header-outline py-2 px-12 rounded-md'
        >Rules</button>
      </div>

    </div>
  )
}

export default Gameboard