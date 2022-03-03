import React, {useState} from 'react'
import Scissors from '../images/icon-scissors.svg'
import Lizard from '../images/icon-lizard.svg'
import Paper from '../images/icon-paper.svg'
import Rock from '../images/icon-rock.svg'
import Spock from '../images/icon-spock.svg'

interface IplayerButton {
  playerButton: string
}

function PlayingGame({playerButton}: IplayerButton) {

  const plays = () => {
    if (playerButton.includes("Scissors")) {
      return (<div>
                <div className='flex flex-wrap justify-center space-x-20 mt-20'>
                  <div>
                    <div id='Scissors1' className=' mb-4'>
                      <div className='bg-scissors-bg-first -mb-[116px] rounded-full w-28 h-28 mx-auto' id='Scissors2'></div>
                      <div className='bg-scissors-bg-last -mb-24 rounded-full w-28 h-28 mx-auto' id='Scissors3'></div>
                      <div className='bg-slate-300 -mb-[76px] rounded-full w-20 h-20 z-10 mx-auto'id='Scissors4'></div>
                      <div className='bg-white rounded-full -mb-16 w-20 h-20 z-20 mx-auto' id='Scissors5'></div>
                      <img src={Scissors} alt='Scissors button' className='mx-auto w-9 z-30' id='Scissors6'/>

                    </div>
                  </div>

                  <div className=''>
                    <div className='bg-computer-placeholder-button opacity-20 rounded-full w-28 h-28'></div>
                  </div>
                </div>

                <div className='flex flex-wrap justify-between space-x-2 mt-5'>
                    <div className='text-lg text-white uppercase tracking-widest ml-12'>you picked</div>
                    <div className='text-lg text-white uppercase tracking-widest pr-4'>the house picked</div>
                  </div>
              </div>)
    }
  }

  return (
    <div>
      {plays()}
    </div>
  )
}

export default PlayingGame