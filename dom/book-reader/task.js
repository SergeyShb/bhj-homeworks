let book = document.querySelector(".book");  //вся страница 
console.log(book); 

let bookControlItem = Array.from(document.querySelectorAll(".font-size"));  //массив элементов на которые можно нажать
console.log(bookControlItem);



function changingTextSize(item) {

    item.preventDefault();

    
    let active = document.querySelector(".font-size_active");   //активный элемент
    
    active.classList.remove("font-size_active");

    item.target.classList.add("font-size_active");      

    if (item.target.classList.contains("font-size_small")) {
        book.classList.add("book_fs-small")
        book.classList.remove("book_fs-big");
            
    } else if (item.target.classList.contains("font-size_big")) {
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");

    } else { 
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
                
    } 
};



bookControlItem.forEach(item => item.addEventListener("click", changingTextSize));