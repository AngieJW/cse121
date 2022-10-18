/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myname = "Angie DUHARD";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myname;

// Step 3: declare and instantiate a variable to hold the current year
let date = new Date();
let thisyear = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById('year').innerHTML = thisyear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myphoto = "Photo of Angie Duhard"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
// document.querySelector('img').src = './images/angie.jpg';
document.querySelector('img').setAttribute("src", './images/angie.jpg');
document.querySelector('img').setAttribute("alt", myphoto);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ["pizza", " sushi", " tacos", " chicken noodles" ]

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById('food').innerHTML = foods.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
let lasagna = "homemade lasagna"

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(lasagna)

// Step 5: repeat Step 2
document.getElementById('food').innerHTML = foods.join(", ");


// Step 6: remove the first element in the favorite foods array
foods.shift()

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = foods.join(", ");

// Step 8: remove the last element in the favorite foods array
foods.pop()

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = foods.join(", ");


