//change theme
const theme = document.getElementById("theme");
function updateColor(bgColor, fontColor){
    const body = document.querySelector("body");
    body.style.backgroundColor = bgColor;
    body.style.color = fontColor;
}
theme.addEventListener("change", ()=>{
    theme.value === "dark" ? updateColor("black", "white") : updateColor("white", "black");
});
//change theme

// toggle images
const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc == "assets/internetPhoto.jpg"){
        myImage.setAttribute("src", "assets/myPhoto.jpg");
    }
    else{
        myImage.setAttribute("src", "assets/internetPhoto.jpg");
    }
}
// toggle images

//personalized greeting
const myButton = document.querySelector("button");
const myMessage = document.querySelector("#greeting");
function setUserName(){
    const newName = prompt("Enter your name");
    if(!newName){
        setUserName();
    }else{
        localStorage.setItem("name", newName);
        myMessage.textContent = `You're a new user. Welcome, ${newName}`;
    }
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myMessage.textContent = `You're a new user. Welcome, ${storedName}`
}
myButton.onclick = () => {
    setUserName();
}
//personalized greeting

//CREATE NEW paragraph
// document.addEventListener("DOMContentLoaded", ()=>{
//     function createParagraph(){
//         const para = document.createElement("p");
//         para.textcontent = "You clicked the button";

//         document.body.appendChild(para);

//     }
//     const buttons = document.querySelectorAll(".newParaButton");
//     for(const button of buttons){
//         button.addEventListener("click", createParagraph);
//     }
//     // generatepara.addEventListener("click", createParagraph);
// })
//create new paragraph

//

//dropdown changes content displayed
const weather = document.querySelector("#weather");
const weatherImage = document.querySelector("#weatherImage");
function setWeather(){
    const choice = weather.value;
    console.log(choice)

    if(choice === "Rainy"){
        weatherImage.setAttribute("src", "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg");
    }
    else if(choice === "Sunny"){
        weatherImage.setAttribute("src", "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/primary-2-science/weather%20conditions/sunny-weather.jpg");
    }
    else if(choice === "Snowing"){
        weatherImage.setAttribute("src", "https://preview.redd.it/scenic-view-of-empty-road-with-snow-covered-landscape-while-v0-wcik1jwxkonc1.png?width=640&crop=smart&auto=webp&s=181a76a6c0901c0bb88d92edf3625fdd171bddc2");
    }
    else if(choice === "Overcast"){
        weatherImage.setAttribute("src", "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/storm-466677_1920.jpg?w=900");
    }

}
weather.addEventListener("change", setWeather);
//dropdown changes content displayed