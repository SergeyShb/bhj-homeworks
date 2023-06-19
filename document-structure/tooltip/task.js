let hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));   //получили все ссылки
console.log(hasTooltip);


let tooltip = document.querySelector(".tooltip"); //наша подсказка
console.log(tooltip);

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener("click", e => {
        e.preventDefault();


        console.log(Math.floor(parseInt(tooltip.style.top)));
        console.log(Math.floor(e.target.getBoundingClientRect().top) + 20);


        if( tooltip.classList.contains("tooltip_active") &&  Math.floor(parseInt(tooltip.style.left))  ===  Math.floor(e.target.getBoundingClientRect().left) && Math.floor(parseInt(tooltip.style.top))  ===  Math.floor(e.target.getBoundingClientRect().top + 20) ) {
            tooltip.classList.remove("tooltip_active")
        } else {
            tooltip.classList.add("tooltip_active"); //делаем подсказку видимой
        }
        

        let title = e.target.getAttribute("title");   //получаем текст подсказки из атрибута title
        console.log(title);

        tooltip.innerText = title;   //добавляем текст в подсказку 
         
    

        let left = e.target.getBoundingClientRect().left;   //координата отступа от левого края
        let top = e.target.getBoundingClientRect().top;    //координата отступа от верхнего края
        top = top + 20;

        console.log(left, top);

    
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;

    }) 
   
}

window.addEventListener("scroll", () => {
    if(tooltip.classList.contains("tooltip_active")) {
        tooltip.classList.remove("tooltip_active")
    }
});  

window.addEventListener("click", (e) => {
    if( tooltip.classList.contains("tooltip_active") && Math.floor(parseInt(tooltip.style.top))  !=  Math.floor(e.target.getBoundingClientRect().top + 20) ) {
        tooltip.classList.remove("tooltip_active")
    }
}); 