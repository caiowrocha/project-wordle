import React from 'react';

function GuessWordForm({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if(tentativeGuess.length !== 5) {
      window.alert('The word must have exactly 5 characters.')
      return
    }
    handleSubmitGuess(tentativeGuess)
    console.log({ guess: tentativeGuess })
    setTentativeGuess('')
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        required
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        disabled={gameStatus !== 'running'}
        onChange={(event) => {
          const guessWord = event.target.value.toUpperCase()
          setTentativeGuess(guessWord)
        }}
        />
    </form>
  );
}

export default GuessWordForm;
