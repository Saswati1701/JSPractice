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
    {
        name: "House Lannister",
        sigil: "https://toppng.com/uploads/preview/house-lannister-sigil-clipart-tywin-lannister-a-game-richard-the-lionheart-sigil-11562909715eoq4jdnrg0.png",
        sons:[
            {
                name:"Tywin",
                sons:[
                    {
                        name:"Jaime",
                        sons:[],
                    },
                    {
                        name: "Cersei",
                        sons:[
                            {
                                name: "Joffrey",
                                sons:[]
                            },
                            {   
                                name: "Myrcella",
                                sons:[]
                            },
                            {
                                name: "Tommen",
                                sons:[]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "House Baratheon",
        sons:[
            {
                name: "Ormund",
                sons:[
                    {
                        name: "Steffon",
                        sons:[
                            {
                                name: "Robert",
                                sons:[
                                    {
                                        name: "Joffrey",
                                        sons:[]
                                    },
                                    {   
                                        name: "Myrcella",
                                        sons:[]
                                    },
                                    {
                                        name: "Tommen",
                                        sons:[]
                                    }
                                ]
                            },
                            {
                                name: "Stannis",
                                sons:[
                                    {
                                        name: "Shireen",
                                        sons:[]
                                    }
                                ]
                            },
                            {
                                name: "Renly",
                                sons:[]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    
    
]

function renderFamilyTree(treeData, parentElement) {
    const ul = document.createElement("ul");

    treeData.forEach(person => {
        const li = document.createElement("li");
        const span = document.createElement("span");

        span.textContent = person.name;

        span.addEventListener("click", () => {
            const childList = li.querySelector("ul");

            if (childList) {
                li.removeChild(childList);
            } else if (person.sons.length > 0) {
                renderFamilyTree(person.sons, li);
            }
        });

        li.appendChild(span);

        if (person.sons.length > 0) {
            renderFamilyTree(person.sons, li);
        }

        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
}

const familyTreeContainer = document.getElementById("familyTree");
renderFamilyTree(houses, familyTreeContainer);