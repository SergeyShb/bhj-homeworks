let allCheckboxesTheme = Array.from(document.querySelectorAll(".interest__check"));


for (let i = 0; i < allCheckboxesTheme.length; i++) {
    allCheckboxesTheme[i].addEventListener("click", checkElement);

    allCheckboxesTheme[i].addEventListener("click", checkParentElement);
     
};


function checkElement (e) {
    
    if (e.target.checked === false) {
        Array.from(e.target.closest(".interest").querySelectorAll(".interest__check")).forEach(item => item.checked = false);
    }

    if (e.target.checked === true) {
        Array.from(e.target.closest(".interest").querySelectorAll(".interest__check")).forEach(item => item.checked = true);
    }
};


function checkParentElement (e) {
    
    if (e.target.checked === true) {
        e.target.closest(".interests_active").previousElementSibling.querySelector(".interest__check").checked = true;
    }
};











