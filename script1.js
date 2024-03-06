const houses = [
    {
        name: "House Targaryen",
        sigil: "https://i.pinimg.com/originals/f3/76/a8/f376a83c2320c0cd31b8292afd6194f9.jpg",
        sons:[
            {
                name:"Aegon",
                sons:[
                    {
                        name: "Maekar1",
                        sons:[
                            {
                                name: "Aemon", 
                                sons:[]
                            },
                            {
                                name: "AegonV",
                                sons:[
                                    {
                                        name: "JaehaerysII",
                                        sons:[
                                            {
                                                name:"AerysII",
                                                sons:[
                                                    {
                                                        name:"Rhaegar",
                                                        sons:[
                                                            {
                                                                name:"Jon Snow",
                                                                sons:[]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name:"Viserys",
                                                        sons:[]
                                                    },
                                                    {
                                                        name:"Daenerys",
                                                        sons:[]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name:"Rhaelle",
                                        sons:[]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        ]
    },
    
    
]

const housesContainer = document.querySelector(".housesContainer");
housesContainer.innerHTML = houses.map((item)=>{
    return `
        <h2 class="house title"><img src="${item.sigil}" alt="" srcset="" width="70px">${item.name}</h2>    
    `
})

function expandHouses(houseName){
    const index = houses.findIndex(item=>item.name==houseName);
    displaySons(houses[index], housesContainer);
}

function displaySons(obj, parentDiv){
    console.log(obj);
    if(obj.sons.length>0){
        obj.sons.forEach((item)=>{
            const newDiv = document.createElement("div");
            newDiv.innerText = item.name;
            parentDiv.append(newDiv);
            console.log(item);
            newDiv.addEventListener("click", (e)=>{
                e.stopPropagation();
                displaySons(item, newDiv);
            })
        })
    }
}

document.querySelectorAll(".title").forEach((item)=>{
    item.addEventListener("click", ()=>{
        expandHouses(item.innerText);
    });
})
