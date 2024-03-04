// Blockers faced: 
// - initialized inputValue outside the function(enterTasks) so it is always read as null and before clicking the submit
// - used identifier with # inside brackets

const btn = document.getElementById("btn");

function enterTasks(){
    const inputValue = document.getElementById("input");
    const emptyInput = document.getElementById("emptyInput");
    if(inputValue.value == ""){
        emptyInput.innerHTML = "Please enter some value";
        inputValue.focus();
    }
    else{
        console.log(inputValue.value);
        emptyInput.innerHTML = "";
    }
}

btn.addEventListener("click", enterTasks);

document.addEventListener('keypress', (e) => {
    if(e.key==="Enter"){
        btn.click();
    }
})
