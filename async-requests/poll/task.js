let pollTitle = document.getElementById("poll__title");

let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();


xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(xhr.responseText);

        let surveyObject = JSON.parse(xhr.responseText);
        console.log(surveyObject);

        pollTitle.innerText = surveyObject.data.title;   //добавляем текст заголовка опроса

        //добавляем кнопки с ответами из объекта surveyObject
        for (let i in surveyObject.data.answers) {
            pollAnswers.insertAdjacentHTML("beforeEnd", `

                <button class="poll__answer">`
                    + surveyObject.data.answers[i] +
                `</button>
               
            `);  
        };


        let answerBtn = Array.from(document.querySelectorAll(".poll__answer"));   //получаем массив из всех созданных кнопок
        console.log(answerBtn);

        //назначаем обработчики события click для всех созданных кнопок 
        for (let i = 0; i < answerBtn.length; i++) {
            answerBtn[i].addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!")
            });
        };
    
    };
};

