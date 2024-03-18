//create dropdown
function createDropDown(list, value){
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.textContent = value;
    list.append(option);
}

//creating the months dropdown
const monthsList = document.querySelector("#monthsList");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.forEach((month)=>{
    createDropDown(monthsList, month);
})

// creating the years dropdown
const yearsList = document.querySelector("#yearsList");
const yearStart = 2020;
const yearEnd = 2030;
for(let i=yearStart; i<=yearEnd; i++){
    createDropDown(yearsList, i);
}

function setMonthAndYear(){
    console.log(monthsList.value);
    console.log(yearsList.value);
}
monthsList.addEventListener("change", setMonthAndYear);
yearsList.addEventListener("change", setMonthAndYear);

let days = 1;
const tbody = document.querySelector("tbody");
while(days<=31){
    const tr = document.createElement("tr");
    for(let i=0; i<7; i++){
        if(days<=31){
            const td = document.createElement("td");
            td.setAttribute("class", "cell");
            td.textContent = days;
            tr.append(td);
        }
        days++;
    }
    tbody.append(tr);
}

