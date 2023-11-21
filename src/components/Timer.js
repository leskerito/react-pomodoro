import {useState, React} from 'react'

function Timer({name, length, resetButtonHandler}) {

    const [timeLeft, setTimeLeft] = useState(length);

    let isPlaying = false;

    const playButton = () => {
        isPlaying = !isPlaying;
        if(isPlaying){
            var timer = setInterval(() => {
                setTimeLeft(prevState => prevState-1);
                if(timeLeft === 0) clearInterval(timer);
            }, 1000)
        } else clearInterval(timer);
    }

    const resetButton = () => {
        resetButtonHandler();
        isPlaying = false;
        setTimeLeft(length);
    }

    return (
        <div id="timer">
            <div id="timer-label">
                {name}
            </div>
            <div id="time-left">
                {         timeLeft       }
            </div>
            <button id="start_stop" onClick={playButton}>Play/Pause</button>
            <button id="reset" onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Timer