import React, { useContext, useEffect } from "react";
import { Button, Input } from "../components/shared";
import { InputContext } from "../store/input-context";

const GuessGame: React.FC = (props) => {
  const {
    reStarter,
    valueChecker,
    inputValue,
    highScore,
    score,
    setInputValue,
    displayMessage,
    secretNumber,
    showSecretNumber,
  } = useContext(InputContext);

  useEffect(() => {
    if (showSecretNumber) {
      document.body.style.backgroundColor = "#60b347";
    } else {
      document.body.style.backgroundColor = "#222";
    }
  }, [showSecretNumber]);

  return (
    <>
      <header>
        <h1>Hey, Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <Button className="btn again" title={"Again"} onClick={reStarter} />
        <div
          className="number"
          style={{ width: showSecretNumber ? "30rem" : "15rem" }}>
          {!showSecretNumber ? "?" : secretNumber}
        </div>
      </header>
      <main>
        <section className="left">
          <Input
            type="text"
            className={`guess `}
            value={inputValue || 0}
            onChange={(e) => setInputValue(+e.target.value)}
          />
          <Button
            className="btn check"
            title={"check"}
            onClick={() => valueChecker(inputValue)}
          />
        </section>
        <section className="right">
          <p className="message">{displayMessage}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highScore}</span>
          </p>
        </section>
      </main>
    </>
  );
};

export default GuessGame;
