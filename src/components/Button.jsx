const Button = ({ children, setGameOver, setScore, setStage }) => {
  const restartGame = () => {
    setScore(200);
    setStage(1);
    setGameOver(false);
  };
  return (
    <div className="btn-container">
      <button onClick={restartGame} className="btn">
        {children}
      </button>
    </div>
  );
};
export default Button;
