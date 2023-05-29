let reveal = Array.from(document.querySelectorAll(".reveal"));


function isInViewport() {

    reveal.forEach(item => {

        const windowHeight = window.innerHeight;
        const coordinateRevealTop = item.getBoundingClientRect().top;
        const coordinateRevealBottom = item.getBoundingClientRect().bottom;
        const revealHeight = item.getBoundingClientRect().height;


        if (coordinateRevealTop < windowHeight && coordinateRevealBottom > 0 - windowHeight && coordinateRevealTop > 0 - revealHeight) {
            item.classList.add("reveal_active");
        } else {
            item.classList.remove("reveal_active");
        }
    })
};


window.addEventListener("scroll", isInViewport);