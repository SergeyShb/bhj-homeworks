let clicksNumber = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

function cookieClick() {
    clicksNumber.textContent++;
    if(clicksNumber.textContent % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
}; 


cookie.onclick = cookieClick;