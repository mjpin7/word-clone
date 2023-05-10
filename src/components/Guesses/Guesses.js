import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>{guess}</p>
      ))}
    </div>
  );
}

export default Guesses;
