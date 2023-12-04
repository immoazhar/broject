let taskInput = document.querySelector(".newtask input");
 let addbutton = document.querySelector(".push");
 let tasks = document.querySelector(".tasks");
  

 addbutton.onclick = function () {
    console.log(taskInput.value);
    if(taskInput.value.length == 0) {
        alert("please enter the task");
    }
    else{
        tasks.innerHTML += `
        <li class="task">
        <span onClick = "this.classlist.toggle('completed')">
        ${taskInput.value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </li> 
        `;
        taskInput.value =""
        let currenttask = document.querySelectorAll(".delete")
        for (let i = 0; i< currenttask.length; i++){
            currenttask[i] .onclick = function () {
                this.parentNode.remove()
            }
        }
    }

 }