console.log("Jquery homework");

$(document).ready(function () {

    /// Homework pt. #1
    let input = $("#input");
    let btn = $("#submit");
    let header = $("h1").first();

    btn.click(function () {
        let inputText = input.val();
        header.text(`Hello there ${inputText}!`);
    })

    /// Homework pt. #2
    //     Create two inputs, one for text and one for color
    // Create a button that says: generate h1
    // Create an h3 element for messages
    // When the button is clicked create a new header below the inputs and button
    // The new header should have the text and color from the inputs
    // If the person enters an invalid color or an empty text show an error message to the message element

    let forText = $("#forText");
    let forColor = $("#forColor");
    let btnGenerate = $("#generate");
    let header03 = $("message");

    btnGenerate.click(function () {
        let textInput = forText.val();
        let colorInput = forColor.val();
        $("<h2>Insert below button</2>").insertAfter("#generate");
    })










});