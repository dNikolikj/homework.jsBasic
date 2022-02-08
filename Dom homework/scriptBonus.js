// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)
let recipeName = document.getElementById("recipeName");
let ingredients = document.getElementById("ingredients");
let nameOfIngredient = document.getElementById("nameOfIngredient");
let listOfIngredients = document.getElementById("nameOf");
let btnP = document.getElementById("clickRecipe");
let tableBtn = document.getElementById("table");
let resultDiv = document.getElementById("addTable");

btnP.addEventListener("click", function () {
  document.getElementById(
    "recipeInput"
  ).innerHTML += `<h1> Recipe: ${recipeName.value} </h1>`;
  document.getElementById(
    "numOf"
  ).innerHTML += `<h3>Number of ingredients: ${ingredients.value} </h3>`;
  document.getElementById(
    "addList"
  ).innerHTML += `<li>${listOfIngredients.value}</li>`;
});
tableBtn.addEventListener("click", function () {
  let resultTable = resultDiv.getElementsByTagName("tbody")[0];
  resultTable.innerHTML = "";
  resultTable.innerHTML += `
  <tr> 
 <td> Name of the recipe </td>
<td> ${recipeName.value} </td>
</tr>
<tr> 
<td> Number of ingredients </td>
<td> ${ingredients.value} </td>
</tr>
<tr> 
<td> Name of every ingredient </td>
<td> ${listOfIngredients.value} </td>
</tr>
`;
});
