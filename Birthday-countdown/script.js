const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minsCount = document.getElementById('mins');
const secondsCount = document.getElementById('seconds');

const myBirthday = "16 Oct 2022";

function countdown(){

    const newYearDate = new Date (myBirthday).getTime();
    const currentDate = new Date ().getTime();

    const actualDate = (newYearDate - currentDate) / 1000;

    const days = Math.floor(actualDate / 3600 / 24);
    const hours = Math.floor(actualDate / 3600) % 24;
    const mins = Math.floor(actualDate / 60) % 60;
    const seconds = Math.floor(actualDate %  60);

    daysCount.innerHTML = formatTime(days);
    hoursCount.innerHTML = formatTime(hours);
    minsCount.innerHTML = formatTime(mins);
    secondsCount.innerHTML = formatTime(seconds);


}
function formatTime(time){
    return time < 10 ? `0${time}`: time
    }

countdown();

setInterval(countdown, 1000);

