"use strict";
let timerId = 0;
let timeElapsed = 3590;
function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
}
function setUpTimer() {
    const timerText = document.querySelector('.time-elapsed');
    const startPauseButton = document.querySelector('.start-pause');
    const resetButton = document.querySelector('.reset');
    startPauseButton === null || startPauseButton === void 0 ? void 0 : startPauseButton.addEventListener('click', () => {
        if (timerId > 0) {
            clearInterval(timerId);
            timerId = 0;
        }
        else {
            timerId = setInterval(() => {
                timeElapsed++;
                if (timerText) {
                    timerText.textContent = formatTime(timeElapsed);
                }
            }, 1000);
        }
    });
    resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', () => {
        // TODO: make the reset behavior
    });
}
window.onload = setUpTimer;
// TODO: implement reset button
// TODO: format the number with two digits
// TODO: use the system clock instead of setInterval
