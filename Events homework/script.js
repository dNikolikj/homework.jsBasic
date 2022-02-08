let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let btn = document.getElementById("create");

let table = document.getElementById("tableNode");

btn.addEventListener("click", function () {
  table.innerHTML = "";
  let rowVal = rows.value;
  let colsVal = cols.value;
  let setTable = document.createElement(`table`);
  table.appendChild(setTable);
  for (let i = 0; i < rowVal; i++) {
    let addRowws = document.createElement(`tr`);
    setTable.appendChild(addRowws);

    for (let j = 0; j < colsVal; j++) {
      let addCols = document.createElement(`td`);
      addRowws.appendChild(addCols);
      addCols.innerText = `Row ${i + 1} Column ${j + 1}`;
    }
  }
});
