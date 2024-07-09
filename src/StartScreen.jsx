import React from "react";
import "./StartScreen.css";

const StartScreen = () => {
  const delay = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };
  const startGame = async () => {

    
    const start_button = document.getElementById("start_button");
    const timer= document.getElementById("timer");
    const start_screen = document.getElementById("start_screen");

    start_button.style.display = "none";
    timer.style.display = "inline-block";
    for (let i = 3; i > 0; i--) {
      timer.innerText = i;
      await delay(1000);
    }

    start_screen.style.display = "none";
    
  };
  return (
    <>
      <div id="start_screen">
        <div id="start_button">
          <button type="button" id="btn" onClick={startGame}>
            Start Game
          </button>
        </div>
        <div id="timer">3</div>
      </div>
     
    </>
  );
};

export default StartScreen;
