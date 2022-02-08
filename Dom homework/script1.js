console.log("test 1");

// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let firstDiv = document.getElementsByClassName("aDiv")[0];
console.log(firstDiv);
let childHeader = document.getElementById("myTitle");
childHeader.innerText = "Dom manipulation has started the engine ©";
let smallerSibling = childHeader.nextElementSibling;
smallerSibling.innerText = "More to come 🤞";
let firstQueryP = document.querySelector(".second");
firstQueryP.innerText = "The query journey takes it's course.";
let parentDiv = firstQueryP.parentElement;
let childTextTag = parentDiv.lastElementChild;
childTextTag.innerText = " I have found my father.";
let mySecondDiv = firstDiv.nextElementSibling;
let myThirdDiv = mySecondDiv.nextElementSibling;
let secondToLastHeader = myThirdDiv.firstElementChild;
secondToLastHeader.innerText = "Almost there.";
let lastHeader = secondToLastHeader.nextElementSibling;
lastHeader.innerText = "DONE!";

// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let myList = document.querySelector(".myList");
let arrayNumber = [1, 5, 6, 2, 6, 8, 3];
let sum = 0;
for (let number of arrayNumber) {
  myList.innerHTML += `<li>${number}</li>`;
}
for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i];
  document.querySelector(
    ".result"
  ).innerText = `The sum of the ${arrayNumber[0]} +  ${arrayNumber[1]} +  ${arrayNumber[2]} +  ${arrayNumber[3]} +  ${arrayNumber[4]}
  + ${arrayNumber[5]} +  ${arrayNumber[6]} = ${sum}`;
}
