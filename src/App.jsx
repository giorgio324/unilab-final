import { useEffect, useState } from "react";
import Score from "./components/Score";
import "./index.css";
import Game from "./components/Game";
const App = () => {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(200);
  const [stage, setStage] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://random-colors-lovat.vercel.app/");
      const result = await response.json();
      setData(result);
    };
    getData();
  }, []);
  return (
    <section className="container">
      <Score>{score}</Score>
      {gameOver ? (
        <h1>game over</h1>
      ) : (
        <Game
          data={data}
          setGameOver={setGameOver}
          stage={stage}
          setStage={setStage}
          setScore={setScore}
          gameOver={gameOver}
          score={score}
        />
      )}
      <Score level>{stage}/10</Score>
    </section>
  );
};
export default App;
