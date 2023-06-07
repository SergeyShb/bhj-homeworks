let chatWidget = document.querySelector(".chat-widget");

chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

let chatWidgetInput = document.getElementById("chat-widget__input");

const userMessage = document.getElementById("chat-widget__messages");   


let botMessages = [
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "Кто тут?",
    "К сожалению все операторв сейчас заняты, не пишите нам больше",
    "Добрый день! До свидния!",
    "Всего доброго!"
];

function settingUpBotMessages(botMessages) {
    let randomIndex = Math.floor(Math.random() * botMessages.length)
    return botMessages[randomIndex];
}


chatWidgetInput.addEventListener("keydown", (event) => {

    let time = new Date();   //получение даты
    let timeStr = time.toLocaleTimeString();


    if (event.key === "Enter" && chatWidgetInput.value != "") {
        userMessage.innerHTML += `      
        <div class="message message_client">
            <div class="message__time">` + timeStr + `</div>
            <div class="message__text">`
               + chatWidgetInput.value +
            `</div>
        </div>
    `; 

        chatWidgetInput.value = "";

        userMessage.innerHTML += `      
        <div class="message">
            <div class="message__time">` + timeStr + `</div>
            <div class="message__text">`
               + settingUpBotMessages(botMessages) +
            `</div>
        </div>
    `;
    }   
});