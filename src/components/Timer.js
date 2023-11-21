import React from 'react'

function Timer({name, length, resetButtonHandler, hasStarted}) {

    var timeLeft = length;
    var started = hasStarted;
    var timer;

    let isPlaying = false;

    const start = () => {
        started = true;
        isPlaying = true;
        timer = setInterval(() => {
            if(timeLeft === 0){ 
                console.log("All Done!")
                clearInterval(timer);
            }
            timeLeft -= 1;
            console.log(timeLeft)
        }, 1000);
    }



    const playButton = () => {
        isPlaying = !isPlaying;
        if(!started) start();
        else {
            if(isPlaying){
                timer = setInterval(() => {
                    timeLeft -= 1;
                    console.log(timeLeft)
                    if(timeLeft === 0) clearInterval(timer);
                }, 1000)
            } else clearInterval(timer);
        }
    }

    const resetButton = () => {
        resetButtonHandler();
        isPlaying = false;
        clearInterval(timer);
    }

    return (
        <div id="timer">
            <div id="timer-label">
                {name}
            </div>
            <div id="time-left">
                { timeLeft }
            </div>
            <button id="start_stop" onClick={playButton}>Play/Pause</button>
            <button id="reset" onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Timer