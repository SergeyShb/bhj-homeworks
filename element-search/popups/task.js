let popup = document.getElementById("modal_main");
popup.classList.add("modal_active");

let closePopup = document.getElementsByClassName("modal__close");

for(let i = 0; i < closePopup.length; i++) {
    closePopup[i].onclick = function() {
        popup.classList.remove("modal_active"); 
        modalSuccess.classList.remove("modal_active");
    }
};

let showSuccess = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");

for(let i = 0; i < showSuccess.length; i++) {
    showSuccess[i].onclick = function() {
        modalSuccess.classList.add("modal_active");
    }
};