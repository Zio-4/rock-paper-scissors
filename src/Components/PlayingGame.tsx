import React, {useState, useEffect} from 'react'
import scissors from '../images/icon-scissors.svg'
import lizard from '../images/icon-lizard.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import spock from '../images/icon-spock.svg'

interface IplayingGame {
  playerButtonPick: string
  setScore: React.Dispatch<React.SetStateAction<number>>
  score: number
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>
}



function PlayingGame({playerButtonPick, setScore, score, setGameStarted}: IplayingGame) {
  const [computerButtonPick, setComputerButtonPick] = useState<string>('')
  const [gameResult, setGameResult] = useState<string>('')
  
  useEffect(() => {
    // Simulate picking a button 
    if (computerButtonPick.length === 0) {
      setTimeout(
        () => {
          const min = Math.ceil(1);
          const max = Math.floor(5);
          let number = Math.floor(Math.random() * (max - min + 1) + min)
      
          if (number === 1) setComputerButtonPick('scissors')
          if (number === 2) setComputerButtonPick('paper')
          if (number === 3) setComputerButtonPick('rock')
          if (number === 4) setComputerButtonPick('spock')
          if (number === 5) setComputerButtonPick('lizard')

          renderComputerPick() 
        }, (1000))  
    }

    if (playerButtonPick === 'scissors' && computerButtonPick === 'scissors') setGameResult('tie') 
    if (playerButtonPick === 'paper' && computerButtonPick === 'paper') setGameResult('tie') 
    if (playerButtonPick === 'rock' && computerButtonPick === 'rock') setGameResult('tie') 
    if (playerButtonPick === 'spock' && computerButtonPick === 'spock') setGameResult('tie')
    if (playerButtonPick === 'lizard' && computerButtonPick === 'lizard') setGameResult('tie')
  
    if (playerButtonPick === 'scissors' && computerButtonPick === 'paper') setGameResult('win')
    if (playerButtonPick === 'paper' && computerButtonPick === 'rock') setGameResult('win')
    if (playerButtonPick === 'rock' && computerButtonPick === 'lizard') setGameResult('win')
    if (playerButtonPick === 'lizard' && computerButtonPick === 'spock') setGameResult('win')
    if (playerButtonPick === 'spock' && computerButtonPick === 'scissors') setGameResult('win')
    if (playerButtonPick === 'scissors' && computerButtonPick === 'lizard') setGameResult('win')
    if (playerButtonPick === 'paper' && computerButtonPick === 'spock') setGameResult('win')
    if (playerButtonPick === 'rock' && computerButtonPick === 'scissors') setGameResult('win')
    if (playerButtonPick === 'lizard' && computerButtonPick === 'paper') setGameResult('win')
    if (playerButtonPick === 'spock' && computerButtonPick === 'rock') setGameResult('win')
  
    if (playerButtonPick === 'paper' && computerButtonPick === 'scissors') setGameResult('lose')
    if (playerButtonPick === 'rock' && computerButtonPick === 'paper') setGameResult('lose')
    if (playerButtonPick === 'lizard' && computerButtonPick === 'rock') setGameResult('lose')
    if (playerButtonPick === 'spock' && computerButtonPick === 'lizard') setGameResult('lose')
    if (playerButtonPick === 'scissors' && computerButtonPick === 'spock') setGameResult('lose')
    if (playerButtonPick === 'lizard' && computerButtonPick === 'scissors') setGameResult('lose')
    if (playerButtonPick === 'spock' && computerButtonPick === 'paper') setGameResult('lose')
    if (playerButtonPick === 'scissors' && computerButtonPick === 'rock') setGameResult('lose')
    if (playerButtonPick === 'paper' && computerButtonPick === 'lizard') setGameResult('lose')
    if (playerButtonPick === 'rock' && computerButtonPick === 'spock') setGameResult('lose')


    if (gameResult === 'win') setScore(score += 1)
    if (gameResult === 'lose' && score !== 0) setScore(score -= 1)

  }, [computerButtonPick, gameResult])

  console.log(gameResult)


  const renderComputerPick = () => {
    if (computerButtonPick.length > 0) {
      return (
        <div >
          <div className={`bg-${computerButtonPick}-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto`} ></div>
          <div className={`bg-${computerButtonPick}-bg-last -mb-24 rounded-full w-28 h-28 mx-auto`}></div>
          <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'></div>
          <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto' ></div>
          <img src={require(`../images/icon-${computerButtonPick}.svg`)} alt={`${computerButtonPick} button`} className='mx-auto w-9 z-30'/>
        </div>)
    }
  }


  const winLoseTie = () => {
    if (gameResult === 'win') {
      return (
        <div>
          <p className='text-6xl text-yellow-400 uppercase text-center mt-20'>you win</p>
          <div onClick={() => setGameStarted(false)} className='flex justify-center mt-6'>
            <button className='rounded-md py-3 px-20 uppercase tracking-widest text-xl text-page-bg-start bg-white'>play again</button>
          </div>
        </div>
      )
    } else if (gameResult === 'lose') {
      return (
        <div>
          <p className='text-6xl text-red-400 uppercase text-center mt-20'>you lose</p>
          <div onClick={() => setGameStarted(false)} className='flex justify-center mt-6'>
            <button className='rounded-md py-3 px-20 uppercase tracking-widest text-xl text-page-bg-start bg-white'>play again</button>
          </div>
        </div>
      )
    } else if (gameResult === 'tie') {
      return (
        <div>
          <p className='text-6xl text-white uppercase text-center mt-20'>it's a tie</p>
          <div onClick={() => setGameStarted(false)} className='flex justify-center mt-6'>
            <button className='rounded-md py-3 px-20 uppercase tracking-widest text-xl text-page-bg-start bg-white'>play again</button>
          </div>
        </div>
      )
    }
  }


  return (
    <div>
      <div className='flex justify-center space-x-20 mt-20 mb-12 sm:space-x-48'>
          <div className='mb-4'>
            <div className={`bg-${playerButtonPick}-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto`}></div>
            <div className={`bg-${playerButtonPick}-bg-last -mb-24 rounded-full w-28 h-28 mx-auto`}></div>
            <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'></div>
            <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto'></div>
            <img src={require(`../images/icon-${playerButtonPick}.svg`)} alt={`${playerButtonPick} button`} className='mx-auto w-9 z-30' />
        </div>

        {/* Check string is not null */}
        <div className={`bg-computer-placeholder-button opacity-20 rounded-full w-28 h-28 ${!!computerButtonPick ? 'hidden' : null}`}></div>
        
        {renderComputerPick()}

      </div>

      <div className='flex flex-wrap justify-between space-x-2 mt-5'>
        <div className={`text-lg text-white uppercase tracking-widest ml-12 sm:ml-[7.5rem] ${gameResult === 'win' ? 'underline decoration-solid underline-offset-8' : null}`}>you picked</div>
        <div className={`text-lg text-white uppercase tracking-widest pr-4 sm:pr-20 ${gameResult === 'lose' ? 'underline decoration-solid underline-offset-8' : null}`}>the house picked</div>
      </div>

      {winLoseTie()}
    </div>
  )
}

export default PlayingGame