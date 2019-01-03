// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favDinnerItems = [
    {
        name: "chicken tacos",
        ethnicity: "Mexican",
        vegetarian: "false"
    },
    {
        name: "spaghetti",
        ethnicity: "Italian",
        vegetarian: "true"
    },
    {
        name: "sweet potatoes",
        ethnicity: "Irish",
        vegetarian: "true"
    },
    {
        name: "alpaca burgers",
        ethnicity: "Peruvian",
        vegetarian: "false"
    }
]

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.


const outputElement = document.querySelector("#app");


favDinnerItems.forEach(dinnerItem => {
    let stringOFHTML = `<article class="food">`;
    for (const entrySet of Object.entries(dinnerItem)){
        stringOFHTML += `<div>${entrySet[0]}: ${entrySet[1]}</div>`
        console.log(entrySet);
    }
    outputElement.innerHTML += stringOFHTML + "</article>"
})