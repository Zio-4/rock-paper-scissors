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
  setPlayerButton: React.Dispatch<React.SetStateAction<string>>
} 

// React.Dispatch<React.SetStateAction<string>>



function Gameboard({setGameStarted}: IgameBoard, {setPlayerButton}: IgameBoard) {

  const setGame = (event: MouseEvent<HTMLElement>) => {
    setGameStarted(true)
    //id isn't in all variations of target and can be, for example window. If you know the target is an element, you can cast to that
    setPlayerButton((event.target as Element).id)
  }

  return (
    <div>

      <section className='mx-auto w-11/12 flex flex-wrap z-10 -mb-80 mt-24 '>
        {/* border-2 border-orange-300 */}
        <div onClick={setGame} id='Scissors1' className='w-full mb-4'>
          <div className='bg-scissors-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto' id='Scissors2'></div>
          <div className='bg-scissors-bg-last -mb-24 rounded-full w-28 h-28 mx-auto' id='Scissors3'></div>
          <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'id='Scissors4'></div>
          <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto' id='Scissors5'></div>
          <img src={Scissors} alt='Scissors button' className='mx-auto w-9 z-30' id='Scissors6'/>
        </div>

        {/* border-2 border-red-400 */}
        <div onClick={setGame} className='w-1/2 pr-14 pb-12'>
            <div className='bg-spock-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto'></div>
            <div className='bg-spock-bg-last rounded-full w-28 h-28 -mb-24 mx-auto'></div>
            <div className='bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto'></div>
            <div className='bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto'></div>
            <img src={Spock} alt='Spock button' className='w-9 z-30 mx-auto'/>
        </div>

        {/* border-2 border-blue-300 */}
        <div onClick={setGame} className='w-1/2 pl-14'>
          <div className='bg-paper-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto'></div>
          <div className='bg-paper-bg-last rounded-full w-28 h-28 -mb-24 mx-auto'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto'></div>
          <img src={Paper} alt='Paper button' className='w-9 z-30 mx-auto'/>
        </div>

        {/* border-2 border-yellow-300 */}
        <div onClick={setGame} className='w-1/2 '>
          <div className='bg-lizard-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto'></div>
          <div className='bg-lizard-bg-last rounded-full w-28 h-28 -mb-24 mx-auto'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10  -mb-[76px] mx-auto'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20  -mb-16 mx-auto'></div>
          <img src={Lizard} alt='Lizard button' className='w-11 z-30 mx-auto'/>
        </div>

        {/* border-2 border-purple-300 */}
        <div onClick={setGame} className='w-1/2  mb-20'>
          <div className='bg-rock-bg-first rounded-full w-28 h-28 -mb-[116px] mx-auto'></div>
          <div className='bg-rock-bg-last rounded-full w-28 h-28 -mb-24 mx-auto'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10 -mb-[76px] mx-auto'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20 -mb-14 mx-auto'></div>
          <img src={Rock} alt='Rock button' className='w-10 z-30 mx-auto'/>
        </div>
      </section>

      <img src={Pentagon} alt='Pentagon game board background' className='fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-60 -z-10'/> 
      
    </div>
  )
}

export default Gameboard

      {/* border-2 border-lime-400 */}
      {/* <section className='mx-auto grid grid-cols-3 gap-3 z-10 -mb-80 mt-24'>
        border-2 border-orange-300
        <div onClick={setGame} className='col-span-3 mb-4'>
          <div className='bg-scissors-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto'></div>
          <div className='bg-scissors-bg-last -mb-24 rounded-full w-28 h-28 mx-auto'></div>
          <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'></div>
          <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto'></div>
          <img src={Scissors} alt='Scissors button' className='mx-auto w-9 z-30'/>
        </div>

        border-2 border-red-400
        <div onClick={setGame} className='col-start-1 col-end-2 '>
          <div className='fixed'>
            <div className='bg-spock-bg-first rounded-full w-28 h-28 -mb-[116px] '></div>
            <div className='bg-spock-bg-last rounded-full w-28 h-28 -mb-24 '></div>
            <div className='bg-slate-300 rounded-full w-20 h-20 z-10 ml-4 -mb-[76px]'></div>
            <div className='bg-white rounded-full w-20 h-20 z-20 ml-4 -mb-16 '></div>
            <img src={Spock} alt='Spock button' className='w-9 z-30 ml-10'/>
          </div>
        </div>

        border-2 border-blue-300
        <div onClick={setGame} className='col-start-3  mb-14'>
          <div className='bg-paper-bg-first rounded-full w-28 h-28 -mb-[116px] '></div>
          <div className='bg-paper-bg-last rounded-full w-28 h-28 -mb-24 '></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10 ml-4 -mb-[76px]'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20 ml-4 -mb-16'></div>
          <img src={Paper} alt='Paper button' className='w-9 z-30 ml-9'/>
        </div>

        border-2 border-yellow-300
        <div onClick={setGame} className='col-start-1 col-end-2 '>
          <div className='bg-lizard-bg-first rounded-full w-28 h-28 -mb-[116px] ml-12'></div>
          <div className='bg-lizard-bg-last rounded-full w-28 h-28 -mb-24 ml-12'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10 ml-16 -mb-[76px]'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20 ml-16 -mb-16'></div>
          <img src={Lizard} alt='Lizard button' className='w-11 z-30 ml-20'/>
        </div>

        border-2 border-purple-300
        <div onClick={setGame} className='col-start-3 mb-20'>
          <div className='bg-rock-bg-first rounded-full w-28 h-28 -mb-[116px] -ml-12'></div>
          <div className='bg-rock-bg-last rounded-full w-28 h-28 -mb-24 -ml-12'></div>
          <div className='bg-slate-300 rounded-full w-20 h-20 z-10 -ml-8 -mb-[76px]'></div>
          <div className='bg-white rounded-full w-20 h-20 z-20 -ml-8 -mb-14'></div>
          <img src={Rock} alt='Rock button' className='w-10 z-30 -ml-3'/>
        </div>
      </section> */}

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