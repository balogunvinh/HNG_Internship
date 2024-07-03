setInterval(() => {
    const currentTime= new Date().toUTCString().split("");
const utcDateTime = currentTime.slice(17,30).join("");
const utcDateOnly = currentTime.slice(0,16).join("");
document.querySelector(".currentTime").innerHTML = " Current Time in UTC: " + "" + utcDateTime
document.querySelector(".currentDay").innerHTML = " Current Day of the Week: " + utcDateOnly


    
}, 1000);






