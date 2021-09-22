const prompt = require('prompt-sync')();

const selection = Number(prompt('Type 1 to combine colors or type 2 to deconstruct a color:'));

//** Deconstruct Colors */
const purple = "that deconstructs to red + blue";
const orange = "that deconstructs to red + yellow";
const green = "that deconstructs to blue + yellow";

if (selection == 1) {
    console.log("You chose to combine colors");
    const combineColorOne = prompt('What is the first color you would like to combine?');
    const combineColorTwo = prompt('What is the second color you would like to combine?');

    if (combineColorOne === "red" && combineColorTwo === "blue") {
        console.log("Those colors combine to purple!")
    } else if (combineColorOne === "red" && combineColorTwo === "yellow") {
        console.log("Those colors combine to orange!")
    } else if (combineColorOne === "blue" && combineColorTwo === "yellow") {
        console.log("Those colors combine to green!")
    } else {
        console.log("Error!")
    }
}

if (selection == 2) {
    console.log("You chose to deconstruct a color");
    const deconstructColor = prompt('What is the color you would like to deconstruct?');

    if (deconstructColor === "purple") {
        console.log(purple);
    } else if (deconstructColor === "orange") {
        console.log(orange);
    } else if (deconstructColor === "green") {
        console.log(green);
    } else {
        console.log("Error!")
    }
}