import React, {useState, MouseEvent} from 'react'
import Pentagon from '../images/bg-pentagon.svg'
import Scissors from '../images/icon-scissors.svg'
import Lizard from '../images/icon-lizard.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
import Spock from '../images/icon-spock.svg'

// Interface is shared for passed down props/functions
interface IgameBoard {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setPlayerButtonPick: React.Dispatch<React.SetStateAction<string>>
} 


function Gameboard({setGameStarted, setPlayerButtonPick}: IgameBoard) {

  const setGame = (event: MouseEvent<HTMLElement>) => {
    setGameStarted(true)
    //id isn't in all variations of target and can be, for example window. If you know the target is an element, you can cast to that
    const secondToLastPosition = (event.target as Element).id.length - 1
    setPlayerButtonPick((event.target as Element).id.slice(0, secondToLastPosition))
  }

  return (
    <div>

      <section className='mx-auto w-11/12 flex flex-wrap z-10 mt-24 xl:mt-16 2xl:mt-24'>

        {/* Set onClick handler only to elements not wrapper div !! */}
        <div onClick={setGame} className='w-full mb-6 z-10  2xl:mt-2 2xl:mb-10' id='scissors1'>
          <div className='cursor-pointer bg-scissors-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto xl:w-40 xl:h-40 xl:-mb-[10.5rem] ' id='scissors2'></div>
          <div className='cursor-pointer bg-scissors-bg-last -mb-24 rounded-full w-28 h-28 mx-auto xl:w-40 xl:h-40 xl:-mb-36' id='scissors3'></div>
          <div className='cursor-pointer bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto xl:w-32 xl:h-32 xl:-mb-[7.6rem]'id='scissors4'></div>
          <div className='cursor-pointer bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto xl:w-32 xl:h-32 xl:-mb-[6.5rem]' id='scissors5'></div>
          <img src={Scissors} alt='Scissors button' className='cursor-pointer mx-auto w-9 z-30 xl:w-14' id='scissors6'/>
        </div>

        {/* border-2 border-red-400 */}
        <div onClick={setGame} className='w-1/2 pr-14 pb-16 md:pb-20 z-10 sm:pr-0 sm:pl-12 md:pl-20 md:pt-2 lg:pl-56 xl:pl-64 2xl:pl-[30rem]' id='spock1'>
            <div className='cursor-pointer bg-spock-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto xl:w-40 xl:h-40 xl:-mb-[10.5rem]' id='spock2'></div>
            <div className='cursor-pointer bg-spock-bg-last rounded-full w-28 h-28 -mb-24 mx-auto xl:w-40 xl:h-40 xl:-mb-36' id='spock3'></div>
            <div className='cursor-pointer bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto xl:w-32 xl:h-32 xl:-mb-[7.6rem]' id='spock4'></div>
            <div className='cursor-pointer bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto xl:w-32 xl:h-32 xl:-mb-[6.5rem]' id='spock5'></div>
            <img src={Spock} alt='Spock button' className='cursor-pointer w-9 z-30 mx-auto xl:w-14' id='spock6'/>
        </div>

        {/* border-2 border-blue-300 */}
        <div onClick={setGame} className='w-1/2 pl-14 z-10 sm:pl-0 sm:pr-12 md:pr-20 md:pt-2 lg:pr-56 xl:pr-64 2xl:pr-[30rem]' id='paper1'>
          <div className='cursor-pointer bg-paper-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto xl:w-40 xl:h-40 xl:-mb-[10.5rem]' id='paper2'></div>
          <div className='cursor-pointer bg-paper-bg-last rounded-full w-28 h-28 -mb-24 mx-auto xl:w-40 xl:h-40 xl:-mb-36' id='paper3'></div>
          <div className='cursor-pointer bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto xl:w-32 xl:h-32 xl:-mb-[7.6rem]' id='paper4'></div>
          <div className='cursor-pointer bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto xl:w-32 xl:h-32 xl:-mb-[6.5rem]' id='paper5'></div>
          <img src={Paper} alt='Paper button' className='cursor-pointer w-9 z-30 mx-auto xl:w-14' id='paper6'/>
        </div>

        {/* border-2 border-yellow-300 */} 
        <div onClick={setGame} className='w-1/2 pl-7 z-10 sm:pl-32 sm:pt-4 md:pt-0 md:pl-48 lg:pl-80 xl:pt-4 xl:pl-96 2xl:pl-[40rem] 2xl:pt-12'  id='lizard1'>
          <div className='cursor-pointer bg-lizard-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto xl:w-40 xl:h-40 xl:-mb-[10.5rem]' id='lizard2'></div>
          <div className='cursor-pointer bg-lizard-bg-last rounded-full w-28 h-28 -mb-24 mx-auto xl:w-40 xl:h-40 xl:-mb-36' id='lizard3'></div>
          <div className='cursor-pointer bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto xl:w-32 xl:h-32 xl:-mb-[7.6rem]' id='lizard4'></div>
          <div className='cursor-pointer bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto xl:w-32 xl:h-32 xl:-mb-[6rem]' id='lizard5'></div>
          <img src={Lizard} alt='Lizard button' className='cursor-pointer w-11 z-30 mx-auto xl:w-16' id='lizard6'/>
        </div>

        {/* border-2 border-purple-300 */}
        <div onClick={setGame} className='w-1/2 pr-7 z-10 sm:pr-32 sm:pt-4 md:pt-0 md:pr-48 lg:pr-80 xl:pt-4 xl:pr-96 2xl:pr-[40rem] 2xl:pt-12' id='rock1'>
          <div className='cursor-pointer bg-rock-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto xl:w-40 xl:h-40 xl:-mb-[10.5rem]' id='rock2'></div>
          <div className='cursor-pointer bg-rock-bg-last rounded-full w-28 h-28 -mb-24 mx-auto xl:w-40 xl:h-40 xl:-mb-36' id='rock3'></div>
          <div className='cursor-pointer bg-slate-300 rounded-full w-20 h-20 z-10 -mb-[76px] mx-auto xl:w-32 xl:h-32 xl:-mb-[7.6rem]' id='rock4'></div>
          <div className='cursor-pointer bg-white rounded-full w-20 h-20 z-20 -mb-14 mx-auto xl:w-32 xl:h-32 xl:-mb-[6rem]' id='rock5'></div>
          <img src={Rock} alt='Rock button' className='cursor-pointer w-10 z-30 mx-auto xl:w-16' id='rock6'/>
        </div>
      </section>

      <img src={Pentagon} alt='Pentagon game board background' className='fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-60 md:w-72 xl:w-80 xl:top-[60%] 2xl:w-96 2xl:top-[58%]'/> 
      
    </div>
  )
}

export default Gameboard
