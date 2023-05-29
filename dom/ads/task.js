function nextRotatorCase() {
    let rotator = document.querySelector(".rotator");
    let rotatorActive = rotator.querySelector(".rotator__case_active");
    console.log(rotatorActive);
    if (rotatorActive === rotator.lastElementChild) {
        rotatorActive.classList.remove("rotator__case_active");
        rotator.firstElementChild.classList.add("rotator__case_active")
    } else {
        rotatorActive.classList.remove("rotator__case_active");
        rotatorActive.nextElementSibling.classList.add("rotator__case_active") 
    }
};

setInterval(nextRotatorCase, 1000);