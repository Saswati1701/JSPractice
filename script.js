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
            status: "incomplete",
        }
        allTasks.push(newTask);
        displayTasks();
    }
    document.querySelectorAll('input[name="taskCheckbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', toggleTaskStatus);
    });

}
function displayTasks(){
    const completeTasks = allTasks.filter(task=>task.status==="complete");
    const incompleteTasks = allTasks.filter(task=>task.status==="incomplete");
    const completeTasksList = document.querySelector(".completeTasksList");
    const incompleteTasksList = document.querySelector(".incompleteTasksList");

    completeTasksList.innerHTML = completeTasks.map((task)=>{
        return `
            <div>
                <p><input type="checkbox" name="taskCheckbox" id="${task.id}" checked>${task.description}
            </div>
        `
    }).join('')
    incompleteTasksList.innerHTML = incompleteTasks.map((task)=>{
        return `
            <div>
                <p><input type="checkbox" name="taskCheckbox" id="${task.id}">${task.description}</p>
            </div>
        `
    }).join('')

    
}
function toggleTaskStatus(){
    const taskId = this.id;
    const index = allTasks.findIndex(task=> task.id == taskId);
    const newStatus = this.checked? "complete" : "incomplete";
    allTasks[index].status = newStatus;
    console.log(allTasks[index]);
    displayTasks();
    document.querySelectorAll('input[name="taskCheckbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', toggleTaskStatus);
    });
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
