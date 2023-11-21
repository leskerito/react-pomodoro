import {useState, React} from 'react'

function Timer({name, length, playButtonHandler, resetButtonHandler, hasStarted, isPlaying}) {

    const [started, setStarted] = useState(hasStarted === undefined ? false : hasStarted);
    const [timer, setTimer] = useState(undefined);

    var timeLeft = length*60;
    var minutes;
    var seconds;

    const start = () => {
        setStarted(true);
        playButtonHandler();
        setTimer(setInterval(function () {
                minutes = parseInt(timeLeft / 60, 10);
                seconds = parseInt(timeLeft % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                document.getElementById('time-left').textContent = minutes + ":" + seconds;
        
                if (--timeLeft < 0) {
                    timeLeft = length;
                    clearInterval(timer);
                }
            }, 1000));
    }



    const playButton = () => {
        playButtonHandler();
        console.log("isPlaying playButton", isPlaying)
        if(!started){
            start();
        } else {
            if(isPlaying){
                console.log("Timer on isPlaying:playButton")
                setTimer(setInterval(function () {
                    console.log("Timer playing playButton\n");
                    minutes = parseInt(timeLeft / 60, 10);
                    seconds = parseInt(timeLeft % 60, 10);
            
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
            
                    document.getElementById('time-left').textContent = minutes + ":" + seconds;
            
                    if (--timeLeft < 0) {
                        timeLeft = length;
                        clearInterval(timer);
                    }
                }, 1000));
            } else clearInterval(timer);
        }
    }

    const resetButton = () => {
        resetButtonHandler();
        clearInterval(timer);
        setStarted(false);
        isPlaying = false;
        timeLeft = length;
    }

    return (
        <div id="timer">
            <div id="timer-label">
                {name}
            </div>
            <div id="time-left">
                { length >= 10 ? length + ":00" : "0" + length + ":00" }
            </div>
            <button id="start_stop" onClick={playButton}>Play/Pause</button>
            <button id="reset" onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Timer