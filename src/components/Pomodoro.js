import "./Pomodoro.css";
import { useState } from "react";
import Modifier from "./Modifier";
import Timer from "./Timer";

function Pomodoro() {
  const [length, setLength] = useState({
    break: 5,
    session: 25,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [type, setType] = useState("session");

  const lengthHandler = (obj) => {
    let futureLength;
    futureLength = { ...length, [obj.type]: obj.op(length[obj.type]) };
    if (futureLength[obj.type] > 0 && futureLength[obj.type] <= 60)
      setLength(futureLength);
  };

  const playButtonHandler = () => {
    setIsPlaying(true);
  };

  const switchTimer = () => {
    if (type.toLowerCase() === "session") setType("break");
    else setType("session");
    setIsPlaying(true);
  };

  const resetButtonHandler = () => {
    setLength({
      break: 5,
      session: 25,
    });
    setType("session")
    setIsPlaying(false);
  };

  return (
    <div className="Page">
      <Modifier
        name="break"
        length={length.break}
        handleLength={lengthHandler}
      />
      <Modifier
        name="session"
        length={length.session}
        handleLength={lengthHandler}
      />
      <Timer
        name={type}
        length={length[type]}
        playButtonHandler={playButtonHandler}
        isPlaying={isPlaying}
        switchTimer={switchTimer}
        resetButtonHandler={resetButtonHandler}
      />
    </div>
  );
}

export default Pomodoro;
