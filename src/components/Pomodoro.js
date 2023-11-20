import './Pomodoro.css';
import { useState } from 'react'
import Modifier from './Modifier';
import Timer from './Timer';

function Pomodoro() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const lengthHandler = (obj) => {
    if(obj.type === 'break') {
      if(breakLength > 0 && breakLength <= 60) setBreakLength(prevLength => obj.op(prevLength)) 
    } else {
      if (sessionLength > 0 && sessionLength < 60)  setSessionLength(prevLength => obj.op(prevLength))
    }
  }
  

  const playButtonHandler = () => {
    console.log("Play")
  }

  const resetHandler = () => {
    setBreakLength(5)
    setSessionLength(5)
  }
  
  return (
    <div className="Page">
      <Modifier name="break" length={breakLength} handleLength={lengthHandler} />
      <Modifier name="session" length={sessionLength} handleLength={lengthHandler} />
      <Timer name="Session" length={sessionLength} resetButton={resetHandler} switchTimer={playButtonHandler}/>
    </div>
  );
}

export default Pomodoro; 
