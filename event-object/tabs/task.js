let tab = Array.from(document.querySelectorAll(".tab"));

let tabContent = Array.from(document.querySelectorAll(".tab__content"));


for (let i = 0; i < tab.length; i++) {
    
    tab[i].addEventListener("click", switchingTabs)
    

    // tab[i].onclick = function() {
    //     let indexTabActive = tab.indexOf(document.querySelector(".tab_active"));
    //     tab[indexTabActive].classList.remove("tab_active");
    //     tab[i].classList.add("tab_active");  

    //     let indexTabContentActive = tabContent.indexOf(document.querySelector(".tab__content_active"));
    //     tabContent[indexTabContentActive].classList.remove("tab__content_active");
    //     tabContent[i].classList.add("tab__content_active");  
    // } 
};


function switchingTabs(i) {
    let indexTabActive = tab.indexOf(document.querySelector(".tab_active"));
    tab[indexTabActive].classList.remove("tab_active");
    tab[i].classList.add("tab_active");  

    let indexTabContentActive = tabContent.indexOf(document.querySelector(".tab__content_active"));
    tabContent[indexTabContentActive].classList.remove("tab__content_active");
    tabContent[i].classList.add("tab__content_active");
};