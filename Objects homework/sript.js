console.log("Objects homework");

let dog = {
  name: "Freud",
  kind: "Maltese",
  speak: function () {
    return "I'm hungry";
  },
};

console.log(dog.speak());

function Dog(nameFromUser, kindFromUser, favFoodFromUser) {
  this.name = nameFromUser;
  this.kind = kindFromUser;
  this.favFood = favFoodFromUser;
  this.speak = function () {
    return "Woof Woof";
  };
}
let myDog = new Dog("Freud", "Maltese", "Chicken");
console.log(myDog);
console.log(myDog.speak());

/// homework pt.2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
let readingStatus = {
  title: "Flying Saucers",
  author: "Jung",
  isReading: true,
  readingStatus01: function () {
    return this.isReading !== true
      ? "Already read 'The Robots of dawn' by Isaac Asimov."
      : "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins";
  },
};
console.log(readingStatus.readingStatus01());

let userReadingStatus = prompt("Have you read The Robots of the dawn?Yes/No");

if (userReadingStatus === "yes") {
  console.log(
    "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins."
  );
} else {
  console.log(" Read 'The Robots of dawn' by Isaac Asimov.");
}
//Another way with function constructor
// function Book(titleFromUser, authorOfTheBook, isReading) {
//   this.titleFromUser = titleFromUser;
//   this.authorOfTheBook = authorOfTheBook;
//   this.isReading = isReading;
//   this.readingStatus = function () {
//     if (
//       this.titleFromUser === "The Robots of dawn" &&
//       this.authorOfTheBook === "Isaac Asimov" &&
//       this.isReading === true
//     ) {
//       console.log(
//         "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
//       );
//     } else {
//       console.log("Read 'The Robots of dawn' by Isaac Asimov.");
//     }
//   };
// }

// let myBook = new Book("The Robots of dawn", "Isaac Asimov", true);
// console.log(myBook);
