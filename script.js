var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

const newYear = new Date('Fri May 12 2022 23:59:59 PST')

console.log(newYear)
function remainingTime() {
    const time = new Date()
    const targetDate  = newYear;

    const secs =(targetDate  - time)/1000;
    const daysLeft = Math.floor(secs/3600/24);
    const hoursLeft = Math.floor(secs/3600 % 24);
    const minutesLeft = Math.floor(secs/60 % 60);
    const secondsLeft = Math.floor(secs % 60);

    console.log(hoursLeft)
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft
    seconds.innerHTML = secondsLeft;

    if (secondsLeft < 10 ) {
        seconds.innerHTML = '0'+secondsLeft;
    }
    if (hoursLeft < 10 ) {
        hours.innerHTML = '0'+hoursLeft;
    }
    if (daysLeft < 10 ) {
        days.innerHTML = '0'+daysLeft;
    }
    if (minutesLeft < 10 ) {
        minutes.innerHTML = '0'+minutesLeft;
    }
};

remainingTime();
setInterval(remainingTime, 1000);