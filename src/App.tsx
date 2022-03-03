import React, {useState} from 'react';
import Header from './Components/Header';
import Gameboard from './Components/Gameboard';
import PlayingGame from './Components/PlayingGame';
import Rules from './Components/Rules';



function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [playerButton, setPlayerButton] = useState<string>("")

  // const updatePlayerButton = (button: string) => {
  //   setPlayerButton(button)
  // }


  return (
    <div>
        <Header />
        {gameStarted ? <PlayingGame playerButton={playerButton}/> : <Gameboard setGameStarted={setGameStarted} setPlayerButton={setPlayerButton}/>}
        <Rules />
    </div>
  );
}

export default App;

// ### Rules

// If the player wins, they gain 1 point. If the computer wins, the player loses one point.

// - Scissors beats Paper
// - Paper beats Rock
// - Rock beats Lizard
// - Lizard beats Spock
// - Spock beats Scissors
// - Scissors beats Lizard
// - Paper beats Spock
// - Rock beats Scissors
// - Lizard beats Paper
// - Spock beats Rock