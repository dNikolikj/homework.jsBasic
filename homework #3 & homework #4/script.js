console.log("corected homework #3 and homework#4(with questions)")

///////homework 3 funkcionira so korekciite zadacata so atm

//  Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

// let enterCash = parseInt(prompt("Please enter the amount of cash you want to withdraw"));

// function atm(enterCash) {
//     let money = 1000;
//     let giveCash = money - enterCash;
//     if(enterCash <= 1000) {
//         console.log(`You have ${giveCash} dollars left on your account.`);
//     }
//     else {
//         console.log("You don't have enough money");
// //     }
// }

// atm(enterCash);

function functionTypeOf(x) {
    console.log(typeof (x));
}

functionTypeOf(null);
functionTypeOf(1);
functionTypeOf("string");
functionTypeOf(true);
functionTypeOf();


// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

let storyArray = ["Bozidar", "happy", "playing the guitar"];
function tellStory() {
    console.log(`This is ${storyArray[0]}. ${storyArray[0]} is a nice person. Today they are ${storyArray[1]}. They are ${storyArray[2]} all day. The end.`);
}

tellStory();
///////////////////
console.log("neuspeshna");
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
//  If one of the numbers of the array is invalid show an error message instead of a result.

let arrayOfFiveNumbers = [5, 6, 7, 7, 4];

function sumOfFiveNumbers(arrayOfFiveNumbers) {
    let sumOfArray = 0;
    for (let i = 0; i < arrayOfFiveNumbers.lenght; i++) {
        if (validateNumber(arrayOfFiveNumbers[i])) {
            sumOfArray += arrayOfFiveNumbers[i];
            console.log(sumOfArray);

        }
        else return "ERROR"
    }
    return sumOfArray
}

function validateNumber(number) {
    if (typeof number == "number") {
        return true;
    }
    else return false;
}
console.log(sumOfFiveNumbers(arrayOfFiveNumbers));





//////////homework 4
console.log(" homework #4");

///HOMEWORK #1
// write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function oneBigString() {
    let bigString = ["Hello", "there", "students", "of", "SEDC", "!"];
    console.log(bigString[0] + " " + bigString[1] + " " + bigString[2] + " " + bigString[3] + " " + bigString[4] + " " + bigString[5]);
}

oneBigString();

// HOMEWORK #2
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("\n");
    }
    else {
        console.log("");
    }

}
// // Ne funkcionira...

//   HOMEWORK #3
//   Title: Looping structures

//   Description: Write a JavaScript function that will return:
//   The sum of the MAX and MIN numbers from an array with numbers
//   Ex: arr = [3, 5, 6, 8, 11]
//   Output: Max: 11, Min: 3, Sum: 14

//   Bonus: Try making the function work if there are other types of items in it

const arr = [3, 5, 6, 8, 11];

function sumOfAnArray(arrays) {

    const highest = Math.max(...arr);
    const lowest = Math.min(...arr);

    return `The sum of maximum ${highest} and lowest ${lowest} is ${highest + lowest}`;


}
console.log(sumOfAnArray(arr));

// HOMEWORK #4
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Bob", "Jill", "Jack", "Johnie"];
let lastNames = ["Gregory", "Wurtz", "Daniels", "Walker"];

function fullNames(array1, array2) {
    if (!Array.isArray(array1) || !array1.length || !Array.isArray(array2) || !array2.length) {
        return "Please enter Valid array"
    }
    let resultArray = [];
    for (let i = 0; i < array1.lenght - 1; i++) {
        resultArray.push(array1[i]);
    }
    for (let i = 0; i < array2.lenght - 1; i++) {
        resultArray.push(array2[i]);
    }
    return resultArray;

}
let finalArray = fullNames(resultArray);
console.log(finalArray);

    /// dobivam undefined vo console i ne znam zosto se slucuva,//
    // isto taka i bonusot ne uspeav, bi ve zamolil za kod kako treba da se ishendlaat ovie dve situacii.