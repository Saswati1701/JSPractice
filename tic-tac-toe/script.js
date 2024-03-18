const button = document.querySelector(".button");
function changeName(){
    const name = prompt("Enter your name");
    button.textContent = name;
}
button.addEventListener("click", changeName);