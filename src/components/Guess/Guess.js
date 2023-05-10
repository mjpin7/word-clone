import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Box({ letter, status }) {
  return <span className={status ? `cell ${status}` : "cell"}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Box
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
