import React from 'react';

function GuessWordForm() {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ guess })
    setGuess('')
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
        value={guess}
        onChange={(event) => {
          const guessWord = event.target.value.toUpperCase()
          setGuess(guessWord)
        }}
        />
    </form>
  );
}

export default GuessWordForm;
