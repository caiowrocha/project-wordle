import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessWordForm from '../GuessWordForm';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    if(tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessWordForm
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
        />
        {gameStatus === 'won' && (
          <WonBanner numOfGuesses={guesses.length} />
        )}
        {gameStatus === 'lost' && (
          <LostBanner
            answer={answer}
          />
        )}
    </>
  )
}

export default Game;
