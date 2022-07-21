setInterval(setCurrentTime, 1000);
function setCurrentTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    uhr = "Uhr";

    hour = hours.toString();
    minute = minutes.toString();
    second = seconds.toString();

    let currentTimeString = hour + ":" + minute + ":" + second + " " + uhr;

    document.getElementById("clock").innerHTML = currentTimeString;
}