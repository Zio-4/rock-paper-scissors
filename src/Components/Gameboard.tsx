import React, {useState} from 'react'
import Pentagon from '../images/bg-pentagon.svg'
import RulesPic from '../images/image-rules-bonus.svg'
import CloseButton from '../images/icon-close.svg'
import Scissors from '../images/icon-scissors.svg'
import Lizard from '../images/icon-lizard.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
import Spock from '../images/icon-spock.svg'

interface IgameStarted {
  setGameStarted: (arg0: boolean) => void
} 


function Gameboard({setGameStarted}: IgameStarted) {
  const [modalState, setModalState] = useState(false)

  const setGame = () => {
    setGameStarted(true)
  }

  return (
    <div>

      <section className='absolute left-[14px] grid grid-cols-3 gap-3 border-2 border-lime-400  z-10'>
        <div onClick={setGame} className='col-span-3'>
          <div className='bg-white rounded-full relative left-36 w-20 h-20 z-20'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10'></div>
          <div className='bg-scissors-bg-first rounded-full w-28 h-28'></div>
          <div className='bg-scissors-bg-last rounded-full w-28 h-28'></div>
          <img src={Scissors} alt='Scissors button' className='w-10 z-30'/>
        </div>

        <div onClick={setGame} className='col-start-1 col-end-2 '>
          <div className='bg-white rounded-full w-20 h-20 z-20'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10'></div>
          <div className='bg-spock-bg-first rounded-full w-28 h-28'></div>
          <div className='bg-spock-bg-last rounded-full w-28 h-28'></div>
          <img src={Spock} alt='Spock button' className='w-10 z-30'/>
        </div>

        <div onClick={setGame} className='col-start-3'>
          <div className='bg-white rounded-full w-20 h-20 z-20'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10'></div>
          <div className='bg-paper-bg-first rounded-full w-28 h-28'></div>
          <div className='bg-paper-bg-last rounded-full w-28 h-28'></div>
          <img src={Paper} alt='Paper button' className='w-10 z-30'/>
        </div>

        <div onClick={setGame} className='col-start-1 col-end-2 '>
          <div className='bg-white rounded-full w-20 h-20 z-20'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10'></div>
          <div className='bg-lizard-bg-first rounded-full w-28 h-28'></div>
          <div className='bg-lizard-bg-last rounded-full w-28 h-28'></div>
          <img src={Lizard} alt='Lizard button' className='w-10 z-30'/>
        </div>

        <div onClick={setGame} className='col-start-3'>
          <div className='bg-white rounded-full w-20 h-20 z-20'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10'></div>
          <div className='bg-rock-bg-first rounded-full w-28 h-28'></div>
          <div className='bg-rock-bg-last rounded-full w-28 h-28'></div>
          <img src={Rock} alt='Rock button' className='w-10 z-30'/>
        </div>
      </section>

      {/* Using absolute positioning */}
      {/* <div onClick={setGame}>
        <div className='bg-white absolute left-[155px] top-[253px]  rounded-full w-20 h-20 z-20'></div>
        <div className='bg-slate-300 absolute left-[155px] top-[249px]  rounded-full w-20 h-20 z-10'></div>
        <div className='bg-scissors-bg-first absolute left-[140px] top-[240px]  rounded-full w-28 h-28'></div>
        <div className='bg-scissors-bg-last absolute left-[140px] top-[236px]  rounded-full w-28 h-28'></div>
        <img src={Scissors} alt='Scissors button' className='absolute left-[174px] top-[264px] w-10 z-30'/>
      </div> */}

      {/* using negative margins */}
      {/* <div className='mx-auto bg-slate-300 rounded-full w-20 h-20 z-20 -mb-5'></div>
      <div className='mx-auto bg-white rounded-full w-20 h-20 z-30 -mb-10 '></div>
      <div className='mx-auto bg-scissors-bg-first rounded-full w-28 h-28 -mt-3'></div>
      <div className='mx-auto  bg-scissors-bg-last rounded-full w-28 h-28 -mt-32 -mb-10'></div>
      <img src={Scissors} alt='Scissors button' className='mx-auto w-10 z-40'/> */}



      <img src={Pentagon} alt='Pentagon game board background' className=' mx-auto mt-36 w-60 '/> 
      

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