const allTasks = [
    {
        id: 1709553882955,
        task: "DSA",
        description: "Complete 5 problems of Graph",
        status: "incomplete"
    },
    {
        id: 1709553882957,
        task: "JavaScript",
        description: "Complete building to-do list",
        status: "complete" 
    },
    {
        id: 1709553882959,
        task: "Metallurgy",
        description: "Revise class notes",
        status: "complete" 
    },
    {
        id: 1709553882961,
        task: "Assignments",
        description: "Complete Lab journal",
        status: "incomplete" 
    }
]
const completeTasks = [
    {
        id: 1709553882957,
        task: "JavaScript",
        description: "Complete building to-do list",
    },
    {
        id: 1709553882959,
        task: "Metallurgy",
        description: "Revise class notes",
    }
]
const incompleteTasks = [
    {
        id: 1709553882955,
        task: "DSA",
        description: "Complete 5 problems of Graph",
    },
    {
        id: 1709553882961,
        task: "Assignments",
        description: "Complete Lab journal",
    }
]
const btn = document.querySelector("#btn");

function addTasks(){
    const description = document.querySelector("#description");
    const emptyInput = document.querySelector("#emptyInput");
    if(description.value==""){
        emptyInput.innerHTML = "Task field cannot be empty";
        description.focus();
    }
    else{
        emptyInput.innerHTML = "";
        const newTask = {
            id: Date.now(),
            title: "untitled",
            description: description.value,
        }
        incompleteTasks.push(newTask);
        displayTasks();
    }
    document.querySelectorAll('input[name="taskCheckbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', toggleTaskStatus);
    });

}
function displayTasks(){
    const completeTasksList = document.querySelector(".completeTasksList");
    const incompleteTasksList = document.querySelector(".incompleteTasksList");

    completeTasksList.innerHTML = completeTasks.map((task)=>{
        return `
            <div>
                <p>
                    <input type="checkbox" name="taskCheckbox" id="${task.id}" checked>
                    ${task.description}
                    <span class="editTasks"><img src="assets/editing.png" alt="" srcset="" height="13px"></span>
                </p>
            </div>
        `
    }).join('')
    incompleteTasksList.innerHTML = incompleteTasks.map((task)=>{
        return `
            <div>
                <p>
                    <input type="checkbox" name="taskCheckbox" id="${task.id}" >
                    ${task.description}
                    <span class="editTasks"><img src="assets/editing.png" alt="" srcset="" height="13px"></span>
                </p>
            </div>
        `
    }).join('')

    
}
function toggleTaskStatus(){
    const taskId = this.id;
    console.log(taskId);
    if(this.checked){
        let index = incompleteTasks.findIndex(task=> task.id == taskId);
        let tempTask = incompleteTasks[index];
        incompleteTasks.splice(index, 1);
        completeTasks.push(tempTask);
    }
    else{
        let index = completeTasks.findIndex(task=> task.id == taskId);
        let tempTask = completeTasks[index];
        completeTasks.splice(index, 1);
        incompleteTasks.push(tempTask);
    }
    displayTasks();
    document.querySelectorAll('input[name="taskCheckbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', toggleTaskStatus);
    });

}

function editTasks(){
    const editTasks = document.querySelector(".editTasks");
}
displayTasks();
btn.addEventListener("click", addTasks);
document.querySelectorAll('input[name="taskCheckbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', toggleTaskStatus);
});
document.addEventListener('keypress', (e) => {
    if(e.key==="Enter"){
        btn.click();
    }
})
