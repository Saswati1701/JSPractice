//create dropdown
function createDropDown(list, value){
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.textContent = value;
    list.append(option);
}

//creating the months dropdown
const monthsList = document.querySelector("#monthsList");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
const tbody = document.querySelector("tbody");

function setMonthAndYear(){
    tbody.textContent = "";
    const monthChoice = monthsList.value;
    const yearChoice = yearsList.value;
    let noOfDays;

    if(monthChoice && yearChoice){
        if(monthChoice === 'Apr' || monthChoice === 'Jun' || monthChoice === 'Sep' || monthChoice === 'Nov'){
            noOfDays = 30;
        }
        else if(monthChoice=== 'Feb'){
            const year = parseInt(yearChoice);
            noOfDays = year%4 == 0 ? 29 : 28;
        }
        else noOfDays = 31;
        
        displayMonth(noOfDays, firstDayofMonth(monthChoice, yearChoice));
    }

}
monthsList.addEventListener("change", setMonthAndYear);
yearsList.addEventListener("change", setMonthAndYear);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const thead = document.querySelector("thead");
days.forEach((day) =>{
    const th = document.createElement("th");
    th.textContent = day;
    th.setAttribute("class", "cell");

    thead.append(th);
})

function firstDayofMonth(month, year){
    const startDate = new Date("Jan 01 2020");
    const startDay = startDate.getDay();
    let currDate = new Date(`${month} 01 ${year}`);
    let diffInDays = (currDate-startDate)/(1000*60*60*24)
    return (startDay+diffInDays)%7;

}

function displayMonth(noOfDays, initialDay){
    let dayCount = 1;
    noOfDays += initialDay;
    while(dayCount<=noOfDays){
        const tr = document.createElement("tr");            
        for(let i=0; i<7; i++){
            if(dayCount<=noOfDays){
                const td = document.createElement("td");
                td.setAttribute("class", "cell");
                td.textContent = dayCount<=initialDay? "" : dayCount-initialDay;
                tr.append(td);
            }
            dayCount++;
        }
        tbody.append(tr);
    } 
}
 