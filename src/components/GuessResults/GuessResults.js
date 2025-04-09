import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(guess => (
        <p
          key={guess.id}
          className="guess">
          { guess.guess }
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
