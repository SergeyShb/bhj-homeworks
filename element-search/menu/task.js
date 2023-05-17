let menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLink.length; i++) {
    let parents = menuLink[i].closest(".menu__item");
    let submenu = parents.querySelector(".menu_sub");

    if(submenu != null) {
        menuLink[i].onclick = function() {
            submenu.classList.toggle("menu_active");
            return false;
        }
    }
}