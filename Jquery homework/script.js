console.log("Jquery homework");

$(document).ready(function () {
  /// Homework pt. #1
  let input = $("#input");
  let btn = $("#submit");
  let header = $("h1").first();

  btn.click(function () {
    let inputText = input.val();
    header.text(`Hello there ${inputText}!`);
  });

  /// Homework pt. #2
  //     Create two inputs, one for text and one for color
  // Create a button that says: generate h1
  // Create an h3 element for messages
  // When the button is clicked create a new header below the inputs and button
  // The new header should have the text and color from the inputs
  // If the person enters an invalid color or an empty text show an error message to the message element

  let inputForText = $("#forText");
  let inputForColor = $("#forColor");
  let button = $("#generate");
  let header01 = $("h3").first();

  button.click(function () {
    let textInput = inputForText.val();
    let colorInput = inputForColor.val();

    $("#results")
      .append(
        `<h1>${textInput}</h1>
          `
      )
      .css("color", `${colorInput}`);

    if (
      `${textInput}` === 0 &&
      `${textInput}` === null &&
      `${textInput}` === undefined &&
      `${textInput}` === ""
    ) {
      header01.text("Error, enter text and color");
    }
    // else
    // }
  });
});
