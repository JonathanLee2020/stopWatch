let cancelId;
const $millis = document.getElementsByClassName("timer__milliseconds")[0];
const $seconds = document.getElementsByClassName("timer__seconds")[0];
const $minutes = document.getElementsByClassName("timer__minutes")[0];
console.log($millis.length, $seconds, $minutes);
let startTime;
let pausedTime = 0; 
let currentlyRunning = false;
let alreadyStopped = true;
let alreadyReset = true;
function startTimer () {
    alreadyReset = false;
    if (currentlyRunning == true) {
        alert("timer already running, click reset to restart timer");
        return;
    }
    startTime = Date.now();
    alreadyStopped = false;
    currentlyRunning = true;
    requestAnimationFrame(updateTimer)
}

function updateTimer () {
    // 
    // timeElapsed = pausedTime + Date.now() - startTime;
    timeElapsed = Date.now() - startTime + pausedTime;
    let millis = timeElapsed % 1000;
    millis = millis + "";
    const millisText = millis.padStart(3, 0);

    let seconds = Math.floor(timeElapsed / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let secondsText = seconds + "";
    secondsText = secondsText.padStart(2, 0);

    minutes = minutes + "";
    minutesText = minutes.padStart(2, 0);

    $millis.innerHTML = millisText;
    $seconds.innerHTML = secondsText;
    $minutes.innerHTML = minutesText;
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer () {
    // pausedTime is the previosu paused time plus the amount of time since hte last pause
    if (alreadyStopped == true) {
        alert("timer has already been stopped genius");
        return;
    }
    alreadyStopped = true;
    pausedTime = pausedTime + Date.now() - startTime;
    if (pausedTime == 0) {
        alert("can't stop a timer that hasn't been started yet sir");
        return;
    }
    currentlyRunning = false;
    cancelAnimationFrame(cancelId)
}

function resetTimer () {
    if (alreadyReset) {
        console.log("repelled")
        return;
    }
    cancelAnimationFrame(cancelId);
    alreadyReset = true;
    $millis.innerHTML = "000";
    $seconds.innerHTML = "00";
    $minutes.innerHTML = "00";
    startTime = 0;
    pausedTime = 0;
    currentlyRunning = false;
    alreadyStopped = true;
}



console.log(Date.now());
let currTime = Date.now();
console.log(`time elapsed is ${Date.now() - currTime}`)