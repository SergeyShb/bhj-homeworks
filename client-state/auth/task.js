let welcome = document.getElementById("welcome");   //блок приветствия
let form = document.getElementById("signin");   //блок формы авторизации

//если ключ userId существует в объекте localStorage
if (localStorage.userId) {
    form.classList.remove("signin_active");   //убираем форму авторизации
    welcome.classList.add("welcome_active");   //показываем приветствие

    let userId = document.getElementById("user_id");   //элемент в который будем добавлять текст id из localStorage
    userId.innerText = localStorage.userId;   //добавляем текст user_id из localStorage в приветствие 
};


let signinBtn = document.getElementById("signin__btn") 


signinBtn.addEventListener("click", (event) => {

    event.preventDefault();

    let signinForm = document.getElementById("signin__form");   //получили форму
   
    //создаем и отправляем форму
    let formData = new FormData(signinForm);   //создаем объект формы
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.responseType = "json";   //указать ожидаемый тип ответа "json"
    xhr.send(formData);


    //событие onload происходит когда когда получен какой либо ответ 
    xhr.onload = function () {
        
        //если в ответе от серевера, в объекте по ключу success будет значение true   
        if (xhr.response.success === true) {

            form.classList.remove("signin_active");   //убираем форму авторизации
            welcome.classList.add("welcome_active");   //показываем приветствие

            let userId = document.getElementById("user_id");   //элемент в который будем добавлять текст id из полученного ответа 
            userId.innerText = xhr.response.user_id;   //добавляем текст user_id в приветствии

            localStorage.setItem("userId", xhr.response.user_id);            
        };

        //если в ответе от серевера, в объекте по ключу success будет значение false  
        if (xhr.response.success === false) {
            //выводим сообщение "невырные логин/пароль"
            alert("неверные логин/пароль");
        };
        
    };
 
});

