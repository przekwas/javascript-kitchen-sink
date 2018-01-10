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




