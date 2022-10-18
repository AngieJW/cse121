/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

let myself = { 
    name:"Angie",
    photo: {path: "./images/angie.jpg", name: "Angie Duhard's photo"},
    favoriteFoods: ["pizza","sushi","lasagna"],
    hobbies: ["running", "reading", "hiking"],
    placesLived: [
    {place: "Orleans, France", length: "17 years"},
    {place: "Paris, France", length: "12 years"},
    {place: "Marseille, France", length: "2 months"},
    ]
}
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = myself.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute("src", myself.photo.path);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute("alt", myself.photo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
function addFood() {
    for (let i = 0; i < myself.favoriteFoods.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = myself.favoriteFoods[i];
    document.getElementById('favorite-foods').appendChild(li);
    }
}
  addFood();
    

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

function addHobby() {
    for (let i = 0; i < myself.hobbies.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = myself.hobbies[i];
    document.getElementById('hobbies').appendChild(li);
    }
}

addHobby()

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
function renderPlaces(placesLived) {
    const html = placesLived.map(
      (place) => `<tr>
      <td>${place.place}</td>
      <td>${place.length}</td>
      </tr>`
    );
    document.querySelector("#places-lived").innerHTML = html.join(" | ");
  }

  renderPlaces(myself.placesLived)
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
