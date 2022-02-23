import React from 'react';
import Header from './Components/Header';
import Gameboard from './Components/Gameboard';


function App() {
  return (
    <div className="poop">
        <Header />
        <Gameboard />
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