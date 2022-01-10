console.log("Winter break exercises");

// **Functions

// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// function convertTime(type, number) {
//     if (type === "S") {
//         return number * 60;
//     }
//     else if (type === "M") {
//         return number / 60;
//     }
//     else {
//         return "Invalid input";
//     }
// }
// let userTypeInput = prompt("Enter S for seconds, M for minutes");
// let userNumberInput = parseInt(prompt("Enter the amount of time:"));
// alert(convertTime(userTypeInput, userNumberInput));


// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(number) {
    result = number + 1;
    return result;
}
console.log(nextNumber(7));
console.log(nextNumber(100));
console.log(nextNumber(500));

// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.

function convertHoursToSecond(number) {
    return number * 3600
}
console.log(convertHoursToSecond(1));
console.log(convertHoursToSecond(7));
console.log(convertHoursToSecond(10));

// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters.
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function returnTheRemainderFromTwoumbers(number1, number2) {
    result = number1 % number2;
    return result;
}
console.log(returnTheRemainderFromTwoumbers(13, 5));
console.log(returnTheRemainderFromTwoumbers(10, 6));
console.log(returnTheRemainderFromTwoumbers(19, 6));
// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function theFarmProblem(species) {
    let pigsAndCows = 2 * 4;
    let chickens = 2;
    result = (chickens + pigsAndCows);
    return result;
}
console.log(`The total number of legs is ${theFarmProblem()}`);


// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of
// characters in the first string is equal to the total number of characters in the second string.

function compareStrings(str) {
    let string01 = "darko";
    let string02 = "bozidar";
    console.log(string01.length === string02.length);
    console.log(string01.length !== string02.length);


}
compareStrings();

/// NE ZNAM KAKO BI BILO USEROT DA VNESE BILO KOJ STRING I DA IZVRSHI PROVERKA , BI VE ZAMOLIL DA POSOCITE kako kje bide sintaksata.

// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function singularOrPlural(x) {
    let userWordInput = x.slice(-1);
    if (userWordInput === "s") {
        console.log("plural");
    }
    else {
        console.log("singular");
    }
    return userWordInput;
}
singularOrPlural("mouse");
singularOrPlural("medals");

// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function caseInsensitiveCompare() {
    const s1 = 'javascript';
    const s2 = 'Javascript';
    console.log(s1.toLowerCase() === s2.toLowerCase());

}
caseInsensitiveCompare();

/// NE ZNAM KAKO BI BILO USEROT DA VNESE BILO KOJ STRING I DA IZVRSHI PROVERKA , BI VE ZAMOLIL DA POSOCITE kako kje bide sintaksata

// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input,
// your function should return "March", because March is the 3rd month.

function convertNumberToMonthName(number) {
    let userInput = number;
    switch (userInput) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log("May")
            break;
        case 6:
            console.log("June")
            break;
        case 7:
            console.log("Jully")
            break;
        case 8:
            console.log("August")
            break;
        case 9:
            console.log("September")
            break;
        case 10:
            console.log("October")
            break;
        case 11:
            console.log("November")
            break;
        case 12:
            console.log("December")
            break;
        default:
            console.log("invalid input");
    }
}
convertNumberToMonthName(7);

// Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?
function oneParametar(y) {
    let element = y;
    if (!element) {
        console.log("'The parametar is falsy")
    }
    else {
        console.log("'The parametar is truthy");
    }
    // if (element !== null && element !== 0 && element !== '' && element !== false && element !== undefined && !isNaN(element)) {
    //     console.log('The parametar is truthy');
    // }
    // else {
    //     console.log('The parametar is falsy');
    // }
    return element;
}
oneParametar(5);
oneParametar("");
// ** Arrays

// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.
function createAnArray(input) {
    let emptyArray = [];
    for (let i = 1; i < input; i++) {
        emptyArray.push(i);
        console.log(emptyArray);
    }
    return emptyArray;
}
createAnArray(4);
createAnArray(12);
// KAKO BI BI TREBALO DA BIDE SINTAKSATA SAMO EDNA NIZA DA MI ZADAVA VO KONZOLA , 
//PRIMER KOGA KJE ZADADAM 12 input DA JA DADE SAMO TAA NIZA A NE SITE SHTO I PRETHODAT?

// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.
function firstElement(myArrayH) {
    return myArrayH[0];

}
let randomArray = [2, 5, 7, 8, 6, , 4, 6];
let firstElementOfAnArray = firstElement(randomArray);
console.log(firstElementOfAnArray);
console.log(firstElement(["bob", "bobski", "hello"]));


// Task 2: Reverse an Arrayy
// Write a function to reverse an array.

function reverseAnArray(array) {
    return array.reverse();

}
let someArray = ["daniels", "jack"];
let simbioseArray = reverseAnArray(someArray);
console.log(simbioseArray);

// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
function findTheIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return i;
        }
    }
    return -1;
}
let arrayTooIndex = [1, 5, 6, 3, 7, 8, 2];
console.log(findTheIndex(arrayTooIndex, 5));
console.log(findTheIndex(arrayTooIndex, 9));

// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function checkGivenNumber(array, number) {
    let checkedNumber = false;
    for (element in array) {
        if (number === array[element]) {
            checkedNumber = true;
        }
    }
    return checkedNumber;
}
let arrayToChecking = [9, 6, 7, 3, 2, 10];
console.log(checkGivenNumber(arrayToChecking, 10));
console.log(checkGivenNumber(arrayToChecking, 11));



// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

function negateNumber(array) {
    for (let i in array) {
        array[i] *= -1;
    }
    return array;
}
let negateArray = [1, 2, 6, 8, 3, 1];
console.log(negateNumber(negateArray));
// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
function minAndMax(array) {
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    for (i = 0; i < array.length; i++) {
        if (array[i] < minNumber) minNumber = array[i];
        if (array[i] > maxNumber) maxNumber = array[i];
    }
    return maxNumber - minNumber;
}
let difference = [2, 1, 5, -23, 5, 6, 100];
console.log(minAndMax(difference));

// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.
function multiplyByLength(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= array.length;
    }
    return array;
}
let amountOfValue = [1, 5, 7, 2, 7];
console.log(multiplyByLength(amountOfValue));

// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            return "Jumper can't clear a hardle"
        }
    }
    return "Jumper can clear the hardle"
}
let arrayJumper = [1.6, 2.6, 3.6, 4.6, 5.7];
console.log(hurdleJump(arrayJumper, 9));

// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(number) {
    let generateArray = [];
    for (let i = number; i >= 0; i--) {
        generateArray.push(i);
    }
    return generateArray;
}
console.log(countdown(15));
// Task 10: Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

function oddUpEvenDown(array) {
    let elementArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) array[i] -= 1;
        else array[i] += 1;
        elementArray.push(array[i]);
    }
    return elementArray;
}
let incrementing = [1, 2, 5, 6, 7, 3, 8, 11, 12];
console.log(oddUpEvenDown(incrementing));
