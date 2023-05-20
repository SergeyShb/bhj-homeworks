let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");


function openAndCloseDropdownList() {
    dropdownList.classList.toggle("dropdown__list_active");
}

dropdownValue.addEventListener("click",  openAndCloseDropdownList);


// dropdownValue.onclick = function() {
//     dropdownList.classList.toggle("dropdown__list_active");
// }


let dropdownLinkList = Array.from(document.querySelectorAll(".dropdown__link"));


for (let i = 0; i < dropdownLinkList.length; i++) {

    let parent = dropdownLinkList[i].closest(".dropdown__item");

    parent.onclick = function() {
        let text = dropdownLinkList[i].textContent;
        dropdownValue.textContent = text;
        dropdownList.classList.remove("dropdown__list_active");
        return false;
    }


    // function clickingOnListItem() {
    //     let text = dropdownLinkList[i].textContent;
    //     dropdownValue.textContent = text;
    //     dropdownList.classList.remove("dropdown__list_active");
    //     //return false;
    // }

    // parent.addEventListener("click", clickingOnListItem);

}