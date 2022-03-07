import React, {useState} from 'react';
import Header from './Components/Header';
import Gameboard from './Components/Gameboard';
import PlayingGame from './Components/PlayingGame';
import Rules from './Components/Rules';



function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [playerButtonPick, setPlayerButtonPick] = useState<string>("")
  const [score, setScore] = useState<number>(0)

  // 1. Add halo effect to winner button
  // 2. Style for bigger screens
  // 3. Store the score state in localStorage?

  return (
    // className="min-h-screen bg-gradient-to-b from-page-bg-start to-page-bg-end"
    <div >
        <Header score={score}/>
        {gameStarted ? <PlayingGame playerButtonPick={playerButtonPick} setScore={setScore} score={score} setGameStarted={setGameStarted}/> : <Gameboard setGameStarted={setGameStarted} setPlayerButtonPick={setPlayerButtonPick}/>}
        <Rules />
    </div>
  );
}

export default App;

// ### Rules

// If the player wins, they gain 1 point. If the computer wins, the player loses one point.
