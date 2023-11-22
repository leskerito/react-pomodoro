import { useRef } from "react";

function Timer({ name, length, isPlaying, playButtonHandler, resetButtonHandler, switchTimer, hasStarted }) {
  const timeLeft = useRef(length * 60);
  const intervalRef = useRef(0);
  const playing = useRef(isPlaying);
  const started = useRef(hasStarted || false);

  console.log(name, isPlaying, length)

  //Starts the timer if it is rendered as an immediate start
  //if (isPlaying) start();

  //Function updating timeLeft and what's showing in the DOM
  function updateTimer(ref) {
    let minutes = String(Math.floor(parseInt(ref.current / 60))).padStart(2, "0");
    let seconds = String(Math.floor(parseInt(ref.current % 60))).padStart(2, "0");
    let format = minutes + ":" + seconds;

    document.getElementById("time-left").textContent = format;

    if(ref.current < 4){
        console.log(name === "Session" ? `Entering break in ${ref.current}` : `Resuming session in ${ref.current}`)
    }

    if (ref.current === 0) {
      switchTimer();
      clearInterval(intervalRef.current);
    }
  }

  function start() {
    playButtonHandler();

    playing.current = true;
    started.current = true;

    timeLeft.current = length*60;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      timeLeft.current = timeLeft.current - 1;
      updateTimer(timeLeft);
    }, 1000);
  }

  function playPause() {
    if (!started.current) {
      start();
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
      timeLeft.current = timeLeft.current - 1;
      updateTimer(timeLeft);
    }, 1000);
  }

  function reset() {
    resetButtonHandler();
    clearInterval(intervalRef.current);
    timeLeft.current = length*60;
    playing.current = false;
    started.current = false;

    document.getElementById("time-left").textContent = length >= 10 ? length + ":00" : "0" + length + ":00";
  }

  return (
    <div id="timer">
      <div id="timer-label">{name}</div>
      <div id="time-left">
        {length >= 10 ? length + ":00" : "0" + length + ":00"}
      </div>
      <button id="start_stop" onClick={playPause}>
        Play/Pause
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
