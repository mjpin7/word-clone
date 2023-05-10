import React from "react";

function GuessInput({ guesses, setGuesses, status }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuesses(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuess(newGuess);
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={status !== "running"}
      />
    </form>
  );
}

export default GuessInput;
