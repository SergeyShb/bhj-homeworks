let editor = document.getElementById("editor");   //элемент textarea

//если ключ textareaData существует в объекте localStorage
if(localStorage.textareaData) {
    editor.value = localStorage.textareaData;   //то присваиваем editor.value значение из localStorage.textareaData  
}

//при каждом событии "отпускание клавиши после нажатия"
editor.addEventListener("keyup", () => {
    
    localStorage.setItem("textareaData", editor.value);   //записываем в localStorage с помощью метода setItem ключ("textareaData") и значение которое было введено в textarea (editor.value) 
  
});

