/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2    
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    sum = number1 + number2;
    return sum;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    let number1 = Number(document.querySelector('#addend1').value);
    let number2 = Number(document.querySelector('#addend2').value);
    document.getElementById('sum').value = add(number1,number2);
    return;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', addNumbers);



// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1,number2) {
    difference = number1 - number2;
    return difference;
}

function subtractNumbers() {
    let number1 = Number(document.querySelector('#minuend').value);
    let number2 = Number(document.querySelector('#subtrahend').value);
    document.getElementById('difference').value = subtract(number1,number2);
    return;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1,number2) {
    product = number1 * number2;
    return product;
}

function multiplyNumbers() {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);
    document.getElementById('product').value = multiply(number1,number2);
    return;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1,number2) {
    quotient = number1 / number2;
    return quotient;
}

function divideNumbers() {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    document.getElementById('quotient').value = divide(number1,number2);
    return;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year
let date = new Date();
currentYear = date.getFullYear();
document.querySelector('#year').innerHTML = currentYear;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let numbers = [];

for (let i = 1; i <= 25; i++) {
   numbers.push(i);
}
document.querySelector('#array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = numbers.filter(number => {
    return number % 2 != 0;
});
    
document.querySelector('#odds').innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = numbers.filter(number => {
    return number % 2 === 0;
});
    
document.querySelector('#evens').innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbers.reduce(function (total, item) {
    return total + item;
  });
  document.querySelector('#sumOfArray').innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function multiplyBy2(number) {
    return number*2;
}
let multiplied = numbers.map(multiplyBy2);
document.querySelector('#multiplied').innerHTML = multiplied

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = multiplied.reduce(function (total, item) {
    return total + item;
  });
  document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
