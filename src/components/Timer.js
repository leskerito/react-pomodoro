import { useState, React } from "react";

function Timer({
  name,
  length
}) {

  return (
    <div id="timer">
      <div id="timer-label">{name}</div>
      <div id="time-left">
        {length >= 10 ? length + ":00" : "0" + length + ":00"}
      </div>
      <button id="start_stop">
        Play/Pause
      </button>
      <button id="reset">
        Reset
      </button>
    </div>
  );
}

export default Timer;
