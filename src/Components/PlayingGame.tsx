import React, {useState} from 'react'
import { StringDecoder } from 'string_decoder'

interface IplayerButton {
  playerButton: string
}

function PlayingGame({playerButton}: IplayerButton) {

  console.log("playerButton in playing game:", playerButton)

  return (
    <div>

    </div>
  )
}

export default PlayingGame