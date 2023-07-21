// date.now gives us the amount of millisecones since 1970
// shibaiseki keijashi
// have an onclick listener that calls a function everytime we click on a button
// 

                    // STARTTIMER //
// we store the startTime as teh current Date.now() value (number of milliseconds since 1970)
// we need to find a way to track and display the amount of milliseconds that have started since the startTime
    // in other words, we need a function that checks Date.now() every milliseconds and subtracts our starTime from that

// in order to get the amount of milliseconds on the screen we have do a double call of date.now
// need a fucntion that calls date.now every millisecond, we have to use requestAnimationFrame: a metod that takes a function callback as a parameter which represents the function we want to call every animation frame
// we call requestAnimationFrame with the updateTimer fucntion as a callback
// the udpateTimer function in turn will also call requestAnimationFrame recursively to essentially run every millisecond until we stop it
// requestANimationFrame also returns am id that when passed into cancelAnimationFram stops the reQUestionANimationFrame loop

// STOPTIMER
// we set cancelId as a global variable as we need it access it in both the udpateTimer function and the stopTimer function
// in updaetTimer we set cancelId to equal wat requestAniamtionFrame returns
// in stopTImer we call cancelAnimation Frame with the params cancelId  to stop the time

// we can get the eleemnts on the screen using hte DOM methods and update them to equal the 

// we need to account fof the fact that when we stop and start our timer resets

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