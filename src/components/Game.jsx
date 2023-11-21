import { useEffect, useState } from "react";
import Question from "./Question";

const Game = ({
  data,
  stage,
  setScore,
  gameOver,
  score,
  setGameOver,
  setStage,
}) => {
  const color = data?.[stage]?.color;
  const questions = data?.[stage]?.answers;
  return (
    <section className="game-container">
      <h1 className="title">Color Quiz</h1>
      <p className="hint">color:</p>
      <div
        className="question"
        style={{
          backgroundColor: color,
        }}
      ></div>
      {questions?.map((item, index) => {
        return (
          <Question
            key={index}
            score={score}
            stage={stage}
            setStage={setStage}
            setGameOver={setGameOver}
            item={item}
            index={index}
            setScore={setScore}
            color={color}
            gameOver={gameOver}
          />
        );
      })}
    </section>
  );
};
export default Game;
