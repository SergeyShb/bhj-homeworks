//если куки "subscribeModal=active" найдено
if (document.cookie.split("; ").includes("subscribeModal=active") === true) {
    //то всплывающее окно не появится
    console.log("subscribeModal=active найдено");
} else {
    //во всех других случаях
    let subscribeModal = document.getElementById("subscribe-modal");   //всплывающее окно
    subscribeModal.classList.add("modal_active");   //показываем всплывающее окно 

    let modalClose = document.querySelector(".modal__close");  //знак закрытия окна
    
    //при клике на знак закрытия окна
    modalClose.addEventListener("click", () => {
        subscribeModal.classList.remove("modal_active");   //закрываем всплывающее окно 
        document.cookie = "subscribeModal=active";   //записываем новую куки
    });
};