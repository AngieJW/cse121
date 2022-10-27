const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

button.addEventListener('click', function() {
	if (input.value.length === 0) {
        alert("Add your baby gifts and send the list to your friends and family");
    }			
	else {
	    const listItem = document.createElement("li");
	    const listText = document.createElement("span");
	    const purchased = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = input.value;
        listItem.appendChild(purchased);
        purchased.textContent = "Purchased ";

        list.appendChild(listItem);

        input.value = "";

        listBtn.addEventListener("click", function(){
            list.removeChild(listItem);
        })
    }
    input.focus();
	} );