const timerValue = document.getElementById("timer");

const timer = function() {
    if(timerValue.textContent === "0") {
        alert("Вы победили в конкурсе!");
        clearInterval(timerIntervalID);
    } else {
        timerValue.textContent -= 1;
    } 
}


let timerIntervalID = setInterval(timer, 1000);


