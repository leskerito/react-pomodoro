import { useRef } from "react";

function Timer({
  name,
  length,
  isPlaying,
  playButtonHandler,
  resetButtonHandler,
  switchTimer,
}) {
  const timeLeft = useRef(length * 60);
  const intervalRef = useRef(0);
  const playing = useRef(isPlaying);
  const started = useRef(false);
  const newName = name.charAt(0).toUpperCase() + name.slice(1);

  //Function allowing the Clock to reset its display whenever it needs to
  const resetClock = () => { document.getElementById("time-left").textContent = length > 10 ? length + ":00" : "0" + length + ":00"; }

  //Starts the timer if it is rendered as an immediate start
  if (isPlaying) start();

  //Function updating timeLeft and what's showing in the DOM
  function updateTimer(ref) {
    ref.current -= 1;

    let minutes = String(Math.floor(parseInt(ref.current / 60))).padStart(
      2,
      "0"
    );
    let seconds = String(Math.floor(parseInt(ref.current % 60))).padStart(
      2,
      "0"
    );
    let format = minutes + ":" + seconds;

    if(ref.current === 0){
      document.getElementById('beep').play();
    }

    if(ref.current < 0){
      clearInterval(intervalRef);
      switchTimer();
      return;
    }

    document.getElementById("time-left").innerHTML = format
    if (ref.current < 4) {
      console.log(
        name === "session"
          ? `Entering break in ${ref.current}`
          : `Resuming session in ${ref.current}`
      );
    }
  }

  //Function starting the timer for the first time 
  function start() {
    playing.current = true;
    started.current = true;

    resetClock();
    timeLeft.current = length * 60;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateTimer(timeLeft);
    }, 1000);
  }

  function playPause() {
    if (!started.current) {
      playButtonHandler();
      playing.current = true;
      started.current = true;
  
      resetClock();
      timeLeft.current = length * 60;
      return;
    }

    if (playing.current) {
      playing.current = false;
      clearInterval(intervalRef.current);
      return;
    }

    playing.current = true;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateTimer(timeLeft);
    }, 1000);
  }

  function reset() {
    resetButtonHandler();
    clearInterval(intervalRef.current);
    timeLeft.current = length * 60;
    playing.current = false;
    started.current = false;
    resetClock();
  }

  return (
    <div id="timer">
      <div id="timer-label">{newName}</div>
      <div id="time-left">
        {length >= 10 ? length + ":00" : "0" + length + ":00"}
      </div>
      <button id="start_stop" onClick={playPause}>
        Play/Pause
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
      <audio id="beep" style={{'display': 'none'}} />
    </div>
  );
}

export default Timer;
