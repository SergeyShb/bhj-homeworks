let sliderArrowPrev = document.querySelector(".slider__arrow_prev");
let sliderArrowNext = document.querySelector(".slider__arrow_next");
let allSliderItem = Array.from(document.querySelectorAll(".slider__item"));

let slidIndex = allSliderItem.findIndex(item => item.classList.contains("slider__item_active"));



sliderArrowNext.onclick = function() {
    allSliderItem[slidIndex].classList.remove("slider__item_active");
    if (slidIndex === allSliderItem.length - 1) {
        slidIndex = 0; 
    } else {
        slidIndex++;
    }
    allSliderItem[slidIndex].classList.add("slider__item_active");
};


sliderArrowPrev.onclick = function() {
    allSliderItem[slidIndex].classList.remove("slider__item_active");
    if (slidIndex === 0) {
        slidIndex = allSliderItem.length - 1; 
    } else {
        slidIndex--;
    }
    allSliderItem[slidIndex].classList.add("slider__item_active");
};