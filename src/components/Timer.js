import React from 'react'

function Timer({name, length, isPlaying, playButtonHandler, resetButton}) {

    let timeLeft = length;
    var timer;

    console.log(isPlaying)

    const playButton = () => {
        if(isPlaying){
            console.log("playing.")
            timer = setInterval(() => {
                timeLeft--;
                if(timeLeft === 0){
                    console.log("Done!")
                    clearInterval(timer)
                } else console.log(`Only $1 left`, timeLeft);
            }, 1000)
        } else clearInterval(timer);
    } 

    return (
        <div id="timer">
            <div id="timer-label">
                {name}
            </div>
            <div id="time-left">
                {
                    timeLeft
                }
            </div>
            <button id="start_stop" onClick={playButton}>Play/Pause</button>
            <button id="reset" onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Timer