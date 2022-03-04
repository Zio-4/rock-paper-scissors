import React, {useState, useEffect} from 'react'
import Scissors from '../images/icon-scissors.svg'
import Lizard from '../images/icon-lizard.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
import Spock from '../images/icon-spock.svg'

interface IplayerButton {
  playerButtonPick: string
}

function PlayingGame({playerButtonPick}: IplayerButton) {
  const [computerButtonPick, setComputerButtonPick] = useState<string>('')
  
  useEffect(() => {
    const min = Math.ceil(1);
    const max = Math.floor(5);
    let number = Math.floor(Math.random() * (max - min + 1) + min)

    if (number === 1) setComputerButtonPick('scissors')
    if (number === 2) setComputerButtonPick('paper')
    if (number === 3) setComputerButtonPick('rock')
    if (number === 4) setComputerButtonPick('spock')
    if (number === 5) setComputerButtonPick('lizard')


  }, [])

  const plays = () => {
      return (
        <div>
          <div className='flex flex-wrap justify-center space-x-20 mt-20'>
            <div>
              <div className=' mb-4'>
                <div className={`bg-${playerButtonPick}-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto`}></div>
                <div className={`bg-${playerButtonPick}-bg-last -mb-24 rounded-full w-28 h-28 mx-auto`}></div>
                <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'></div>
                <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto'></div>
                <img src={Scissors} alt={`${playerButtonPick} button`} className='mx-auto w-9 z-30' />
              </div>
            </div>

            {/* Check string is not null */}
            <div className=''>
              <div className={`bg-computer-placeholder-button opacity-20 rounded-full w-28 h-28 ${!!computerButtonPick ? 'hidden' : null}`}></div>
            </div>
          </div>

          <div className={`${!!computerButtonPick ? null : 'hidden'}`}>
            <div className={`bg-${computerButtonPick}-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto`} ></div>
            <div className={`bg-${computerButtonPick}-bg-last -mb-24 rounded-full w-28 h-28 mx-auto`}></div>
            <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'></div>
            <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto' ></div>
            <img src={Scissors} alt={`${computerButtonPick} button`} className='mx-auto w-9 z-30'/>
          </div>

          <div className='flex flex-wrap justify-between space-x-2 mt-5'>
              <div className='text-lg text-white uppercase tracking-widest ml-12'>you picked</div>
              <div className='text-lg text-white uppercase tracking-widest pr-4'>the house picked</div>
            </div>
        </div>)
  }

  return (
    <div>
      {plays()}
    </div>
  )
}

export default PlayingGame