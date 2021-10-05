

var daysEl = document.querySelector("#days");
var hoursEl = document.querySelector("#hours");
var minutesEl = document.querySelector("#minutes");
var secondsEl = document.querySelector("#seconds");

var newYears = "1 jan 2022";

function countdown() {
var newYearsDate = new Date(newYears);
var currentDate = new Date();

var totalSec = (newYearsDate - currentDate) / 1000;

var days = Math.floor(totalSec / 3600 / 24);
var hours = Math.floor(totalSec / 3600 % 24);
var minutes = Math.floor(totalSec / 60 ) % 60;
var seconds = Math.floor(totalSec) % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call

countdown();
setInterval(countdown, 1000);