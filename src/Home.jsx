import React from "react";
import "./Home.css";
import Board from "./Board";
import StartScreen from "./StartScreen";

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="block1">
          {" "}
          <Board />
        </div>
        <div id="block2">
          <div id="user1">Player1</div>
          <div id="user2">Player2</div>
        </div>
      </div>
      <StartScreen />
    </>
  );
};

export default Home;
