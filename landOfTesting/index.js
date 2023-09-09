
// Write your JavaScript here.
console.log("hello")
let stopId;
let pausedTime;
const $minutes = document.querySelector(".minutes")
const $seconds = document.querySelector(".seconds")
const $millis = document.querySelector(".millis")
// updateTimer is running every second
// 
console.log($millis, $minutes, $seconds)
let startTime;
function startTimer () {
    console.log("we are working hard")
    startTime = Date.now();
    requestAnimationFrame(updateTimer)
}   

function updateTimer () {
    const thingOnTheScreen = Date.now() - startTime;
    $millis.textContent = thingOnTheScreen;
    if (thingOnTheScreen < 30000) stopId = requestAnimationFrame(updateTimer);
}

function stopTimer () {
    cancelAnimationFrame(stopId);
}