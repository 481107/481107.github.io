const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning" : hours < 18 ? "Afternoon" : "Evening"}`;

window.addEventListener('load', (event) => {
    let today = new Date();
    let date = today.toLocaleDateString("en-CA", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    let time = today.toLocaleTimeString("en-CA", { hour12: false, hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayDate(date);
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    let date = today.toLocaleDateString("en-CA", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    var time = today.toLocaleTimeString("en-CA", { hour12: false, hour: '2-digit', minute: '2-digit' });
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}

function displayDate(date) {
    document.getElementById("date").innerHTML = date;
}
