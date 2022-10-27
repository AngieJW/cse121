let input = document.querySelector("input")
let groceryButton = document.querySelector("#groceries")
let list = document.querySelector(".list")
let dairyList = document.querySelector(".dairy")
let proteinList = document.querySelector(".protein")
let bakingList = document.querySelector(".baking")
let grainsList = document.querySelector(".grains")

let groceries = { 
    dairy:["milk","cheese", "butter", "yogurt"],
    protein: ["beef","chicken","salmon", "haddock", "eggs"],
    baking: ["sugar", "flour", "baking powder"],
    grains: ["pasta", "rice", "bread", "oats", "breakfast cereal"],
}


addDairy();
addProtein();
addBaking();
addGrains();

// Button to add an item to a list 
groceryButton.addEventListener('click', addItem)

function addItem() {
	if (input.value.length === 0) {
        alert("Add at least one item to your shopping list");
    }			
	else {
	    let listItem = document.createElement("li");
	    let listText = document.createElement("span");
	    let purchased = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = input.value;
        listItem.appendChild(purchased);
        purchased.textContent = "Purchased";

        list.appendChild(listItem);

        input.value = "";
        
    purchased.addEventListener("click", function(){
        list.removeChild(listItem);

    })
    }
    input.focus();
	};


  function addDairy() {
    for (let i = 0; i < groceries.dairy.length; i++) {
        let li = document.createElement('li');
        let purchased = document.createElement("button");
        
        li.innerHTML = groceries.dairy[i];
        li.appendChild(purchased);
        purchased.textContent = "Purchased";
        dairyList.appendChild(li);
    
        purchased.addEventListener("click", function(){
            dairyList.removeChild(li);
        })
    
        }
}

function addProtein() {
    for (let i = 0; i < groceries.protein.length; i++) {
        let li = document.createElement('li');
        let purchased = document.createElement("button");
        
        li.innerHTML = groceries.protein[i];
        li.appendChild(purchased);
        purchased.textContent = "Purchased";
        proteinList.appendChild(li);
    
        purchased.addEventListener("click", function(){
            proteinList.removeChild(li);
        })
    
        }
}

function addBaking() {
    for (let i = 0; i < groceries.baking.length; i++) {
        let li = document.createElement('li');
        let purchased = document.createElement("button");
        
        li.innerHTML = groceries.baking[i];
        li.appendChild(purchased);
        purchased.textContent = "Purchased";
        bakingList.appendChild(li);
    
        purchased.addEventListener("click", function(){
            bakingList.removeChild(li);
        })
    
        }
}

function addGrains() {
    for (let i = 0; i < groceries.grains.length; i++) {
        let li = document.createElement('li');
        let purchased = document.createElement("button");
        
        li.innerHTML = groceries.grains[i];
        li.appendChild(purchased);
        purchased.textContent = "Purchased";
        grainsList.appendChild(li);
    
        purchased.addEventListener("click", function(){
            grainsList.removeChild(li);
        })
    
        }
}