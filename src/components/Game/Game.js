import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setStatus] = React.useState("running");

  const getBanner = () => {
    switch (gameStatus) {
      case "won":
        return (
          <Banner status={"happy"}>
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{guesses.length}</strong> guesses
            </p>
          </Banner>
        );
      case "lost":
        return (
          <Banner status={"sad"}>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>
            </p>
          </Banner>
        );
      default:
        return undefined;
    }
  };

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess.toUpperCase() === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={handleSubmitGuess}
        status={gameStatus}
      />
      {getBanner()}
    </>
  );
}

export default Game;
