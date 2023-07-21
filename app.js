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
{/* <span class="timer__minutes">00</span>
      :
      <span class="timer__seconds">00</span>
      :
      <span class="timer__milliseconds">000</span> */}
let cancelId;
const $millis = document.getElementsByClassName("timer__milliseconds")[0];
const $seconds = document.getElementsByClassName("timer__seconds")[0];
const $minutes = document.getElementsByClassName("timer__minutes")[0];
console.log($millis.length, $seconds, $minutes);
let startTime;
function startTimer () {
    startTime = Date.now();
    requestAnimationFrame(updateTimer)
}

function updateTimer () {
    // 
    const timeElapsed = Date.now() - startTime;
    const millis = timeElapsed % 1000;
    const seconds = (Math.floor(timeElapsed / 1000));
    const minutes = (Math.floor(timeElapsed ))
    $millis.innerHTML = millis;
    $seconds.innerHTML = seconds % 60;
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer () {
    console.log("here we are sage mode naruto")
    cancelAnimationFrame(cancelId)
}

function resetTimer () {

}

console.log(Date.now());
let currTime = Date.now();
console.log(`time elapsed is ${Date.now() - currTime}`)