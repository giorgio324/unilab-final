const GameOver = ({ score }) => {
  return (
    <section className="game-over-container">
      <h2>color Quiz</h2>
      <h1>your score is: {score}</h1>
      <h1>time :{100} seconds</h1>
    </section>
  );
};
export default GameOver;
