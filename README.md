# POMODORO CLOCK

---

## What is this?

This project is a react-made pomodoro clock. If you've ever wondered why you could never focus on your work, this is your answer. You'll forever forsaken the day without your react, web-based pomodoro. This project was made as part of the [fCC Course on front end development](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine).

## What do I need for this?

- Latest version of **NodeJS**
- A real focusing issue
- Internet?

## How do I run this? 

After cloning the repo in the directory of your choice, I recommend launching `npm run build > npm install -g serve` to make sure you install all the necessary dependencies before starting. Then, just enter `serve -s build` to start a local server on a free port. You can then access the project from `http://localhost:[PORT]/`.

### How do I start focusing?

The clock is fairly simple. You can decide the break time (Default: 5 Minutes) by pressing the + or - button. After this, you can pick the length of time you're trying to focus (Default: 25 Minutes). To start the timer, you can click on the *Play/Pause* button and reset it by clicking the *Reset* button. 

Are you so focused that you're not looking at the timer? No worries, it'll play a little sound that I particularly like when the timer is over!

Lastly, thanks to tailwind, you're able to switch between a Light or Dark Mode by clicking the little button on the bottom. I know, it looks super fancy and is *react*ive as f--

## How was it made?

#### Technologies used
* React 18
* TailwindCSS

The base of the app is a `Pomodoro.js` component that houses 2 `Modifier.js` components (the two elements that affect the behavior of the App) as well as the `Timer.js` components whose role is simply to contain the controls as well as display the necessary information. 
All of that is rendered via the `ìndex.js` file.

##### Pomodoro
Four states: 

* `length`, an `Object`, contains the length of each Timers (`session` or `break`).
* `isPlaying`, a `Boolean`, indicates if the timer is running or not.
* `type`, a `String` tracks if the timer running is a `session` or a `break`.

Five handlers:

* `lengthHandler` updates the length of the current `Timer`.
* `playButtonHandler` updates the `Play/Pause` button. 
* `switchTimer` alternates Timers.
* `darkModeHandler` alternates between the App's `Light` or `Dark` mode.
* `resetButtonHandler` resets the current Timer to its default values.

#### Modifier

Two handlers: 

* `decrement` which decreases the current timer's length by 1 Minute.
* `increment` which increases the current timer's length by 1 Minute.

Three props: 

* `name` which will specify which timer to modify.
* `length`, the parent's handler passed here.
* `handleLength` a parent function passed as a prop to change the timer's length.


#### Timer

*Bear with me, this one is a little crazy.*

**FIVE** useRef variables (?????):

* `timeLeft` which stores the remaining time. 
* `intervalRef` which stores the value of the interval object.
* `playing` which tracks if the timer is currently playing or not.
* `started` which tracks if the timer has been started at least once.
* `newName` stores the capitalized name of the timer.

**SIX** functions (what is he doing):

* `resetClock` updates the DOM to display the default time.
* `stop(audio)` stops and resets `audio`.
* `start` starts the timer.
* `playPause` switches between playing and pausing. Or starts the timer.
* `reset` resets the timer, deletes the interval and resets the audio.
* `updateTimer` decrements the time left, updates the DOM, plays a beep sound when the timer reaches zero, and switches the timer type.

**Three** props

* `playButtonHandler` handling the Play/Pause button.
* `resetButtonHandler` handling the reset button.
* `switchTimer` switches the timer when necessary.

*Phew.*

## Known Bugs

Haven't really found a breaking bug. The code is just hanging with glue, sweat and broken dreams. 
