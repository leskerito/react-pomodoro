import './Pomodoro.css';
import { useState } from 'react'
import Modifier from './Modifier';
import Timer from './Timer';

function Pomodoro() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const lengthHandler = (obj) => {
    if(isPlaying) return;
    if(obj.type === 'break') {
      let futureBreakLength = obj.op(breakLength)
      if(futureBreakLength > 0 && futureBreakLength <= 60) setBreakLength(futureBreakLength) 
    } else {
      let futureSessionLength = obj.op(sessionLength)
      if (futureSessionLength > 0 && futureSessionLength <= 60)  setSessionLength(futureSessionLength)
    }
  }

  const playButtonHandler = () => {
    setIsPlaying(prevState => !prevState);
    console.log(isPlaying, "buttonHandler\n")
  }
  
  const resetButtonHandler = () => {
    setBreakLength(5);
    setSessionLength(25);
    setIsPlaying(false);
  }
  
  return (
    <div className="Page">
      <Modifier name="break" length={breakLength} handleLength={lengthHandler} />
      <Modifier name="session" length={sessionLength} handleLength={lengthHandler} />
      <Timer name="Session" length={sessionLength} playButtonHandler={playButtonHandler} isPlaying={isPlaying} resetButtonHandler={resetButtonHandler} />
    </div>
  );
}

export default Pomodoro; 
