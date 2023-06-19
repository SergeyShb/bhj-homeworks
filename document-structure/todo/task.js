let taskInput = document.getElementById("task__input");
console.log(taskInput); 

let tasksList = document.getElementById("tasks__list");
console.log(tasksList);


let taskRemoves = [];

taskInput.addEventListener("keydown", event => {

    if (event.key === "Enter" && taskInput.value != "") {

        tasksList.insertAdjacentHTML("beforeend", `
        
            <div class="task">
                <div class="task__title">`
                    + taskInput.value +
                `</div>
                <a href="#" class="task__remove">&times;</a>
            </div>

        `);

        taskInput.value = "";


        let taskRemove = tasksList.lastElementChild.querySelector(".task__remove");
        console.log(taskRemove);

        taskRemoves.push(taskRemove);
        console.log(taskRemoves);


        for (let i = 0; i < taskRemoves.length; i++) {
            taskRemoves[i].addEventListener("click", event => {
        
                //event.preventDefault();
        
                let task = event.target.closest(".task");
                console.log(task);
                task.remove();
                taskRemoves.splice(i, 1);
        
            })
        }
    }


});




let tasksAdd = document.getElementById("tasks__add");
console.log(tasksAdd);

tasksAdd.addEventListener("click", () => {

    if (taskInput.value != "") {

        tasksList.insertAdjacentHTML("beforeend", `
        
            <div class="task">
                <div class="task__title">`
                    + taskInput.value +
                `</div>
                <a href="#" class="task__remove">&times;</a>
            </div>

        `);

        taskInput.value = "";


        let taskRemove = tasksList.lastElementChild.querySelector(".task__remove");
        console.log(taskRemove);

        taskRemoves.push(taskRemove);
        console.log(taskRemoves);


        for (let i = 0; i < taskRemoves.length; i++) {
            taskRemoves[i].addEventListener("click", event => {
        
                //event.preventDefault();
        
                let task = event.target.closest(".task");
                console.log(task);
                task.remove();
                taskRemoves.splice(i, 1);
        
            })
        }
    }



});





