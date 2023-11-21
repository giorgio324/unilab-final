const Question = ({
  item,
  index,
  color,
  score,
  setScore,
  setGameOver,
  setStage,
  stage,
}) => {
  const getLetter = (index) => {
    if (index === 0) {
      return "a";
    }
    if (index === 1) {
      return "b";
    }
    if (index === 2) {
      return "c";
    }
  };
  console.log(score);
  const handleClick = () => {
    if (item === color) {
      console.log("corr");
      setStage((prevState) => prevState + 1);
      return;
    }
    if (score === 20) {
      setScore((prevState) => prevState - 20);
      setGameOver(true);
      return;
    }
    if (stage === 9) {
      setGameOver(true);
      return;
    }
    setScore((prevState) => prevState - 20);
  };
  return (
    <div className="question-card" onClick={handleClick}>
      <div className="question-letter">{getLetter(index)}</div>
      <p className="answer">{item}</p>
    </div>
  );
};
export default Question;
