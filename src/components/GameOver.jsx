const GameOver = ({ score, setGameOver, setScore, setStage }) => {
  const restartGame = () => {
    setScore(200);
    setStage(1);
    setGameOver(false);
  };
  return (
    <section className="game-over-container">
      <h2>color Quiz</h2>
      <h1>your score is: {score}</h1>
      <h1>time :{100} seconds</h1>
      <div>
        <button onClick={restartGame}>try again</button>
      </div>
    </section>
  );
};
export default GameOver;
