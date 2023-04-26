import React, { createContext, useState } from "react";

interface todoContextObj {
  inputValue: number;
  highScore: number;
  score: number;
  displayMessage: string;
  secretNumber: number;
  showSecretNumber: boolean;
  valueChecker: (value: number) => void;
  reStarter: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
}

export const InputContext = createContext<todoContextObj>({
  inputValue: 0,
  highScore: 0,
  score: 0,
  displayMessage: "",
  secretNumber: 0,
  showSecretNumber: false,
  valueChecker: () => {},
  reStarter: () => {},
  setInputValue: () => {},
});

const secretNumberFunction = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const secretNumberValue = secretNumberFunction();

export const InputContextProvider = (props: any) => {
  const [secretNumber, setSecretNumber] = useState<number>(secretNumberValue);
  const [showSecretNumber, setShowSecretNumber] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [score, setScore] = useState<number>(20);
  const [displayMessage, setDisplayMessage] =
    useState<string>("Start Guessing...");

  const valueChecker = (value: number) => {
    if (value === secretNumber) {
      setDisplayMessage("🎉 Correct Number!");
      setShowSecretNumber(true);
      if (score > highScore) setHighScore(score);
    } else if (value !== secretNumber) {
      if (score > 1) {
        setDisplayMessage(value > secretNumber ? "Too High..." : "Too Low...");
        setScore((prevState) => prevState - 1);
      } else {
        setDisplayMessage("💥 You lost the game!");
        setScore(0);
      }
    }
  };

  const reStarter = () => {
    setDisplayMessage("Start Guessing...");
    setInputValue(0);
    setSecretNumber(secretNumberFunction());
    setScore(20);
    setShowSecretNumber(false);
  };

  const contextValue: todoContextObj = {
    inputValue: inputValue,
    highScore,
    valueChecker,
    reStarter,
    setInputValue,
    score,
    displayMessage,
    secretNumber,
    showSecretNumber,
  };

  return (
    <InputContext.Provider value={contextValue}>
      {props.children}
    </InputContext.Provider>
  );
};
