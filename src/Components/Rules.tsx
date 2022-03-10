import React, {useState} from 'react'
import RulesPic from '../images/image-rules-bonus.svg'
import CloseButton from '../images/icon-close.svg'

function Rules() {
    const [modalState, setModalState] = useState(false)
  
return (
    <div>
      {/* hidden | view height? */}
      {/* On md+ viewport change close to be aligned with rules text */}
      <div className={`bg-modal-bg z-50 fixed left-0 top-0 w-full h-full overflow-auto ${modalState ? null : 'hidden'}`}>
        {/* z-50 */}
        <div className={`bg-white fixed left-0 top-0 w-screen h-screen rounded-lg overflow-auto xl:w-1/3 xl:h-[35rem] xl:left-1/2 xl:top-1/2 xl:-translate-x-2/4 xl:-translate-y-2/4 2xl:w-[34rem] 2xl:h-[35rem] ${modalState ? null : 'hidden'}`}>
          <div className='flex flex-col px-6 xl:flex-row xl:flex-wrap '>
            <p className='uppercase order-1 text-dark-text text-3xl pt-24 mx-auto xl:mr-52 xl:pt-8 2xl:mr-64'>Rules</p>
            <img src={CloseButton}
            alt='close button' 
            onClick={() => setModalState(!modalState)} 
            className='cursor-pointer order-last h-6 w-6 mt-24 mx-auto xl:order-2 xl:mt-11'/>
            <img src={RulesPic} alt='image of rules' className='order-2 mx-auto z-10 mt-24 pb-10 xl:mt-8 2xl: w-[27rem] '/>
          </div>
        </div>
      </div>

      {/* Horizontally centers a fixed element */}
      <div className='fixed top-[80%] left-[50%] -translate-x-1/2 xl:top-[90%] xl:left-[90%]'>
          <button 
          onClick={() => setModalState(!modalState)} 
          className='text-white font-extralight text-2xl border-2 border-white py-2 px-12 rounded-xl uppercase tracking-widest mx-auto'
          >rules</button>
      </div>
    </div>
  )
}

export default Rules