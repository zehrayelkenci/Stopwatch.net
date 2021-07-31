let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;

let displayMs = 0;
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

let interval= null;
// define var to hold stopwatch status
let status = "stopped";

// stopwatch function ( logic to determine when to increment next value, etc) 
export const stopWatch = () => {
    ms+=2;
    // logic to determine when to increment next value
    if (ms / 1000 == 1) {
        ms = 0;
        sec++;
        if (sec / 60 == 1) {
            sec = 0;
            min++;
            if (min / 60 == 1) {
                min = 0;
                hrs++;
            }
        }
    }
    // if ms,sec,min,hrs is one digit, add a leading 0 to the value
    if (ms < 10) {
        displayMs = "00" + ms.toString();
    } else if(ms<100) {
        displayMs = "0" + ms.toString();
    }else if(ms) {
        displayMs = ms;
    }
    if(sec<10){
        displaySec = "0" + sec.toString();
    }else{
        displaySec = sec;
    }
    if(min<10){
        displayMin = "0" + min.toString();
    }else{
        displayMin = min;
    }
    if(hrs<10){
        displayHours = "0" + hrs.toString();
    }else{
        displayHours = hrs;
    }

    document.getElementById('miliseconds').innerHTML = displayMs;
    document.getElementById('seconds').innerHTML = displaySec;
    document.getElementById('minutes').innerHTML = displayMin;
    document.getElementById('hours').innerHTML = displayHours;
}



export const startStop = ()=> {
if(status == "stopped"){
    interval =window.setInterval(stopWatch, 0.0001);
    document.getElementById("btn-toggle").innerHTML= "Start";
    status = "started";
}else{
window.clearInterval(interval);
document.getElementById("btn-toggle").innerHTML = "Stop";
status = "stopped";
}
};

// function to reset the stopwatch
 export const reset = ()=> {

window.clearInterval(interval);

ms=0;
sec=0;
min=0;
hrs=0;

document.getElementById("miliseconds").innerHTML = ("000");
document.getElementById("seconds").innerHTML = ("00");
document.getElementById("minutes").innerHTML = ("00");
document.getElementById("hours").innerHTML = ("00");

document.getElementById("btn-toggle").innerHTML = "Start";

 }
