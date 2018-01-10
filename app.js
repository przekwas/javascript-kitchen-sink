//global variables
let myName = "Luke Przekwas";
const totalUnitedStates = 50;
let sum = 5 + 4;

/*code to display an alert if name starts with a letter after L
checks if the ascii code at the first letter position is greater than 76 (ascii for capital L)*/
if (myName.charCodeAt(0) > 76) {
    alert("Back of the line!");
} else {
    alert("Next!");
};

//function to alert Hello World!
function sayHello() {
    alert("Hello World!");
};

sayHello();

//function to take name and age and check if age is < 21
function ageCheck (name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

ageCheck("Charles", 21);
ageCheck("Abby", 27);
ageCheck("James", 18);
ageCheck("John", 17);

let favVeggies = ["Mushrooms", "Broccoli", "Squash", "Carrots", "Celery"];

//for loop to display favVeggies array to console
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
};

let personArray = [
    {
        name: "Luke",
        age: 30
    },
    {
        name: "Audrey",
        age: 26
    },
    {
        name: "Yzerman",
        age: 14
    },
    {
        name: "Apollo",
        age: 4
    },
    {
        name: "Chris",
        age: 28
    }
];

//loop to call ageCheck function for each name/age in the array
for (let i = 0; i < personArray.length; i++) {
    ageCheck(personArray[i].name, personArray[i].age);
};

//function to take any string and return # of CHARACTERS
function getCharacters(text) {
    let charactersTotal = 0;
    for (let i = 0; i < text.length; i++) {
        charactersTotal++;
    }
    return charactersTotal;
}

let previousObjective = getCharacters("Hello World");

console.log("Total number of characters: " + previousObjective);

//checks if the # of characters from the previous objective is odd/even
if (previousObjective % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

//function to take any string and return # of LETTERS
function getLetters(text) {
    let lettersTotal = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXRYZ"
    let splitAlphabet = alphabet.split("");
    for (let i = 0; i < text.length; i++) {
        if(splitAlphabet.indexOf(text[i]) > -1) {
            lettersTotal = lettersTotal + 1;
        }
    }
    return lettersTotal;
};

let previousObj = getLetters("Hello World");

console.log("Total number of letters: " + previousObj);

//checks if the # of LETTERS from the previous objective is odd/even
if (previousObj % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}




