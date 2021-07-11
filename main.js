// declaring all our variables
var minutes = 00;
var seconds = 00;
var milis = 00;

var appendMilis = document.querySelector("#milis");
var appendSeconds = document.querySelector("#seconds");
var appendMinutes = document.querySelector("#minutes");

var btnStart = document.querySelector("#start");
var btnStop = document.querySelector("#stop");
var btnReset = document.querySelector("#reset");

var Interval ;

// defining funtions of different buttons
btnStart.onclick = function () {
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

btnStop.onclick = function () {
    clearInterval(Interval);
}

btnReset.onclick = function () {
    clearInterval(Interval);
    milis = "00";
    seconds = "00";
    minutes = "00";
    appendMilis.innerHTML = milis;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
}

function startTimer() {
    milis++

    if(milis<=9){
        appendMilis.innerHTML = "0" + milis;
    }

    if(milis > 9){
        appendMilis.innerHTML = milis;
    }

    if(milis > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milis = 0;
        appendMilis.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 60){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
}

window.addEventListener("keydown", (event) => {
    if (event.key ===  'ArrowLeft') {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
}
)

window.addEventListener("keydown", (event) => {
    if (event.key ===  'ArrowDown') {
        clearInterval(Interval);
    }
}
)

window.addEventListener("keydown", (event) => {
    if (event.key ===  'ArrowRight') {
        clearInterval(Interval);
    milis = "00";
    seconds = "00";
    minutes = "00";
    appendMilis.innerHTML = milis;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    }
}
)
