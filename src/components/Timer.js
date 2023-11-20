import React from 'react'

function Timer({name, length, resetButton, switchTimer}) {

    let playing = false;

    const playButton = () => {
        !playing ? passTime : 
        passTime()
    }

    var timer = length*60, minutes, seconds;

    const passTime = () => {
        setInterval(function () {
            minutes = parseInt(timer/60);
            seconds = parseInt(timer%60)

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            console.log(minutes + ':' + seconds);
            
            if (--timer < 0) {
                switchTimer()
                timer = 0
            }
        }, 1000)
    }

    return (
        <div id="timer">
            <div id="timer-label">
                {name}
            </div>
            <div id="time-left">
                {
                    length
                }
            </div>
            <button id="start_stop" onClick={playButton}></button>
            <button id="reset" onClick={resetButton}></button>
        </div>
    )
}

export default Timer