// Blockers faced: 
// - initialized inputValue outside the function(enterTasks) so it is always read as null and before clicking the submit
// - used identifier with # inside brackets

const btn = document.getElementById("btn");
const toDoList = [];


function enterTasks(){
    const inputValue = document.getElementById("input");
    const emptyInput = document.getElementById("emptyInput");
    if(inputValue.value == ""){
        emptyInput.innerHTML = "Please enter some value";
        inputValue.focus();
    }
    else{
        toDoList.push(inputValue.value);
        emptyInput.innerHTML = "";
    }
    document.querySelector(".list").innerHTML = toDoList.map((e)=>{
        return `<p>${e}</p>`;
    }).join(''); //if the join is removed the li elements are joined by a comma
}


btn.addEventListener("click", enterTasks);

document.addEventListener('keypress', (e) => {
    if(e.key==="Enter"){
        btn.click();
    }
})
