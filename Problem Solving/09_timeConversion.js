let date = new Date();
let str = '07:05:45PM';
console.log(date.toLocaleTimeString());

function timeConversion(s) {
    let time = s.toLowerCase().split(':'),
        hours = parseInt(time[0]),
        amPM = time[2];
    if (amPM.indexOf('am') !== -1 && hours === 12) {
        time[0] = '00';
    }
    if (amPM.indexOf('pm') !== -1 && hours < 12) {
        time[0] = hours + 12;
    }
    return (time.join(':').replace(/(am|pm)/, ''));
}

console.log(timeConversion(str));
