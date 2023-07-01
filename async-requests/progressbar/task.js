let progress = document.getElementById("progress");  //нашли прогресс бар

let send = document.getElementById("send");   //кнопка "отправить"  



send.addEventListener("click", (event) => {

    event.preventDefault(); 

    let fileForm = document.getElementById("form");   //получили форму
   
    let formData = new FormData(fileForm);   //создаем объект формы
    
    let xhr = new XMLHttpRequest();
    
    //upload - стадия отправки(генерирует события в процессе отправки)
    //onprogress - событие которое выполняет отслеживание состояния загрузки файла
    xhr.upload.onprogress = function(event) {

       //progress.value - значние прогресс бара;   loaded - сколько байт переслано;   total - общее количество байт для пересылки;

        progress.value = event.loaded / event.total;
    
    };
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    
    xhr.send(formData);

});


let inputWrapperButton = document.querySelector(".input__wrapper-button");   //кнопка "Выберите файл"

//обнуляем progress.value при выборе нового файла
inputWrapperButton.addEventListener("click", () => {
    progress.value = 0.0;   //установили значние прогресс бара "0"
});





