let items = document.getElementById("items");  

let loader = document.getElementById("loader");   //картинка загрузки

//создаём запрос
let xhr = new XMLHttpRequest();   //создаем экземпляр объекта XMLHttpRequest
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");   //создаем запрос
xhr.send();   //отправляем запрос



//событие onreadystatechange происходит каждый раз, когда свойство readyState (состояние готовности) изменяется 
xhr.onreadystatechange = function() {
    //readyState содержит состояние запроса от 0 до 4
    // 4 - запрос завершен, и ответ готов 
    if(xhr.readyState === 4) {
        loader.classList.remove("loader_active");

        let exchangeRate = JSON.parse(xhr.responseText);  //responseText текст ответа сервера
        console.log(exchangeRate);


        for (let i in exchangeRate.response.Valute) {
            items.insertAdjacentHTML("beforeEnd", `
                
                <div class="item">
                
                    <div class="item__code">` 
                        + exchangeRate.response.Valute[i].CharCode +
                    `</div>
                    <div class="item__value">`
                        + exchangeRate.response.Valute[i].Value +
                    `</div>
                    <div class="item__currency">
                        руб.
                    </div>
    
                </div>
        
            `);  
        };

    };

};